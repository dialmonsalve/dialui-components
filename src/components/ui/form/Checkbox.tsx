import type { DetailedHTMLProps, HTMLAttributes, ChangeEvent } from "react"

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  name: string,
  handleCheck: (e: ChangeEvent<HTMLInputElement>) => void
  label?: string
  isChecked: Record<string, boolean> | boolean
}

const Checkbox = ({
  name,
  isChecked,
  label,
  handleCheck,
  ...props }: Props) => {


  const checked =
    typeof isChecked === "boolean"
      ? isChecked
      : isChecked[name];

  console.log({ checked });
  return (

    <div className="checkbox" >
      <label htmlFor={name}  >{label}</label>
      <div
        {...props}
        className={`checkbox__checked ${checked ? "checkbox__active" : ""}`}
        id=""
      ><label >
          {/* {checked ? "ES" : "EN"} */}
          <input
            className={`checkbox__pulse`}
            onChange={handleCheck} type="checkbox" name={name} checked={checked} id={name}
          />

        </label>
      </div>

    </div>
  )
}

export default Checkbox;

// style={{ opacity: 1, display: "flex", justifyContent: "flex-start", alignItems: `${checked ? "flex-start" : "flex-end"}`, flexDirection: "column", padding: "7px", fontSize:"12px", fontWeight:900 }} htmlFor={name}
