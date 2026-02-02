import { app, shell, BrowserWindow } from "electron";
import type { BrowserWindowConstructorOptions } from "electron";
import { join } from "path";
import { electronApp, optimizer, is, platform } from "@electron-toolkit/utils";
import { devtron } from "@electron/devtron";
// 主进程的公共资源, 推荐加上?asset后缀
import icon from "../../resources/icon.png?asset";
import { registerIpc } from "./ipc";
import { createTopMenu, createContextMenu } from "./menu";

let mainWindow: BrowserWindow | null = null;
let willQuitApp = false;

async function createWindow(): Promise<void> {
	const isMac = platform.isMacOS;
	const isLinux = platform.isLinux;

	function getMainWindowOptions(): BrowserWindowConstructorOptions {
		const options: BrowserWindowConstructorOptions = {
			frame: false,
			titleBarStyle: "hidden",
			titleBarOverlay: {
				height: 35,
				// 按钮区域透明
				color: "rgba(0,0,0,0)",
				// 按钮颜色
				symbolColor: "white",
			},
		};

		if (isMac) {
			Object.assign(options, {
				vibrancy: "sidebar",
				visualEffectState: "active",
			});
		}
		return options;
	}

	mainWindow = new BrowserWindow({
		width: 900,
		height: 670,
		minWidth: 900,
		minHeight: 670,
		show: false,
		autoHideMenuBar: true,
		...getMainWindowOptions(),
		...(isLinux ? { icon } : {}),
		webPreferences: {
			preload: join(__dirname, "../preload/index.js"),
			sandbox: false,
		},
	});

	// 创建菜单（在创建窗口后立即设置）
	createTopMenu();

	mainWindow.webContents.setWindowOpenHandler((details) => {
		shell.openExternal(details.url);
		return { action: "deny" };
	});

	if (is.dev && process.env["ELECTRON_RENDERER_URL"]) {
		mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
	} else {
		mainWindow.loadFile(join(__dirname, "../renderer/index.html"));
	}

	if (is.dev) {
		await devtron.install();
		mainWindow.webContents.openDevTools();
	}

	await registerIpc(mainWindow);

	mainWindow.on("close", (event) => {
		if (platform.isMacOS && !willQuitApp) {
			event.preventDefault();
			mainWindow?.hide();
		}
	});

	mainWindow.on("closed", () => {
		mainWindow = null;
	});
}

app.whenReady().then(async () => {
	electronApp.setAppUserModelId("com.electron");
	if (!mainWindow) {
		await createWindow();
		createContextMenu();
	}
});

app.on("before-quit", () => {
	willQuitApp = true;
});

app.on("window-all-closed", () => {
	if (!platform.isMacOS) {
		app.quit();
	}
});

app.on("browser-window-created", (_, window) => {
	optimizer.watchWindowShortcuts(window);
});

app.on("activate", async function () {
	if (mainWindow) {
		mainWindow.show();
		return;
	}

	await createWindow();
});
