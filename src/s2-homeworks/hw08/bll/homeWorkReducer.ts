import { UserType } from "../HW8";

type ActionType =
	| { type: "sort"; payload: "up" | "down" }
	| { type: "check"; payload: number };

export const homeWorkReducer = (
	state: UserType[],
	action: ActionType
): UserType[] => {
	// need to fix any
	switch (action.type) {
		case "sort": {
			// by name

			const newState = [...state];
			switch (action.payload) {
				case "up": {
					return newState.sort((a, b) =>
						a.name.toLowerCase().localeCompare(b.name.toLowerCase())
					); // need to fix
				}
				case "down": {
					return newState.sort((a, b) =>
						b.name.toLowerCase().localeCompare(a.name.toLowerCase())
					); // need to fix
				}
				default:
					return state;
			}
		}
		case "check": {
			// const newState = [...state];

			return state.filter((u) => u.age >= 18); // need to fix
		}
		default:
			return state;
	}
};
