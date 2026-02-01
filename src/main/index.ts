import { app, shell, BrowserWindow, Menu } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import { devtron } from '@electron/devtron'
// 主进程的公共资源, 推荐加上?asset后缀
import icon from '../../resources/icon.png?asset'
import { registerIpc } from './ipc'
import { createTopMenu, createContextMenu } from './menu'

let mainWindow: BrowserWindow | null = null
let willQuitApp = false

async function createWindow(): Promise<void> {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: false,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
    },
  })

  // 创建菜单（在创建窗口后立即设置）
  createTopMenu()

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  if (is.dev) {
    await devtron.install()
    mainWindow.webContents.openDevTools()
  }

  await registerIpc(mainWindow)

  mainWindow.on('ready-to-show', () => {
    mainWindow?.show()
  })

  mainWindow.on('close', (event) => {
    if (process.platform === 'darwin' && !willQuitApp) {
      event.preventDefault()
      mainWindow?.hide()
    }
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.whenReady().then(async () => {
  electronApp.setAppUserModelId('com.electron')
  if (!mainWindow) {
    await createWindow()
    createContextMenu()
  }
})

app.on('before-quit', () => {
  willQuitApp = true
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('browser-window-created', (_, window) => {
  optimizer.watchWindowShortcuts(window)
})

app.on('activate', async function () {
  if (mainWindow) {
    mainWindow.show()
    return
  }

  await createWindow()
})
