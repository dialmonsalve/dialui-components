import type { SpinnerType } from "@/types";

interface Props {
	type?: SpinnerType;
}
const IconSpinner = ({ type = "mouses" }: Props) => {
	if (type === "mouses")
		return (
			<div className="icon-spinner">
				<div className="icon-spinner__mouses">
					<div className="icon-spinner__mouses--1"></div>
					<div className="icon-spinner__mouses--2"></div>
				</div>
			</div>
		);

	if (type === "fleas")
		return (
			<div className="icon-spinner">
				<div className="icon-spinner__fleas">
					<div className="icon-spinner__fleas--1"></div>
					<div className="icon-spinner__fleas--2"></div>
					<div className="icon-spinner__fleas--3"></div>
					<div className="icon-spinner__fleas--4"></div>
					<div className="icon-spinner__fleas--5"></div>
					<div className="icon-spinner__fleas--6"></div>
				</div>
			</div>
		);

	if (type === "circles") {
		return (
			<div className="icon-spinner">
				<div className="icon-spinner__circles">
					<div className="icon-spinner__circles--1"></div>
					<div className="icon-spinner__circles--2"></div>
					<div className="icon-spinner__circles--3"></div>
				</div>
			</div>
		);
	}
	if (type === "eclipse")
		return (
			<div className="icon-spinner">
				<div className="icon-spinner__eclipse">
					<div className="icon-spinner__eclipse--1"></div>
				</div>
			</div>
		);

	if (type === "squares")
		return (
			<div className="icon-spinner">
				<div className="icon-spinner__squares">
					<div className="icon-spinner__squares--1"></div>
					<div className="icon-spinner__squares--2"></div>
				</div>
			</div>
		);
};

export default IconSpinner;
