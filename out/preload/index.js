"use strict";
const electron = require("electron");
const preload = require("@electron-toolkit/preload");
const IPC_CHANNEL = {
  // 文件相关
  FILE_READ: "file:read",
  FILE_SELECT: "file:select",
  SYSTEM: {
    // 平台
    PLATFORM: "system:platform"
  }
};
const api = {
  [IPC_CHANNEL.FILE_READ]: (filePath) => electron.ipcRenderer.invoke(IPC_CHANNEL.FILE_READ, filePath),
  [IPC_CHANNEL.FILE_SELECT]: () => electron.ipcRenderer.invoke(IPC_CHANNEL.FILE_SELECT),
  [IPC_CHANNEL.SYSTEM.PLATFORM]: () => electron.ipcRenderer.invoke(IPC_CHANNEL.SYSTEM.PLATFORM)
};
if (process.contextIsolated) {
  try {
    electron.contextBridge.exposeInMainWorld("electron", preload.electronAPI);
    electron.contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error(error);
  }
} else {
  window.electron = preload.electronAPI;
  window.api = api;
}
