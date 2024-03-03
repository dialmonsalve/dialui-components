interface Props {
	className: string;
}
export const Success = ({ className }: Props) => {
	return (
		<svg
			className={className}
			width='100'
			height='100'
			viewBox='0 0 100 100'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<title>Success Icon</title>
			<circle cx='50' cy='50' r='50' fill='#7CF21F' fillOpacity='0.7' />
			<g filter='url(#filter0_d_110_10)'>
				<path
					d='M85.8268 33.1802L89.1284 34.1213L90.0695 37.4229L46.1653 81.327L43.8076 78.8427L41.9227 77.0844L85.8268 33.1802Z'
					fill='white'
				/>
				<path
					d='M19.2516 54.4942L19.1213 50.1213L23.4942 50.2516L49.5269 76.2843L47.0683 78.6677L45.2843 80.5269L19.2516 54.4942Z'
					fill='white'
				/>
			</g>
			<defs>
				<filter
					id='filter0_d_110_10'
					x='19.1213'
					y='33.1802'
					width='78.9482'
					height='56.1468'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dx='4' dy='4' />
					<feGaussianBlur stdDeviation='2' />
					<feComposite in2='hardAlpha' operator='out' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_110_10'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_110_10'
						result='shape'
					/>
				</filter>
			</defs>
		</svg>
	);
};
