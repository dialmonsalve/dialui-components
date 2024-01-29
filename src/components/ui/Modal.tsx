import type { Animation, ModalMessageType } from "@/types";
import { Button } from "./";
import { Info, Danger, Success, Warning } from "../icons";
import { useModal } from "@/hooks/context";

interface Props {
	description?: string;
	animation?: Animation;
	title?: string;
	type: ModalMessageType;
}

const Modal = ({
	description,
	type,
	title = type,
	animation = "fade-in-out",
	...props
}: Props) => {
	const { setBtnYesNo, setBtnOk, setCloseModal, isOpenModal } = useModal();

	const handleContentClick = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		e.stopPropagation(); // Stop event propagation
	};

	const handleBtnYesNo = (res: "yes" | "no") => {
		setBtnYesNo(res);
		setCloseModal();
	};

	const handleBtnOk = () => {
		setBtnOk();
		setCloseModal();
	};

	const openModal = isOpenModal
		? `modal-show-${animation}`
		: `modal-hide-${animation}`;

	return (
		<div
			{...props}
			onClick={() => setCloseModal()}
			className={`modal ${openModal}`}
		>
			<div
				onClick={handleContentClick}
				className={`modal__container modal__${type}`}
			>
				<button className="modal__close" onClick={() => setCloseModal()}>
					X
				</button>
				<div className="modal__content">
					<div className="modal__content--cont-img">
						{type === "info" && <Info className="modal__content--img" />}
						{type === "danger" && <Danger className="modal__content--img" />}
						{type === "success" && <Success className="modal__content--img" />}
						{type === "warning" && <Warning className="modal__content--img" />}
					</div>

					<h4 className={`modal__content--title modal__${type}--title`}>
						{title}
					</h4>

					<p className="modal__content--description">{description}</p>
					<div className="modal__buttons">
						{type === "success" || type == "info" ? (
							<>
								<Button
									buttonStyle="ripple"
									backgroundColor="outline-green"
									radius="radius-2"
									size="w-50"
									color="white"
									onClick={handleBtnOk}
								>
									OK
								</Button>
							</>
						) : (
							<>
								<Button
									buttonStyle="ripple"
									backgroundColor="outline-red"
									radius="radius-2"
									size="w-100"
									color="white"
									onClick={() => handleBtnYesNo("yes")}
								>
									YES
								</Button>
								<Button
									buttonStyle="ripple"
									backgroundColor="outline-green"
									radius="radius-2"
									size="w-100"
									color="white"
									onClick={() => handleBtnYesNo("no")}
								>
									NOT
								</Button>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Modal;
