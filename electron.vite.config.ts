import { resolve } from 'path'
import { defineConfig, loadEnv } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import AntdResolver from 'unplugin-antd-resolver'

export default defineConfig(({ command, mode }) => {
  console.log('command', command)
  console.log('mode', mode)

  const env = loadEnv(mode)
  console.log('env', env)

  return {
    main: {
      resolve: {
        alias: {
          '@constants': resolve('src/constants'),
        },
      },
    },
    preload: {
      resolve: {
        alias: {
          '@constants': resolve('src/constants'),
        },
      },
    },
    renderer: {
      resolve: {
        alias: {
          '@constants': resolve('src/constants'),
          '@': resolve('src/renderer/src'),
        },
      },
      plugins: [
        react(),
        tailwindcss(),
        AutoImport({
          imports: ['react', 'react-dom', 'react-router'],
          dts: 'src/types/react-imports.d.ts',
          eslintrc: {
            enabled: true,
          },
        }),
        AutoImport({
          resolvers: [AntdResolver()],
          dts: 'src/types/antd-imports.d.ts',
          eslintrc: {
            enabled: true,
          },
        }),
      ],
    },
  }
})
