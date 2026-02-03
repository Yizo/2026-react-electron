import TestProvider from "./test-provider";
import { Header } from "@renderer/components";
import { IPC_CHANNEL } from "@constants";

export default function Home() {
	const { message } = App.useApp();
	const { TextArea } = Input;

	const [filePath, setFilePath] = useState("");
	const [fileContent, setFileContent] = useState("");
	const [platform, setPlatform] = useState<string>("");

	useEffect(() => {
		setPlatform(window.electron.process.platform);
	}, []);

	function handleReadFile(): void {
		if (!filePath) {
			message.error("请选择文件");
			return;
		}
		window.api[IPC_CHANNEL.FILE_READ](filePath).then((res) => {
			setFileContent(res);
		});
	}

	function handleSelectFile(): void {
		window.api[IPC_CHANNEL.FILE_SELECT]().then((res) => {
			setFilePath(res);
		});
	}

	return (
		<div className="flex flex-col bg-slate-50 text-slate-900">
			<Header />
			<main className="flex-1">
				<div
					className="flex flex-col items-center justify-center h-full w-full gap-4 px-4 py-8"
					style={{ width: "90vw" }}
				>
					<div className="text-2xl font-bold gap-2 w-full">
						<Input type="text" disabled placeholder="请输入文件路径" value={filePath} />
						<div className="py-4">
							<TextArea rows={4} placeholder="请输入文件内容" value={fileContent} />
						</div>

						<div className="flex gap-2">
							<Button type="primary" onClick={handleSelectFile}>
								选择文件
							</Button>
							<Button type="primary" onClick={handleReadFile}>
								读取文件
							</Button>
						</div>
					</div>
					<TestProvider />
					<div className="text-2xl font-bold gap-2 mt-4">
						<p>平台: {platform}</p>
					</div>
				</div>
			</main>
		</div>
	);
}
