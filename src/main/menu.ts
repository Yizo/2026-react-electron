import { Menu } from 'electron'
import type { MenuItemConstructorOptions } from 'electron'

// 顶部按钮
const topMenu: MenuItemConstructorOptions[] = [
  {
    label: '文件',
    submenu: [
      { label: '新建文件', accelerator: 'CmdOrCtrl+N', click: () => console.log('新建文件') },
      { label: '打开...', accelerator: 'CmdOrCtrl+O' },
      { type: 'separator' },
      { label: '退出', role: 'quit' },
    ],
  },
  {
    label: '编辑',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
    ],
  },
]

// 上下文菜单
const contextMenu: MenuItemConstructorOptions[] = [
  {
    label: '刷新',
    role: 'reload',
  },
  {
    label: '复制',
    role: 'copy',
  },
  {
    label: '粘贴',
    role: 'paste',
  },
]

export function createTopMenu() {
  const menu = Menu.buildFromTemplate(topMenu)
  Menu.setApplicationMenu(menu)
}

export function createContextMenu() {}
