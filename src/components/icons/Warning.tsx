interface Props {
	className: string;
}
export const Warning = ({ className }: Props) => {
	return (
		<svg
			className={className}
			width="100"
			height="100"
			viewBox="0 0 50 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
      <title>Warning icon</title>
			<circle cx="25" cy="25" r="25" fill="#AAAD00" fillOpacity="1" />
			<path
				d="M25.2501 8.99963C28.5001 8.99963 44.5001 31.7496 41.7501 35.2496C39.0001 38.7496 11.2742 39.2496 9.01213 35.2496C6.75007 31.2496 22.0001 8.99963 25.2501 8.99963Z"
				fill="#FFFEFE"
			/>
			<g filter="url(#filter0_d_110_28)">
				<rect x="23.0001" y="14.9996" width="5" height="14" fill="#767735" />
				<circle cx="25.5001" cy="32.9996" r="2.5" fill="#767735" />
			</g>
			<defs>
				<filter
					id="filter0_d_110_28"
					x="22.0001"
					y="14.9996"
					width="13"
					height="28.5"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dx="3" dy="4" />
					<feGaussianBlur stdDeviation="2" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_110_28"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_110_28"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	);
};
