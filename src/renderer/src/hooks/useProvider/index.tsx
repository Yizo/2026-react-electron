import type { PropsWithChildren } from "react";
import type { ProviderContextType } from "./provider.type";
import { initialState, providerReducer } from "./provider.reducer";

export const ProviderContext = createContext<ProviderContextType | null>(null);

export function Provider({ children }: PropsWithChildren) {
	const [state, dispatch] = useReducer(providerReducer, initialState, () => initialState);

	const value = {
		state,
		increment: () => dispatch({ type: "increment" }),
		decrement: () => dispatch({ type: "decrement" }),
		reset: () => dispatch({ type: "reset" }),
	};

	return <ProviderContext value={value}>{children}</ProviderContext>;
}
