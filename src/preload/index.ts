/// <reference path="./index.d.ts" />

import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { IPC_CHANNEL } from '@constants'

const api = {
  [IPC_CHANNEL.FILE_READ]: (filePath: string) => ipcRenderer.invoke(IPC_CHANNEL.FILE_READ, filePath),
  [IPC_CHANNEL.FILE_SELECT]: () => ipcRenderer.invoke(IPC_CHANNEL.FILE_SELECT),
  [IPC_CHANNEL.SYSTEM.PLATFORM]: () => ipcRenderer.invoke(IPC_CHANNEL.SYSTEM.PLATFORM),
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}

export type WindowApiType = typeof api
