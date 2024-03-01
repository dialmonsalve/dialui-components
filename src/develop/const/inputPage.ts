const DEFAULT_PROPS_DOM =[
{label:"type= ", children: "required;"},
{label:"name= ", children: "required;"},
{label:"value= ", children: "required;"},
{label:"disabled= ", children: "undefined;"},
{label:"placeholder= ", children: "undefined;"},
{label:"autoComplete= ", children: "'off';"},
{label:"onBlur= ", children: "undefined;"},
{label:"onChange= ", children: "undefined;"},
]

const ALL_PROPS_DOM =[
{label:"type: ", children: "HTMLInputTypeAttribute;"},
{label:"name: ", children: "string;"},
{label:"value: ", children:"string | number"},
{label:"disabled?: ", children:"bolean"},
{label:"placeholder?: ", children:"string;"},
{label:"autoComplete?: ", children:"| 'on' | 'off';"},
{label:"onBlur?: ", children:"(event: FocusEvent<HTMLInputElement>) => void;"},
{label:"onChange: ", children:"(event: ChangeEvent<HTMLInputElement>) => void;"},
]

export default{DEFAULT_PROPS_DOM, ALL_PROPS_DOM}