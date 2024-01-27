import { useCheckbox } from "@/hooks/context/form"
import type { DetailedHTMLProps, HTMLAttributes } from "react"

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export const Checkbox = ({ ...props }: Props) => {

  const {isActiveCheckbox, toggleCheckbox } = useCheckbox()

  const isActive = isActiveCheckbox ? "checkbox__active" : ""

  return (
    <div
      {...props}
      className={`checkbox ${isActive}`} 
      onClick={toggleCheckbox} >
      </div>
  )
}
