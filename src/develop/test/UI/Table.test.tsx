import { Button } from '../../../';
import Table, {
	Cell,
	Row,
	TableBody,
	TableHead,
	Title,
} from '../../../components/UI/Table';
import { render } from '@testing-library/react';

const data = [
	{
		id: 1,
		name: 'Camila',
		lastName: 'Ramírez',
		country: 'Colombia',
		city: 'Bogotá',
	},
	{
		id: 2,
		name: 'Omar',
		lastName: 'González',
		country: 'México',
		city: 'Ciudad de México',
	},
	{
		id: 3,
		name: 'Sofía',
		lastName: 'Pérez',
		country: 'España',
		city: 'Madrid',
	},
];

describe('Table', () => {
	test('Should render table component', () => {
		render(
			<div
				style={{
					overflow: 'auto',
					height: '80vh',
					margin: '5rem auto',
					maxWidth: '100vw',
				}}
			>
				<Table>
					<TableHead>
						<Row backgroundColor={'white'}>
							<Title>id</Title>
							<Title>name</Title>
							<Title>lastName</Title>
							<Title>country</Title>
							<Title>city</Title>
							<Title colSpan={2}>Actions</Title>
						</Row>
					</TableHead>
					<TableBody>
						{data.map((person) => (
							<Row backgroundColor={'white'} key={person.id}>
								<Cell>{person.id}</Cell>
								<Cell>{person.name}</Cell>
								<Cell>{person.lastName}</Cell>
								<Cell>{person.country}</Cell>
								<Cell>{person.city}</Cell>
								<Cell>
									<Button
										buttonStyle='table'
										backgroundColor='blue-600'
									>
										edit
									</Button>
								</Cell>
								<Cell>
									<Button
										buttonStyle='table'
										backgroundColor='red-600'
									>
										delete
									</Button>
								</Cell>
							</Row>
						))}
					</TableBody>
				</Table>
			</div>,
		);
	});
});
