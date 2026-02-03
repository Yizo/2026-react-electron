import { useEffect, useState, useCallback } from "react";
import type { PropsWithChildren } from "react";
import { IPC_CHANNEL } from "@constants";
import styles from "./header.module.scss";

export default function Header({
	children,
	border = true,
}: PropsWithChildren<{ border?: boolean }>) {
	const [windowState, setWindowState] = useState<
		"restored" | "maximized" | "minimized" | "full-screen"
	>("restored");

	const handleWindowStateChange = useCallback((state) => {
		console.log(`[渲染进程] 接收到窗口状态变化: ${state}`);
		setWindowState(state);
	}, []);

	const handleWindowShow = useCallback(() => {
		console.log("窗口已显示");
	}, []);

	const handleWindowHide = useCallback(() => {
		console.log("窗口已隐藏");
	}, []);

	useEffect(() => {
		const removeStateListener =
			window.api[IPC_CHANNEL.SYSTEM.WINDOW_STATE_CHANGE](handleWindowStateChange);
		const removeShowListener = window.api[IPC_CHANNEL.SYSTEM.SHOW_WINDOW](handleWindowShow);
		const removeHideListener = window.api[IPC_CHANNEL.SYSTEM.HIDE_WINDOW](handleWindowHide);

		return () => {
			removeStateListener();
			removeShowListener();
			removeHideListener();
		};
	}, [handleWindowStateChange, handleWindowShow, handleWindowHide]);

	function getStatusLabel() {
		switch (windowState) {
			case "maximized":
				return "窗口已最大化";
			case "minimized":
				return "窗口已最小化";
			case "full-screen":
				return "窗口已全屏";
			default:
				return "自定义标题栏";
		}
	}

	return (
		<div
			className={`${styles.header} ${border ? "border-b border-gray-200" : ""}`}
			style={{ paddingLeft: windowState === "full-screen" ? "10px" : "80px" }}
		>
			{children ? (
				children
			) : (
				<div className="h-full flex items-center gap-2">
					<span className="text-xs text-gray-500">{getStatusLabel()}</span>
				</div>
			)}
		</div>
	);
}
