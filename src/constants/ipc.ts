export const IPC_CHANNEL = {
  // 文件相关
  FILE_READ: 'file:read',
  FILE_SELECT: 'file:select',

  SYSTEM: {
    // 平台
    PLATFORM: 'system:platform',
    // 设置标题
    SET_TITLE: 'system:set-title',
    // 获取标题
    GET_TITLE: 'system:get-title',
    // 设置图标
    SET_ICON: 'system:set-icon',
    // 获取图标
    GET_ICON: 'system:get-icon',
    // 设置主题
    SET_THEME: 'system:set-theme',
    // 获取主题
    GET_THEME: 'system:get-theme',
    // 设置语言
    SET_LANGUAGE: 'system:set-language',
    // 获取语言
    GET_LANGUAGE: 'system:get-language',
    // 发起通知
    NOTIFY: 'system:notify',
  },
} as const
