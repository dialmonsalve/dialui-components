import { type ChangeEvent, useState } from 'react';

import { TextArea } from '@/components/form';

function HomePage() {
	const [value, setValue] = useState('');

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.target.value);
	};

	return (
		<>
			<div>Home</div>
			<TextArea
				onChange={handleChange}
				characterState={value}
				name='value'
				totalCharacter={15}
			/>
		</>
	);
}

export default HomePage;
