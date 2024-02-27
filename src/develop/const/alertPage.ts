const DEFAULT_PROPS_DOM =[
{label:"message= ", children: "required"},
{label:"type= ", children: "required"},
{label:"sideY= ", children:"'up'"},
{label:"sideX= ", children:"'right'"},
{label:"duration= ", children:"2000"},
]

const ALL_PROPS_DOM =[
{label:"message: ", children: "string"},
{label:"type: ", children: "'success' | 'error' | 'warning' | 'info'"},
{label:"sideY?: ", children:" 'up' | 'down'"},
{label:"sideX?: ", children:" 'left' | 'right'"},
{label:"duration?: ", children:"number"},
]

export default{DEFAULT_PROPS_DOM, ALL_PROPS_DOM}