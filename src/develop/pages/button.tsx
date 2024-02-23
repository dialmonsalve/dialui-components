import ButtonSlideDown from '../../components/UI/buttons/ButtonSlideDown';
import FleaIconsSpinner from '../../components/UI/iconSpinner/IconsSpinnerFleas';


function ButtonSlideDownPage() {
	const click = (number: number) => {
		console.log(number);
	};

	return (
		<section style={{ padding: '2rem 4rem', minWidth: '90vh' }}>
			<ButtonSlideDown
				size='sm-100'
				borderRadius='r-3'
				onClick={() => click(5)}
				>
				hola
			</ButtonSlideDown>
			<br />
			<ButtonSlideDown
				size='sm-200'
				borderRadius='r-3'
				onClick={() => click(5)}
				>
				hola
			</ButtonSlideDown>
			<br />
			<ButtonSlideDown
				size='sm-300'
				borderRadius='r-3'
				onClick={() => click(5)}
				>
				hola
			</ButtonSlideDown>
			<br />
			<ButtonSlideDown
				isLoading
				hasSpinner
				iconSpinner='fleas'
				size='md-100'
				borderRadius='r-3'
				onClick={() => click(5)}
				hasInitialAnimation
				>
				hola
			</ButtonSlideDown>
			<br />
			<ButtonSlideDown
				size='md-200'
				borderRadius='r-3'
				onClick={() => click(5)}
				>
				hola
			</ButtonSlideDown>
			<br />
			<ButtonSlideDown
				size='md-300'
				borderRadius='r-3'
				onClick={() => click(5)}
			iconSpinner='eclipse'
			isLoading
			hasSpinner
			>
				hola
			</ButtonSlideDown>
			<br />
			<ButtonSlideDown
				size='lg-100'
				borderRadius='r-3'
				onClick={() => click(5)}
			>
				hola
			</ButtonSlideDown>
			<br />
			<ButtonSlideDown
				size='lg-200'
				borderRadius='r-3'
				onClick={() => click(5)}
				>
				hola
			</ButtonSlideDown>
			<br />
			<ButtonSlideDown
				size='lg-300'
				borderRadius='r-3'
				onClick={() => click(5)}
				>
				hola
			</ButtonSlideDown>
			<br />
			<br />
			<ButtonSlideDown
				size='vw-25'
				borderRadius='r-3'
				onClick={() => click(5)}
			>
				hola
			</ButtonSlideDown>
			<br />
			<ButtonSlideDown
				size='vw-50'
				borderRadius='r-3'
				onClick={() => click(5)}
			>
				hola
			</ButtonSlideDown>
			<br />
			<ButtonSlideDown
				isLoading
				hasSpinner
				iconSpinner='dots'
				size='vw-75'
				borderRadius='r-3'
				onClick={() => click(5)}
			>
				hola
			</ButtonSlideDown>
			<br />
			<div>
				<ButtonSlideDown
					size='vw-100'
					borderRadius='r-3'
					onClick={() => click(5)}
				>
					Enviar
				</ButtonSlideDown>
			</div>
			<br />
	
			<div>
			</div>

				<FleaIconsSpinner size='sm' />
				<br />
				<br />
				<br />
				<FleaIconsSpinner size='md' />
				<br />				
				<br />				
				<br />				
				<FleaIconsSpinner size='lg' />
				<br />
				<br />
				<br />
				<FleaIconsSpinner size='vw' />


			{/*
			<br />
			<ButtonSlideDown
				buttonStyle="slide-down"
				backgroundColor="green-400"
				size="sm-200"
				radius="radius-3"
				spinnerType="squares"
				// isLoading
				// hasSpinner
			>
				Enviar
			</ButtonSlideDown>
			<br />
			<ButtonSlideDown
				spinnerType="squares"
				backgroundColor="outline-blue"
				size="sm-300"
				radius="radius-3"
				buttonStyle="beat"
			>
				Enviar
			</ButtonSlideDown>transition
			<br />
			<ButtonSlideDown
				buttonStyle="filled"
				backgroundColor="red-200"
				size="md-100"
				radius="radius-1"
				spinnerType="eclipse"
				isLoading
			>
				Enviar
			</ButtonSlideDown>
			<br />
			<ButtonSlideDown
				buttonStyle="filled"
				backgroundColor="red-400"
				size="md-200"
				radius="radius-3"
				spinnerType="squares"
			>
				Enviar
			</ButtonSlideDown>
			<br />
			<ButtonSlideDown
				buttonStyle="filled"
				spinnerType="mice"
				backgroundColor="red-600"
				size="md-300"
				radius="radius-5"
			>
				Enviar
			</ButtonSlideDown>
			<br />
			<ButtonSlideDown
				buttonStyle="filled"
				spinnerType="squares"
				backgroundColor="purple-200"
				size="lg-100"
				radius="radius-3"
			>
				Enviar
			</ButtonSlideDown>
			<br />
			<ButtonSlideDown
				buttonStyle="ripple"
				spinnerType="squares"
				backgroundColor="purple-400"
				size="lg-200"
				radius="radius-3"
			>
				Enviar
			</ButtonSlideDown>
			<br />
			<ButtonSlideDown
				buttonStyle="squares"
				spinnerType="mice"
				backgroundColor="purple-400"
				size="lg-300"
				radius="radius-3"
			>
				Enviar
			</ButtonSlideDown>
			<br />
			<ButtonSlideDown
				buttonStyle="squares"
				spinnerType="squares"
				backgroundColor="black-200"
				size="w-25"
				radius="radius-3"
			>
				Enviar
			</ButtonSlideDown>
			<br />
			<ButtonSlideDown
				buttonStyle="ripple"
				backgroundColor="black-300"
				size="w-50"
				radius="radius-3"
				spinnerType="squares"
			>
				Enviar
			</ButtonSlideDown>
			<br />
			<ButtonSlideDown
				buttonStyle="ripple"
				backgroundColor="pink-400"
				size="w-75"
				isLoading
				radius="radius-3"
				spinnerType="squares"
			>
				Enviar
			</ButtonSlideDown>
			<br />

			<div >

			<ButtonSlideDown
				buttonStyle="slide-down"
				backgroundColor="red-400"
				size="w-100"
				radius="radius-3"
				spinnerType="squares"
			>
				Enviar
			</ButtonSlideDown>
			</div> */}
		</section>
	);
}

export default ButtonSlideDownPage;
