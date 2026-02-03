"use strict";
const __WEBPACK_EXTERNAL_MODULE_electron__ = require("electron");
const path = require("path");
const utils = require("@electron-toolkit/utils");
const node_module = require("node:module");
const promises = require("node:fs/promises");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const __WEBPACK_EXTERNAL_MODULE_electron____namespace = /* @__PURE__ */ _interopNamespaceDefault(__WEBPACK_EXTERNAL_MODULE_electron__);
const __WEBPACK_EXTERNAL_createRequire_require = node_module.createRequire(require("url").pathToFileURL(__filename).href);
var __webpack_modules__ = [
  ,
  /* 1 */
  /***/
  ((module) => {
    module.exports = __WEBPACK_EXTERNAL_MODULE_electron____namespace;
  }),
  /* 2 */
  /***/
  ((module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire_require("node:path");
  }),
  /* 3 */
  /***/
  ((module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire_require("node:module");
  }),
  /* 4 */
  /***/
  ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
    __webpack_require__2.r(__webpack_exports__2);
    __webpack_require__2.d(__webpack_exports__2, {
      /* harmony export */
      MSG_TYPE: () => (
        /* binding */
        MSG_TYPE
      ),
      /* harmony export */
      PORT_NAME: () => (
        /* binding */
        PORT_NAME
      ),
      /* harmony export */
      excludedIpcChannels: () => (
        /* binding */
        excludedIpcChannels
      )
      /* harmony export */
    });
    const PORT_NAME = {
      PANEL: "devt-panel",
      CONTENT_SCRIPT: "devt-content-script"
    };
    const MSG_TYPE = {
      PING: "ping",
      PONG: "pong",
      GET_ALL_EVENTS: "get-all-events",
      RENDER_EVENT: "render-event",
      CLEAR_EVENTS: "clear-events",
      EVENTS_CLEARED_ACK: "events-cleared-ack",
      ADD_IPC_EVENT: "add-ipc-event",
      SEND_TO_PANEL: "send-to-panel"
    };
    const excludedIpcChannels = ["devtron-ipc-events"];
  }),
  /* 5 */
  /***/
  ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
    __webpack_require__2.r(__webpack_exports__2);
    __webpack_require__2.d(__webpack_exports__2, {
      /* harmony export */
      logger: () => (
        /* binding */
        logger
      )
      /* harmony export */
    });
    var _types_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(6);
    class Logger {
      currentLogLevel = _types_shared__WEBPACK_IMPORTED_MODULE_0__.LogLevel.warn;
      setLogLevel(level) {
        if (_types_shared__WEBPACK_IMPORTED_MODULE_0__.LogLevel[level] === void 0) {
          console.error(`Invalid log level: ${level}`);
          return;
        }
        if (_types_shared__WEBPACK_IMPORTED_MODULE_0__.LogLevel[level] === this.currentLogLevel)
          return;
        this.currentLogLevel = _types_shared__WEBPACK_IMPORTED_MODULE_0__.LogLevel[level];
      }
      log(level, ...args) {
        if (this.currentLogLevel === _types_shared__WEBPACK_IMPORTED_MODULE_0__.LogLevel.none)
          return;
        if (level < this.currentLogLevel)
          return;
        switch (level) {
          case _types_shared__WEBPACK_IMPORTED_MODULE_0__.LogLevel.debug:
            console.debug(...args);
            break;
          case _types_shared__WEBPACK_IMPORTED_MODULE_0__.LogLevel.info:
            console.log(...args);
            break;
          case _types_shared__WEBPACK_IMPORTED_MODULE_0__.LogLevel.warn:
            console.warn(...args);
            break;
          case _types_shared__WEBPACK_IMPORTED_MODULE_0__.LogLevel.error:
            console.error(...args);
            break;
        }
      }
      debug(...args) {
        this.log(_types_shared__WEBPACK_IMPORTED_MODULE_0__.LogLevel.debug, ...args);
      }
      info(...args) {
        this.log(_types_shared__WEBPACK_IMPORTED_MODULE_0__.LogLevel.info, ...args);
      }
      warn(...args) {
        this.log(_types_shared__WEBPACK_IMPORTED_MODULE_0__.LogLevel.warn, ...args);
      }
      error(...args) {
        this.log(_types_shared__WEBPACK_IMPORTED_MODULE_0__.LogLevel.error, ...args);
      }
    }
    const logger = new Logger();
  }),
  /* 6 */
  /***/
  ((__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
    __webpack_require__2.r(__webpack_exports__2);
    __webpack_require__2.d(__webpack_exports__2, {
      /* harmony export */
      LogLevel: () => (
        /* binding */
        LogLevel
      )
      /* harmony export */
    });
    var LogLevel;
    (function(LogLevel2) {
      LogLevel2[LogLevel2["debug"] = 0] = "debug";
      LogLevel2[LogLevel2["info"] = 1] = "info";
      LogLevel2[LogLevel2["warn"] = 2] = "warn";
      LogLevel2[LogLevel2["error"] = 3] = "error";
      LogLevel2[LogLevel2["none"] = 4] = "none";
    })(LogLevel || (LogLevel = {}));
  })
  /******/
];
var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
  var cachedModule = __webpack_module_cache__[moduleId];
  if (cachedModule !== void 0) {
    return cachedModule.exports;
  }
  var module = __webpack_module_cache__[moduleId] = {
    /******/
    // no module.id needed
    /******/
    // no module.loaded needed
    /******/
    exports: {}
    /******/
  };
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  return module.exports;
}
(() => {
  __webpack_require__.n = (module) => {
    var getter = module && module.__esModule ? (
      /******/
      () => module["default"]
    ) : (
      /******/
      () => module
    );
    __webpack_require__.d(getter, { a: getter });
    return getter;
  };
})();
(() => {
  __webpack_require__.d = (exports$1, definition) => {
    for (var key in definition) {
      if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports$1, key)) {
        Object.defineProperty(exports$1, key, { enumerable: true, get: definition[key] });
      }
    }
  };
})();
(() => {
  __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
})();
(() => {
  __webpack_require__.r = (exports$1) => {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
    }
    Object.defineProperty(exports$1, "__esModule", { value: true });
  };
})();
var __webpack_exports__ = {};
(() => {
  __webpack_require__.r(__webpack_exports__);
  __webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    devtron: () => (
      /* binding */
      devtron
    )
    /* harmony export */
  });
  var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
  var node_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
  var node_path__WEBPACK_IMPORTED_MODULE_1___default = /* @__PURE__ */ __webpack_require__.n(node_path__WEBPACK_IMPORTED_MODULE_1__);
  var node_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
  var _common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
  var _utils_Logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
  let isInstalled = false;
  let isInstalledToDefaultSession = false;
  let devtronSW;
  let untrackedIpcCalls = 0;
  const isPayloadWithUuid = (payload) => {
    return payload[0] && typeof payload[0] === "object" && payload[0].__uuid__devtron && Array.isArray(payload[0].args);
  };
  const getArgsFromPayload = (payload) => {
    if (isPayloadWithUuid(payload)) {
      return payload[0].args || [];
    }
    return payload;
  };
  const getUuidFromPayload = (payload) => {
    if (isPayloadWithUuid(payload)) {
      return payload[0].__uuid__devtron;
    }
    return "";
  };
  function trackIpcEvent({ direction, channel, args, devtronSW: devtronSW2, serviceWorkerDetails, method }) {
    if (_common_constants__WEBPACK_IMPORTED_MODULE_3__.excludedIpcChannels.includes(channel))
      return;
    if (!devtronSW2) {
      _utils_Logger__WEBPACK_IMPORTED_MODULE_4__.logger.info(`The service worker for Devtron is not registered yet. Cannot track ${direction} IPC event for channel ${channel}.`);
      untrackedIpcCalls++;
      return;
    }
    const uuid = getUuidFromPayload(args);
    const newArgs = getArgsFromPayload(args);
    const eventData = {
      direction,
      channel,
      args: newArgs,
      timestamp: Date.now(),
      serviceWorkerDetails
    };
    if (method)
      eventData.method = method;
    if (uuid)
      eventData.uuid = uuid;
    devtronSW2.send("devtron-render-event", eventData);
  }
  function registerIpcListeners(ses, devtronSW2) {
    ses.on(
      // @ts-expect-error: '-ipc-message' is an internal event
      "-ipc-message",
      (event, channel, args) => {
        if (event.type === "frame")
          trackIpcEvent({ direction: "renderer-to-main", channel, args, devtronSW: devtronSW2 });
        else if (event.type === "service-worker")
          trackIpcEvent({ direction: "service-worker-to-main", channel, args, devtronSW: devtronSW2 });
      }
    );
    ses.on(
      // @ts-expect-error: '-ipc-invoke' is an internal event
      "-ipc-invoke",
      (event, channel, args) => {
        if (event.type === "frame")
          trackIpcEvent({ direction: "renderer-to-main", channel, args, devtronSW: devtronSW2 });
        else if (event.type === "service-worker")
          trackIpcEvent({ direction: "service-worker-to-main", channel, args, devtronSW: devtronSW2 });
      }
    );
    ses.on(
      // @ts-expect-error: '-ipc-message-sync' is an internal event
      "-ipc-message-sync",
      (event, channel, args) => {
        if (event.type === "frame")
          trackIpcEvent({ direction: "renderer-to-main", channel, args, devtronSW: devtronSW2 });
        else if (event.type === "service-worker")
          trackIpcEvent({ direction: "service-worker-to-main", channel, args, devtronSW: devtronSW2 });
      }
    );
  }
  function registerServiceWorkerSendListener(ses, devtronSW2) {
    const isInstalledSet = /* @__PURE__ */ new Set();
    const allRunning = ses.serviceWorkers.getAllRunning();
    for (const vid in allRunning) {
      const swInfo = allRunning[vid];
      const sw = ses.serviceWorkers.getWorkerFromVersionID(Number(vid));
      if (typeof sw === "undefined" || sw.scope === devtronSW2.scope)
        continue;
      isInstalledSet.add(swInfo.versionId);
      const originalSend = sw.send;
      sw.send = function(...args) {
        trackIpcEvent({
          direction: "main-to-service-worker",
          channel: args[0],
          args: args.slice(1),
          devtronSW: devtronSW2,
          serviceWorkerDetails: {
            serviceWorkerScope: sw.scope,
            serviceWorkerVersionId: sw.versionId
          }
        });
        return originalSend.apply(this, args);
      };
    }
    ses.serviceWorkers.on("running-status-changed", (details) => {
      if (details.runningStatus === "running" || details.runningStatus === "starting") {
        const sw = ses.serviceWorkers.getWorkerFromVersionID(details.versionId);
        if (typeof sw === "undefined" || sw.scope === devtronSW2.scope || isInstalledSet.has(sw.versionId))
          return;
        isInstalledSet.add(details.versionId);
        const originalSend = sw.send;
        sw.send = function(...args) {
          trackIpcEvent({
            direction: "main-to-service-worker",
            channel: args[0],
            args: args.slice(1),
            devtronSW: devtronSW2,
            serviceWorkerDetails: {
              serviceWorkerScope: sw.scope,
              serviceWorkerVersionId: sw.versionId
            }
          });
          return originalSend.apply(this, args);
        };
      }
    });
  }
  async function startServiceWorker(ses, extension) {
    try {
      const sw = await ses.serviceWorkers.startWorkerForScope(extension.url);
      sw.startTask();
      devtronSW = sw;
      registerIpcListeners(ses, sw);
      registerServiceWorkerSendListener(ses, sw);
    } catch (error) {
      _utils_Logger__WEBPACK_IMPORTED_MODULE_4__.logger.warn(`Failed to start Devtron service-worker (${error}), trying again...`);
      try {
        const handleDetails = async (event, details) => {
          if (details.scope === extension.url) {
            const sw = await ses.serviceWorkers.startWorkerForScope(extension.url);
            sw.startTask();
            devtronSW = sw;
            registerIpcListeners(ses, sw);
            registerServiceWorkerSendListener(ses, sw);
            ses.serviceWorkers.removeListener("registration-completed", handleDetails);
            _utils_Logger__WEBPACK_IMPORTED_MODULE_4__.logger.info(`Devtron service-worker started successfully`);
          }
        };
        ses.serviceWorkers.on("registration-completed", handleDetails);
      } catch (error2) {
        _utils_Logger__WEBPACK_IMPORTED_MODULE_4__.logger.error("Failed to start Devtron service-worker:", error2);
      }
    }
  }
  function patchIpcMain() {
    const listenerMap = /* @__PURE__ */ new Map();
    const storeTrackedListener = (channel, original, tracked) => {
      if (!listenerMap.has(channel)) {
        listenerMap.set(channel, /* @__PURE__ */ new Map());
      }
      listenerMap.get(channel).set(original, tracked);
    };
    const originalOn = electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.on.bind(electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain);
    const originalOff = electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.off.bind(electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain);
    const originalOnce = electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.once.bind(electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain);
    const originalAddListener = electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.addListener.bind(electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain);
    const originalRemoveListener = electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.removeListener.bind(electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain);
    const originalRemoveAllListeners = electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.removeAllListeners.bind(electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain);
    const originalHandle = electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.handle.bind(electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain);
    const originalHandleOnce = electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.handleOnce.bind(electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain);
    const originalRemoveHandler = electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.removeHandler.bind(electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain);
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.on = (channel, listener) => {
      const cleanedListener = (event, ...args) => {
        const newArgs = getArgsFromPayload(args);
        listener(event, ...newArgs);
      };
      storeTrackedListener(channel, listener, cleanedListener);
      return originalOn(channel, cleanedListener);
    };
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.off = (channel, listener) => {
      const channelMap = listenerMap.get(channel);
      const cleanedListener = channelMap?.get(listener);
      if (!cleanedListener)
        return electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain;
      channelMap?.delete(listener);
      if (channelMap && channelMap.size === 0) {
        listenerMap.delete(channel);
      }
      trackIpcEvent({ direction: "main", channel, args: [], devtronSW, method: "off" });
      return originalOff(channel, cleanedListener);
    };
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.once = (channel, listener) => {
      const cleanedListener = (event, ...args) => {
        const newArgs = getArgsFromPayload(args);
        listener(event, ...newArgs);
      };
      return originalOnce(channel, cleanedListener);
    };
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.addListener = (channel, listener) => {
      const cleanedListener = (event, ...args) => {
        const newArgs = getArgsFromPayload(args);
        listener(event, ...newArgs);
      };
      storeTrackedListener(channel, listener, cleanedListener);
      return originalAddListener(channel, cleanedListener);
    };
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.removeListener = (channel, listener) => {
      const channelMap = listenerMap.get(channel);
      const cleanedListener = channelMap?.get(listener);
      if (!cleanedListener)
        return electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain;
      channelMap?.delete(listener);
      if (channelMap && channelMap.size === 0) {
        listenerMap.delete(channel);
      }
      trackIpcEvent({ direction: "main", channel, args: [], devtronSW, method: "removeListener" });
      return originalRemoveListener(channel, cleanedListener);
    };
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.removeAllListeners = (channel) => {
      if (channel) {
        listenerMap.delete(channel);
        trackIpcEvent({
          direction: "main",
          channel,
          args: [],
          devtronSW,
          method: "removeAllListeners"
        });
        return originalRemoveAllListeners(channel);
      } else {
        listenerMap.clear();
        trackIpcEvent({
          direction: "main",
          channel: "",
          args: [],
          devtronSW,
          method: "removeAllListeners"
        });
        listenerMap.clear();
        return originalRemoveAllListeners();
      }
    };
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.handle = (channel, listener) => {
      const cleanedListener = async (event, ...args) => {
        const newArgs = getArgsFromPayload(args);
        const result = await listener(event, ...newArgs);
        return result;
      };
      return originalHandle(channel, cleanedListener);
    };
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.handleOnce = (channel, listener) => {
      const cleanedListener = async (event, ...args) => {
        const newArgs = getArgsFromPayload(args);
        const result = await listener(event, ...newArgs);
        return result;
      };
      return originalHandleOnce(channel, cleanedListener);
    };
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.removeHandler = (channel) => {
      listenerMap.delete(channel);
      trackIpcEvent({ direction: "main", channel, args: [], devtronSW, method: "removeHandler" });
      return originalRemoveHandler(channel);
    };
  }
  async function install(options = {}) {
    if (isInstalled)
      return;
    isInstalled = true;
    if (options.logLevel)
      _utils_Logger__WEBPACK_IMPORTED_MODULE_4__.logger.setLogLevel(options.logLevel);
    patchIpcMain();
    const installToSession = async (ses) => {
      if (ses === electron__WEBPACK_IMPORTED_MODULE_0__.session.defaultSession && isInstalledToDefaultSession)
        return;
      if (ses === electron__WEBPACK_IMPORTED_MODULE_0__.session.defaultSession)
        isInstalledToDefaultSession = true;
      let devtron2;
      try {
        const dirname = require("url").pathToFileURL(__filename).href;
        const serviceWorkerPreloadPath = (0, node_module__WEBPACK_IMPORTED_MODULE_2__.createRequire)(dirname).resolve("@electron/devtron/service-worker-preload");
        const rendererPreloadPath = (0, node_module__WEBPACK_IMPORTED_MODULE_2__.createRequire)(dirname).resolve("@electron/devtron/renderer-preload");
        ses.registerPreloadScript({
          filePath: serviceWorkerPreloadPath,
          type: "service-worker",
          id: "devtron-sw-preload"
        });
        ses.registerPreloadScript({
          filePath: rendererPreloadPath,
          type: "frame",
          id: "devtron-renderer-preload"
        });
        const extensionPath = node_path__WEBPACK_IMPORTED_MODULE_1___default().resolve(serviceWorkerPreloadPath, "..", "..", "extension");
        devtron2 = await ses.extensions.loadExtension(extensionPath, { allowFileAccess: true });
        await startServiceWorker(ses, devtron2);
        if (untrackedIpcCalls > 0) {
          _utils_Logger__WEBPACK_IMPORTED_MODULE_4__.logger.warn(`${untrackedIpcCalls} untracked IPC events were dispatched before the service worker was ready.`);
        }
        _utils_Logger__WEBPACK_IMPORTED_MODULE_4__.logger.info("Devtron service worker loaded successfully");
      } catch (error) {
        _utils_Logger__WEBPACK_IMPORTED_MODULE_4__.logger.error("Failed to load Devtron:", error);
      }
    };
    electron__WEBPACK_IMPORTED_MODULE_0__.app.on("session-created", installToSession);
    if (!isInstalledToDefaultSession && electron__WEBPACK_IMPORTED_MODULE_0__.app.isReady())
      await installToSession(electron__WEBPACK_IMPORTED_MODULE_0__.session.defaultSession);
  }
  async function getEvents() {
    if (!isInstalled) {
      _utils_Logger__WEBPACK_IMPORTED_MODULE_4__.logger.warn("You are trying to get IPC events before Devtron is installed.");
      return [];
    }
    if (!devtronSW) {
      _utils_Logger__WEBPACK_IMPORTED_MODULE_4__.logger.warn("Devtron service worker is not registered yet. Cannot get IPC events.");
      return [];
    }
    devtronSW.send("devtron-get-ipc-events");
    return new Promise((resolve) => {
      devtronSW.ipc.once("devtron-ipc-events", (event, ipcEvents) => {
        resolve(ipcEvents);
      });
    });
  }
  const devtron = {
    install,
    getEvents
  };
})();
const __webpack_exports__devtron = __webpack_exports__.devtron;
const icon = path.join(__dirname, "../../resources/icon.png");
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
async function registerIpc(mainWindow2) {
  __WEBPACK_EXTERNAL_MODULE_electron__.ipcMain.handle(IPC_CHANNEL.FILE_READ, async (_event, filePath) => {
    if (!filePath) {
      throw new Error("缺少文件路径");
    }
    const content = await promises.readFile(filePath, { encoding: "utf-8" });
    return content;
  });
  __WEBPACK_EXTERNAL_MODULE_electron__.ipcMain.handle(IPC_CHANNEL.FILE_SELECT, async () => {
    const { canceled, filePaths } = await __WEBPACK_EXTERNAL_MODULE_electron__.dialog.showOpenDialog({
      title: "选择文件",
      properties: ["openFile"]
    });
    if (canceled || filePaths.length === 0) {
      return null;
    }
    return filePaths[0];
  });
  const sendWindowState = (state) => {
    if (mainWindow2 && !mainWindow2.isDestroyed() && mainWindow2.webContents) {
      mainWindow2.webContents.send(IPC_CHANNEL.SYSTEM.WINDOW_STATE_CHANGE, state);
    }
  };
  mainWindow2.on("maximize", () => {
    sendWindowState("maximized");
  });
  mainWindow2.on("unmaximize", () => {
    sendWindowState("restored");
  });
  mainWindow2.on("minimize", () => {
    sendWindowState("minimized");
  });
  mainWindow2.on("enter-full-screen", () => {
    sendWindowState("full-screen");
  });
  mainWindow2.on("leave-full-screen", () => {
    sendWindowState("restored");
  });
  mainWindow2.on("ready-to-show", () => {
    mainWindow2?.show();
  });
  mainWindow2.on("show", () => {
    mainWindow2.webContents.send(IPC_CHANNEL.SYSTEM.SHOW_WINDOW);
  });
  mainWindow2.on("hide", () => {
    mainWindow2.webContents.send(IPC_CHANNEL.SYSTEM.HIDE_WINDOW);
  });
}
const topMenu = [
  {
    label: "文件",
    submenu: [
      { label: "新建文件", accelerator: "CmdOrCtrl+N", click: () => console.log("新建文件") },
      { label: "打开...", accelerator: "CmdOrCtrl+O" },
      { type: "separator" },
      { label: "退出", role: "quit" }
    ]
  },
  {
    label: "编辑",
    submenu: [
      { role: "undo" },
      { role: "redo" },
      { type: "separator" },
      { role: "cut" },
      { role: "copy" },
      { role: "paste" }
    ]
  }
];
function createTopMenu() {
  const menu = __WEBPACK_EXTERNAL_MODULE_electron__.Menu.buildFromTemplate(topMenu);
  __WEBPACK_EXTERNAL_MODULE_electron__.Menu.setApplicationMenu(menu);
}
let mainWindow = null;
let willQuitApp = false;
async function createWindow() {
  const isMac = utils.platform.isMacOS;
  const isLinux = utils.platform.isLinux;
  function getMainWindowOptions() {
    const options = {
      frame: false,
      titleBarStyle: "hidden",
      titleBarOverlay: {
        height: 35,
        // 按钮区域透明
        color: "rgba(0,0,0,0)",
        // 按钮颜色
        symbolColor: "white"
      }
    };
    if (isMac) {
      Object.assign(options, {
        vibrancy: "sidebar",
        visualEffectState: "active"
      });
    }
    return options;
  }
  mainWindow = new __WEBPACK_EXTERNAL_MODULE_electron__.BrowserWindow({
    width: 900,
    height: 670,
    minWidth: 900,
    minHeight: 670,
    show: false,
    autoHideMenuBar: true,
    ...getMainWindowOptions(),
    ...isLinux ? { icon } : {},
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.js"),
      sandbox: false
    }
  });
  createTopMenu();
  mainWindow.webContents.setWindowOpenHandler((details) => {
    __WEBPACK_EXTERNAL_MODULE_electron__.shell.openExternal(details.url);
    return { action: "deny" };
  });
  if (utils.is.dev && process.env["ELECTRON_RENDERER_URL"]) {
    mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
  } else {
    mainWindow.loadFile(path.join(__dirname, "../renderer/index.html"));
  }
  if (utils.is.dev) {
    await __webpack_exports__devtron.install();
    mainWindow.webContents.openDevTools();
  }
  await registerIpc(mainWindow);
  mainWindow.on("close", (event) => {
    if (utils.platform.isMacOS && !willQuitApp) {
      event.preventDefault();
      mainWindow?.hide();
    }
  });
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}
__WEBPACK_EXTERNAL_MODULE_electron__.app.whenReady().then(async () => {
  utils.electronApp.setAppUserModelId("com.electron");
  if (!mainWindow) {
    await createWindow();
  }
});
__WEBPACK_EXTERNAL_MODULE_electron__.app.on("before-quit", () => {
  willQuitApp = true;
});
__WEBPACK_EXTERNAL_MODULE_electron__.app.on("window-all-closed", () => {
  if (!utils.platform.isMacOS) {
    __WEBPACK_EXTERNAL_MODULE_electron__.app.quit();
  }
});
__WEBPACK_EXTERNAL_MODULE_electron__.app.on("browser-window-created", (_, window) => {
  utils.optimizer.watchWindowShortcuts(window);
});
__WEBPACK_EXTERNAL_MODULE_electron__.app.on("activate", async function() {
  if (mainWindow) {
    mainWindow.show();
    return;
  }
  await createWindow();
});
