"use strict";
const electron = require("electron");
const preload = require("@electron-toolkit/preload");
const IPC_CHANNEL = {
  // 文件相关
  FILE_READ: "file:read",
  FILE_SELECT: "file:select",
  SYSTEM: {
    // 窗口状态变化
    WINDOW_STATE_CHANGE: "system:window-state-change",
    // 显示窗口
    SHOW_WINDOW: "system:show-window",
    // 隐藏窗口
    HIDE_WINDOW: "system:hide-window"
  }
};
function createIpcListener(channel, callback) {
  const listener = (_event, data) => {
    callback(data);
  };
  electron.ipcRenderer.on(channel, listener);
  return () => {
    electron.ipcRenderer.off(channel, listener);
  };
}
const api = {
  [IPC_CHANNEL.FILE_READ]: (filePath) => electron.ipcRenderer.invoke(IPC_CHANNEL.FILE_READ, filePath),
  [IPC_CHANNEL.FILE_SELECT]: () => electron.ipcRenderer.invoke(IPC_CHANNEL.FILE_SELECT),
  [IPC_CHANNEL.SYSTEM.WINDOW_STATE_CHANGE]: (callback) => createIpcListener(
    IPC_CHANNEL.SYSTEM.WINDOW_STATE_CHANGE,
    callback
  ),
  [IPC_CHANNEL.SYSTEM.SHOW_WINDOW]: (callback) => createIpcListener(IPC_CHANNEL.SYSTEM.SHOW_WINDOW, callback),
  [IPC_CHANNEL.SYSTEM.HIDE_WINDOW]: (callback) => createIpcListener(IPC_CHANNEL.SYSTEM.HIDE_WINDOW, callback)
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
