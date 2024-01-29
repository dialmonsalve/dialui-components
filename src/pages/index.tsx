import { type ChangeEvent, useState } from "react";

import { TextArea } from "@/components/ui/form";

function HomePage() {
	const [value, setValue] = useState("");

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.target.value);
	};

	return (
		<>
			<div>Home</div>
			<TextArea
				onChange={handleChange}
				characters={value}
				totalCharacter={15}
			/>
		</>
	);
}

export default HomePage;
