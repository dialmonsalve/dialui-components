const DEFAULT_PROPS_DOM = [
	{label: "iconSpinner= ", children: "'eclipse';"},
	{label: "size= ", children: "'sm';"},
]

const PROPS_DOM = [
	{label: "iconSpinner?: ", children: "SpinnerType;"},
	{label: "size?: ", children: "SpinnerSize;"},
	
]
const SPINNER_TYPE_DOM =[
	{label: "iconSpinner?: ", children: ""},
	{label: "", children: "|'fleas' | 'squares' | 'eclipse' | 'mice' | 'dots';"},
	
]

const SPINNER_SIZE_DOM = [
	{label: "iconSize?: ", children: ""},
	{label: "", children: "|'sm'| 'md'| 'lg'| 'vw';"},
]

export default{DEFAULT_PROPS_DOM, PROPS_DOM, SPINNER_TYPE_DOM, SPINNER_SIZE_DOM}