export interface State {
	state: number;
}

export type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

export interface ProviderContextType {
	state: State;
	increment: () => void;
	decrement: () => void;
	reset: () => void;
}
