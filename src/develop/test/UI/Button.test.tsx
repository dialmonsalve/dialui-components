import { Button } from '../../../';
import { render } from '@testing-library/react';

describe('Button', () => {
	test('Should render all button Components', () => {
		render(
			<>
				<Button backgroundColor='black-300'>Add</Button>
				<Button backgroundColor='black-300' buttonStyle='table'>
					Add
				</Button>
				<Button backgroundColor='black-300' buttonStyle='squares'>
					Add
				</Button>
				<Button backgroundColor='black-300' isLoading buttonStyle='ripple'>
					Add
				</Button>
				<Button backgroundColor='black-300' buttonStyle='ripple'>
					Add
				</Button>
				<Button
					backgroundColor='black-300'
					hasInitialAnimation
					buttonStyle='beat'
				>
					Add
				</Button>
				<Button backgroundColor='black-300' isLoading buttonStyle='bright'>
					Add
				</Button>
			</>,
		);
	});
});
