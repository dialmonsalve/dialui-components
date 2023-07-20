import { useState } from "react";
import { buttons } from "../../utilities/buttonItems";
import { Button } from "../Button";
import { Card } from "../Card/Card";
import { CardContent } from "../Card/CardContent";
import { CardHead } from "../Card/CardHead";
import { CardMedia } from "../Card/CardMedia";

type Color = 'blue' | 'green' | 'red'

type Size = 'small' | 'medium' | 'large'

const initialBgStates: { [id: number]: Color | undefined } = {};
buttons.forEach((button) => {
  initialBgStates[button.id] = button.backgroundColor;
});

const initialSizeStates: { [id: number]: Size | undefined } = {};
buttons.forEach((button) => {
  initialSizeStates[button.id] = button.size;
});

const initialAnimatedStates: { [id: number]: boolean | undefined } = {};
buttons.forEach((button) => {
  initialAnimatedStates[button.id] = button.isAnimated;
});

const initialHasBackgroundStates: { [id: number]: boolean | undefined } = {};
buttons.forEach((button) => {
  initialHasBackgroundStates[button.id] = button.hasBackground;
});


export const Buttons = () => {


  const [isAnimated, setIsAnimated] = useState(initialAnimatedStates);
  const [hasBackground, setHasBackground] = useState(initialHasBackgroundStates);
  const [bgStates, setBgStates] = useState(initialBgStates);
  const [sizeStates, setSizeStates] = useState(initialSizeStates);

  const handleAnimation = (index: number) => {
    setIsAnimated((prevStates) => {
      const newStates = { ...prevStates };
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const handleHasBackground = (index: number) => {
    setHasBackground((prevStates) => {
      const newStates = { ...prevStates };
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const handleBackgroundChange = (index: number, event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as Color;
    setBgStates((prevStates) => {
      const newStates = { ...prevStates };
      newStates[index] = value;
      return newStates;
    });
  };

  const handleSizeChange = (index: number, event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as Size;
    setSizeStates((prevStates) => {
      const newStates = { ...prevStates };
      newStates[index] = value;
      return newStates;
    });
  };

  return (
    <div className="content-buttons">
      {
        buttons.map(button => (
          <Card
            key={button.id}
            initialBg="#131212"
            middleBg='#414b34'
            finalBg='#000000'
            degrees={120}
            height={45}
          >
            <CardHead />
            <h3 className="title-card" >Choice properties</h3>
            <CardMedia>
              <div className="control">
                <input
                  type="checkbox"
                  checked={isAnimated[button.id]}
                  onChange={() => handleAnimation(button.id)}

                />
                <label>Has Animation?</label>
              </div>

              <div className="control">
                <input
                  type="checkbox"
                  checked={hasBackground[button.id]}
                  onChange={() => handleHasBackground(button.id)}

                />
                <label>Has Background?</label>
              </div>

              <div className="control">
                <label style={{alignSelf:'center'}} >Color:</label>
                <select 
                value={bgStates[button.id]}
                  onChange={(event) => handleBackgroundChange(button.id, event)}
                  style={{backgroundColor:bgStates[button.id]}}
                >
                  <option value='red' >Red</option>
                  <option value='blue' >Blue</option>
                  <option value='green' >Green</option>
                </select>
              </div>

              <div className="control">
                <label style={{alignSelf:'center'}} >Size:</label>
                <select 
                value={sizeStates[button.id]}
                  onChange={(event) => handleSizeChange(button.id, event)}
                  style={{backgroundColor:bgStates[button.id]}}
                >
                  <option value='small' >Small</option>
                  <option value='medium' >Medium</option>
                  <option value='large' >Large</option>
                </select>
              </div>

            </CardMedia>
            <CardContent
            >
              <Button
                label={button.label}
                hasBackground={hasBackground[button.id]}
                isAnimated={isAnimated[button.id]}
                backgroundColor={bgStates[button.id]}
                size={sizeStates[button.id]}
              />
            </CardContent>
          </Card>
        ))
      }
    </div>
  )
}
