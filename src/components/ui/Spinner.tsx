import { IconSpinner } from "./";

import { HalfRounded } from "../icons/HalfRounded";
import { Needle } from "../icons/Needle";
import { LP } from "../icons/LP";

import { SpinnerType } from "@/types";

interface Props {
	type?: SpinnerType | "half-spinner" | "lp";
}

const Spinner = ({ type }: Props) => {
	if (type === "half-spinner") {
		return (
			<div className="spinner">
				<HalfRounded className="spinner__half-spinner" />

				<p className="spinner__loading"> Loading...</p>
			</div>
		);
	} else if (type === "lp") {
		return (
			<div className="spinner">
				<div className="spinner__lp">
					<div className="spinner__needle">
						<Needle />
					</div>
					<div className="icon-spinner__mouses">
						<LP />
					</div>
					<p>Loading...</p>
				</div>
			</div>
		);
	} else {
		return (
			<div className="spinner">
				<div className="spinner__content">
					<IconSpinner type={type} />
					<p className="spinner__content--loading">Loading ...</p>
				</div>
			</div>
		);
	}
};

export default Spinner;
