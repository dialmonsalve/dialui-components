import useAppOptions from '../hooks/context/useAppOptions';
import Table, {
	TableHead,
	TableBody,
	Cell,
	Row,
	Title,
} from '../../components/UI/Table';
import { ListItems } from '../components/ListItems';
import Button from '../../components/UI/buttons/ButtonNormal';
import Highlighter from '../components/Highlighter';

import language from '../lang/table.json';
import tablePage from '../const/tablePage';

export default function TablePage() {
	const { lang } = useAppOptions();

	const backgroundColor = 'orange';
	return (
		<section>
			<h1>{language[lang].h1}</h1>

			<article>
				<p>{language[lang].p1}</p>
				<Table height='40vh'>
					<TableHead>
						<Row backgroundColor={backgroundColor}>
							<Title>index</Title>
							<Title>name</Title>
							<Title>lastName</Title>
							<Title>country</Title>
							<Title>city</Title>
							<Title colSpan={2}>Actions</Title>
						</Row>
					</TableHead>
					<TableBody>
						{tablePage.DATA_TABLE.map((person, index) => (
							<Row backgroundColor={backgroundColor} key={person.id}>
								<Cell>{index + 1}</Cell>
								<Cell>{person.name}</Cell>
								<Cell>{person.lastName}</Cell>
								<Cell>{person.country}</Cell>
								<Cell>{person.city}</Cell>
								<Cell>
									<Button
										backgroundColor='blue-600'
										size='sm-100'
										borderRadius='r-3'
										textTransform='uppercase'
									>
										edit
									</Button>
								</Cell>
								<Cell>
									<Button
										backgroundColor='red-600'
										size='sm-100'
										borderRadius='r-3'
										textTransform='uppercase'
									>
										delete
									</Button>
								</Cell>
							</Row>
						))}
					</TableBody>
				</Table>
			</article>
			<article>
				<Highlighter>
					{`import { Table, TableHead, TableBody, Cell, Row, Title } from "dialui-components";

const data = [
  {
    id: 1,
    name: "John",
    lastName: "Doe",
    country: "United State",
    city: "Miami",
  },
  {
    id: 2,
    name: "Sofía",
    lastName: "Pérez",
    country: "España",
    city: "Madrid",
  },
];
export const MyComponent = () => {
  return (
    <Table height="40vh">
      <TableHead>
        <Row backgroundColor="orange">
          <Title>index</Title>
          <Title>name</Title>
          <Title>lastName</Title>
          <Title>country</Title>
          <Title>city</Title>
        </Row>
      </TableHead>
      <TableBody>
        {data.map((person, index) => (
          <Row backgroundColor="orange" key={person.id}>
            <Cell>{index + 1}</Cell>
            <Cell>{person.name}</Cell>
            <Cell>{person.lastName}</Cell>
            <Cell>{person.country}</Cell>
            <Cell>{person.city}</Cell>
          </Row>
        ))}
      </TableBody>
    </Table>
  );
};`}
				</Highlighter>
				<p>{language[lang].p2}</p>
			</article>

			<article>
				<h4>Row:</h4>
				<h4>Default props</h4>
				<ListItems items={tablePage.DEFAULT_PROPS_DOM} />
			</article>
			<article>
				<h4>Props:</h4>
				<ListItems items={tablePage.ALL_PROPS_DOM} />
			</article>

			<article>
				<h4>BasicColors:</h4>
				<ListItems items={tablePage.COLORS_DOM} />
			</article>
		</section>
	);
}
