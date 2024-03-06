const DEFAULT_PROPS_DOM =[
{label:"tags= ", children: "required;"},
{label:"setTags= ", children: "required;"},
{label:"placeholder= ", children: "undefined;"},
{label:"onBlur= ", children: "undefined;"},
]

const ALL_PROPS_DOM =[
{label:"tags: ", children: "string[];"},
{label:"setTags: ", children: "(value: string[]) => void;"},
{label:"placeholder?: ", children:"string;"},
{label:"onBlur?: ", children:"(event: FocusEvent<HTMLInputElement>) => void;"},
]

export default{DEFAULT_PROPS_DOM, ALL_PROPS_DOM}