import { useContext } from "react"
import { HandlerAnimationsContext } from "../context/ui/HandlerAnimationsContext"

export const useHandlerAnimations = () => {

  const context = useContext(HandlerAnimationsContext)

  if(context === undefined) throw new Error("Context is not used inside the parent components")

  return context 
}
