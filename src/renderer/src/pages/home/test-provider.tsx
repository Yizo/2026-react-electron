import { ProviderContext, Provider } from "@renderer/hooks/useProvider";

function Child() {
	const context = useContext(ProviderContext);
	if (!context) {
		throw new Error("ProviderContext is not found");
	}
	const { state, increment, decrement, reset } = context;
	return (
		<div>
			<p>state: {state.state}</p>
			<div className="flex gap-2">
				<Button onClick={increment}>increment</Button>
				<Button onClick={decrement}>decrement</Button>
				<Button onClick={reset}>reset</Button>
			</div>
		</div>
	);
}

export default function TestProvider() {
	return (
		<Provider>
			<h2>TestProvider</h2>
			<Child />
		</Provider>
	);
}
