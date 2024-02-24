import Table, {
	TableHead,
	TableBody,
	Cell,
	Row,
	Title,
} from '../../components/UI/Table';
import Button from '../../components/UI/buttons/ButtonNormal';

export default function TablePage() {
	const backgroundColor = 'orange';
	return (
		<>
			<div
				style={{
					// width: '400px',
					overflow: 'auto',
					height: '80vh',
					margin: '5rem auto',
					maxWidth: '100vw',
				}}
			>
				<Table>
					<TableHead>
						<Row backgroundColor={backgroundColor}>
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
							<Row backgroundColor={backgroundColor} key={person.id}>
								<Cell>{person.id}</Cell>
								<Cell>{person.name}</Cell>
								<Cell>{person.lastName}</Cell>
								<Cell>{person.country}</Cell>
								<Cell>{person.city}</Cell>
								<Cell>
									<Button
										backgroundColor='blue-600'
										size='sm-100'
										borderRadius='r-3'
										
										>
										edit
									</Button>
								</Cell>
								<Cell>
									<Button
										backgroundColor='red-600'
										size='sm-100'
										borderRadius='r-3'
										
									>
										delete
									</Button>
								</Cell>
							</Row>
						))}
					</TableBody>
				</Table>
			</div>
		</>
	);
}

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
	{
		id: 4,
		name: 'Liam',
		lastName: 'Anderson',
		country: 'Reino Unido',
		city: 'Londres',
	},
	{
		id: 5,
		name: 'Isabella',
		lastName: 'Martínez',
		country: 'Argentina',
		city: 'Buenos Aires',
	},
	{
		id: 6,
		name: 'Matteo',
		lastName: 'Díaz',
		country: 'Chile',
		city: 'Santiago',
	},
	{
		id: 7,
		name: 'Emma',
		lastName: 'García',
		country: 'Francia',
		city: 'París',
	},
	{
		id: 8,
		name: 'Ava',
		lastName: 'Flores',
		country: 'Italia',
		city: 'Roma',
	},
	{
		id: 9,
		name: 'John',
		lastName: 'Doe',
		country: 'Estados Unidos',
		city: 'Colorado',
	},
	{
		id: 10,
		name: 'Noah',
		lastName: 'Hernández',
		country: 'Brasil',
		city: 'São Paulo',
	},
	{
		id: 11,
		name: 'Mia',
		lastName: 'López',
		country: 'Alemania',
		city: 'Berlín',
	},
	{
		id: 12,
		name: 'Alexander',
		lastName: 'Rodríguez',
		country: 'China',
		city: 'Pekín',
	},
	{
		id: 13,
		name: 'Elijah',
		lastName: 'Suárez',
		country: 'Japón',
		city: 'Tokio',
	},
	{
		id: 14,
		name: 'Olivia',
		lastName: 'Sánchez',
		country: 'India',
		city: 'Nueva Delhi',
	},
	{
		id: 15,
		name: 'Muhammad',
		lastName: 'Castro',
		country: 'Rusia',
		city: 'Moscú',
	},
	{
		id: 16,
		name: 'Jane',
		lastName: 'Doe',
		country: 'Canadá',
		city: 'Ontario',
	},
	{
		id: 17,
		name: 'Aaliyah',
		lastName: 'Gómez',
		country: 'Australia',
		city: 'Sídney',
	},
	{
		id: 18,
		name: 'Benjamin',
		lastName: 'Torres',
		country: 'Corea del Sur',
		city: 'Seúl',
	},
	{
		id: 19,
		name: 'Abigail',
		lastName: 'Blanco',
		country: 'Sudáfrica',
		city: 'Pretoria',
	},
	{
		id: 20,
		name: 'Diego',
		lastName: 'Monsalve',
		country: 'Australia',
		city: 'Sidney',
	},
];
