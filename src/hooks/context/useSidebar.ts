import { useContext } from "react"
import { SidebarContext } from "@/context/sidebar"

export const useSidebar = () => {

  const context = useContext(SidebarContext)

  if(context === undefined) throw new Error("Context is not used inside the parent components")

  return context 
}
