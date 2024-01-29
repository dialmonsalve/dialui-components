import { useReducer, ReactNode } from "react";
import { ModalContext, modalReducer } from ".";

export interface Props {
	children: ReactNode;
}

export interface ModalState {
	isOpenModal: boolean;
	btnOk: "ok" | "";
	btnYesNo: "yes" | "no" | "";
}

const MODAL_INITIAL_STATE: ModalState = {
	isOpenModal: false,
	btnOk: "",
	btnYesNo: "",
};

export const ModalProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(modalReducer, MODAL_INITIAL_STATE);

	const openModal = () => {
		dispatch({ type: "[Modal] - open modal" });
	};

	const closeModal = () => {
		dispatch({ type: "[Modal] - close modal" });
	};

	const setBtnOk = () => {
		dispatch({ type: "[Modal] - button ok" });
	};

	const setBtnYesNo = (res: "yes" | "no") => {
		if (res !== "yes" && res !== "no") {
			throw new Error(`'${res}' is not a valid response`);
		}
		dispatch({ type: "[Modal] - button Yes-no", payload: res });
	};

	const value = {
		...state,
		openModal,
		closeModal,
		setBtnOk,
		setBtnYesNo,
	};

	return (
		<ModalContext.Provider value={value}>{children}</ModalContext.Provider>
	);
};
