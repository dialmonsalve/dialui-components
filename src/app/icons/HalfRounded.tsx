interface Props {
	className: string;
}

export const HalfRounded = ({ className }: Props) => {
	return (
		<svg
			className={className}
			width='36'
			height='36'
			viewBox='0 0 36 36'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<title>Half round icon</title>
			<circle
				cx='17.6198'
				cy='17.7449'
				r='15'
				transform='rotate(32.9387 17.6198 17.7449)'
				stroke='url(#paint0_linear_139_12)'
				strokeWidth='5'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_139_12'
					x1='31.65'
					y1='21.8274'
					x2='18.9513'
					y2='19.331'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#3529C1' />
					<stop offset='1' stopColor='#3529C1' stopOpacity='0' />
				</linearGradient>
			</defs>
		</svg>
	);
};
