const DEFAULT_PROPS_DOM =[
{label:"name= ", children: "required"},
{label:"checkboxFormState= ", children: "required"},
{label:"handleCheck= ", children: "required"},
]

const ALL_PROPS_DOM =[
{label:"name: ", children: "string"},
{label:"checkboxFormState: ", children: "Record<string, boolean> | boolean;"},
{label:"handleCheck: ", children:" (event: ChangeEvent<HTMLInputElement>) => void;"},
]

export default{DEFAULT_PROPS_DOM, ALL_PROPS_DOM}