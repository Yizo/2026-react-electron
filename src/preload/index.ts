/// <reference path="./index.d.ts" />

import { contextBridge, ipcRenderer } from "electron";
import { electronAPI } from "@electron-toolkit/preload";
import { IPC_CHANNEL } from "@constants";
import type { IpcRendererEvent } from "electron";

function createIpcListener<T = any>(channel: string, callback: (data: T) => void) {
	const listener = (_event: IpcRendererEvent, data: T) => {
		callback(data);
	};
	ipcRenderer.on(channel, listener);
	return () => {
		ipcRenderer.off(channel, listener);
	};
}

const api = {
	[IPC_CHANNEL.FILE_READ]: (filePath: string) =>
		ipcRenderer.invoke(IPC_CHANNEL.FILE_READ, filePath),
	[IPC_CHANNEL.FILE_SELECT]: () => ipcRenderer.invoke(IPC_CHANNEL.FILE_SELECT),
	[IPC_CHANNEL.SYSTEM.WINDOW_STATE_CHANGE]: (
		callback: (state: "restored" | "maximized" | "minimized" | "full-screen") => void
	) =>
		createIpcListener<"restored" | "maximized" | "minimized" | "full-screen">(
			IPC_CHANNEL.SYSTEM.WINDOW_STATE_CHANGE,
			callback
		),
	[IPC_CHANNEL.SYSTEM.SHOW_WINDOW]: (callback: () => void) =>
		createIpcListener<[]>(IPC_CHANNEL.SYSTEM.SHOW_WINDOW, callback),
	[IPC_CHANNEL.SYSTEM.HIDE_WINDOW]: (callback: () => void) =>
		createIpcListener<[]>(IPC_CHANNEL.SYSTEM.HIDE_WINDOW, callback),
};

if (process.contextIsolated) {
	try {
		contextBridge.exposeInMainWorld("electron", electronAPI);
		contextBridge.exposeInMainWorld("api", api);
	} catch (error) {
		console.error(error);
	}
} else {
	window.electron = electronAPI;
	window.api = api;
}

export type WindowApiType = typeof api;
