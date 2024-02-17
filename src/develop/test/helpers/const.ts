export const ERROR_CHECK_MESSAGE = `The initialCheckbox argument must be of object type, if you want to use this Component with a simple string, number, boolean or other, you must directly use the useState react hook. Example
				
const [isChecked, setIsChecked] = useState(false or true)

<Checkbox 
	isChecked={isChecked}
	handleCheck={()=>setIsChecked(!isChecked)}
	name='check'
/>
`;


export const ERROR_INPUT_MESSAGE = `The initial argument must be of object type, if you want to use this Component with a simple string, number, boolean or other, you must directly use the useState react hook. Example
				
const [value, setValue] = useState(string, boolean, e.g.)

<Input
	name="value"
	value={value}
	onChange={()=>setValue(e.target.value)}
	type='text'
/>
	`;