import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider, App, theme } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useAppSelector, persistor as persistorStore } from "@/store";
import store from "@/store";
import zhCN from "antd/locale/zh_CN";
import Router from "@/router";
import "@/styles/index.css";

dayjs.locale("zh-cn");

function LoadingScreen() {
	return (
		<div className="flex justify-center items-center h-screen">
			<div>正在加载...</div>
		</div>
	);
}

function AppContent() {
	const systemTheme = useAppSelector((state) => state.system.theme);

	return (
		<ConfigProvider
			locale={zhCN}
			theme={{
				token: {
					colorPrimary: import.meta.env.RENDERER_VITE_THEME,
				},
				algorithm: systemTheme === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
			}}
		>
			<App>
				<Router />
			</App>
		</ConfigProvider>
	);
}

export function MainApp() {
	return (
		<ReduxProvider store={store}>
			<PersistGate loading={<LoadingScreen />} persistor={persistorStore}>
				<AppContent />
			</PersistGate>
		</ReduxProvider>
	);
}

createRoot(document.getElementById("root")!).render(<MainApp />);
