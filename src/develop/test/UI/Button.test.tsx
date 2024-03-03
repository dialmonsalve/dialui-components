import Button from '../../../components/button/ButtonNormal';
import { render } from '@testing-library/react';

describe('Button', () => {
	test('Should render all button Components', () => {
		render(
			<>
				<Button backgroundColor='black-300'>Add</Button>
				<Button backgroundColor='black-300'>Add</Button>
				<Button backgroundColor='black-300'>Add</Button>
				<Button backgroundColor='black-300' isLoading>
					Add
				</Button>
				<Button backgroundColor='black-300'>Add</Button>
				<Button backgroundColor='black-300' hasInitialAnimation>
					Add
				</Button>
				<Button backgroundColor='black-300' isLoading>
					Add
				</Button>
			</>,
		);
	});
});
