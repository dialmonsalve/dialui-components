import { Button } from "../components/ui/Button"
import { Card, CardContent, CardHead } from "../components/Card"
import { simpleButtons, animatedButtons } from "../utilities/buttonItems"
import { Modal } from "../components/ui/Modal"
import { useHandlerAnimations } from "../hooks"

export const Modals = () => {

  const { radioButton, openModal, onRadioChange } = useHandlerAnimations();

  return (
    <>
      <Modal />
      <div className="content-modals">
        <Card
          height="37rem"
          hasGradient={false}
          background={'rgba(0, 0, 0, 0.8)'}
          hover={"rgba(0, 0, 0, 0.9)"}
        >

          <CardHead >
            <h3 className="title-card" >Choice a Modal side</h3>
          </CardHead>
          <CardContent display='flex' flexDirection='column'  >
            {
              simpleButtons.map(button => (
                <Button
                  key={button.id}
                  label={button.label}
                  margin="0.7rem 3rem"
                  backgroundColor={button.backgroundColor}
                  hasBackground={button.hasBackground}
                  onClick={() => openModal(button.onShowModal!)}
                />
              ))
            }
          </CardContent>
        </Card>
        <Card
          height="37rem"
          hasGradient={false}
          background={'rgba(0, 0, 0, 0.8)'}
          hover={"rgba(0, 0, 0, 0.9)"}
        >

          <CardHead >
            <h3 className="title-card" >Choice a Modal side</h3>
          </CardHead>
          <CardContent display='flex' flexDirection='column'  >
            {
              animatedButtons.map(button => (
                <Button
                  key={button.id}
                  label={button.label}
                  margin="0.7rem 3rem"
                  backgroundColor={button.backgroundColor}
                  hasBackground={button.hasBackground}
                  onClick={() => openModal(button.onShowModal!)}
                />
              ))
            }
          </CardContent>
        </Card>

        <Card
          height="27rem"
          initialBg="#131212"
          middleBg='#414b34'
          finalBg='#000000'
          degrees={120}
        >
          <CardHead >
            <h3 className="title-card" >Choice a Modal type</h3>
          </CardHead>
          <div className="container-radio" >
            <div className="control" >
              <input type="radio"
                name="type"
                value="success"
                onChange={onRadioChange}
                id="success"
                checked={radioButton === 'success'}
              />
              <label htmlFor="success">success</label>
            </div>

            <div className="control" >
              <input 
              type="radio" 
              name="type" 
              value="warning" 
              onChange={onRadioChange}
              id="warning"
              />
              <label htmlFor="warning">warning</label>
            </div>

            <div className="control" >
              <input 
              type="radio" 
              name="type" 
              value="info" 
              onChange={onRadioChange}
              id="info"
              />              
              <label 
              htmlFor="info">info</label>
            </div>

            <div className="control" >
              <input 
              type="radio" 
              name="type" 
              value="danger"
              onChange={onRadioChange}
              id="danger"
              />
              <label htmlFor="danger">danger</label>
            </div>
          </div>

        </Card>
      </div>
    </>
  )
}
