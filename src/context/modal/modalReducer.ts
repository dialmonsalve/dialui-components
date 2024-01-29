import { ModalState } from ".";

type ModalActionType =
	| { type: "[Modal] - open modal" }
	| { type: "[Modal] - close modal" }
	| { type: "[Modal] - button ok" }
	| { type: "[Modal] - button Yes-no"; payload: "yes" | "no" };

export const modalReducer = (
	state: ModalState,
	action: ModalActionType,
): ModalState => {
	switch (action.type) {
		case "[Modal] - open modal":
			return {
				...state,
				isOpenModal: true,
			};
		case "[Modal] - close modal":
			return {
				...state,
				isOpenModal: false,
			};

		case "[Modal] - button ok":
			return {
				...state,
				btnOk: "ok",
			};
		case "[Modal] - button Yes-no":
			return {
				...state,
				btnYesNo: action.payload,
			};

		default:
			return state;
	}
};
