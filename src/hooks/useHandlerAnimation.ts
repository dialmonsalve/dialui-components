import { useContext } from "react"
import { HandlerAnimationContext } from "../context/ui/HandlerAnimationsContext"

export const useHandlerAnimations = () => {

  const context = useContext(HandlerAnimationContext)

  if(context === undefined) throw new Error("Context is not used inside the parent components")

  return context 
}
