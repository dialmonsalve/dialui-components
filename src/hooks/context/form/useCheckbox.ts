import { useContext } from "react"
import { CheckboxContext } from "@/context/form/checkbox"

export const useCheckbox = () => {

  const context = useContext(CheckboxContext)

  if(context === undefined) throw new Error("Context is not used inside the parent components")

  return context 
}

