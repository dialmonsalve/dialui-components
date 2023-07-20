import { FullCard } from "../Card/FullCard"


export const Buttons = () => {

  return (
    <div className="content-buttons">
      <FullCard
        isButtonAnimated={false}
        colorBackground="green"
        sizeButton="small"
        hasButtonBackground={false}
      />
      <FullCard
        isButtonAnimated={true}
        colorBackground="blue"
        sizeButton="medium"
      />
      <FullCard 
        sizeButton="large"
      />
    </div>
  )
}
