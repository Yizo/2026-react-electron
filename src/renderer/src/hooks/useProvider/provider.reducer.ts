import { produce } from "immer";
import type { State, Action } from "./provider.type";

export const initialState: State = {
	state: 0,
};

export function providerReducer(state: State, action: Action): State {
	switch (action.type) {
		case "increment":
			return produce(state, (draft) => {
				draft.state += 1;
			});

		case "decrement":
			return produce(state, (draft) => {
				draft.state -= 1;
			});

		case "reset":
			return initialState;

		default:
			return state;
	}
}
