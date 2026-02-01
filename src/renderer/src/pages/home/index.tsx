
import { IPC_CHANNEL } from '@constants'

export default function Home() {
  const { message } = App.useApp()
  const { TextArea } = Input

  const [filePath, setFilePath] = useState('')
  const [fileContent, setFileContent] = useState('')
  const [platform, setPlatform] = useState<string>('')


  useEffect(() => {
    window.api[IPC_CHANNEL.SYSTEM.PLATFORM]().then((res) => {
      setPlatform(res)
    })
  }, [])

  function handleReadFile() {
    if (!filePath) {
      message.error('请选择文件')
      return
    }
    window.api[IPC_CHANNEL.FILE_READ](filePath).then((res) => {
      setFileContent(res)
    })
  }

  function handleSelectFile() {
    window.api[IPC_CHANNEL.FILE_SELECT]().then((res) => {
      setFilePath(res)
    })
  }


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-2xl font-bold gap-2">
        <Input type="text" disabled placeholder="请输入文件路径" value={filePath} />
        <TextArea rows={4} placeholder="请输入文件内容" value={fileContent} />

        <Button type="primary" onClick={handleSelectFile}>
          选择文件
        </Button>
        <Button type="primary" onClick={handleReadFile}>
          读取文件
        </Button>
      </div>
      <div className="text-2xl font-bold gap-2">
        <p>
          平台: {platform}
        </p>
      </div>
    </div>
  )
}