import { dialog, ipcMain, BrowserWindow } from 'electron'
import { readFile } from 'node:fs/promises'
import { IPC_CHANNEL } from '@constants'

export async function registerIpc(mainWindow: BrowserWindow) {
  ipcMain.handle(IPC_CHANNEL.FILE_READ, async (_event, filePath: string) => {
    if (!filePath) {
      throw new Error('缺少文件路径')
    }

    const content = await readFile(filePath, { encoding: 'utf-8' })
    return content
  })

  ipcMain.handle(IPC_CHANNEL.FILE_SELECT, async () => {
    const { canceled, filePaths } = await dialog.showOpenDialog({
      title: '选择文件',
      properties: ['openFile'],
    })

    if (canceled || filePaths.length === 0) {
      return null
    }

    return filePaths[0]
  })

  ipcMain.handle(IPC_CHANNEL.SYSTEM.PLATFORM, async () => {
    const map = {
      win32: 'Windows',
      darwin: 'macOS',
      linux: 'Linux',
    }
    return map[process.platform]
  })

  ipcMain
}
