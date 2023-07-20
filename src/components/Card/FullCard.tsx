import { useState } from "react";
import { Button } from "../Button";
import { Card } from "../Card/Card";
import { CardContent } from "../Card/CardContent";
import { CardHead } from "../Card/CardHead";
import { CardMedia } from "../Card/CardMedia";

interface Props {
  isButtonAnimated?: boolean
  hasButtonBackground?: boolean
  colorBackground?: Color
  sizeButton?: Size
}

type Color = 'blue' | 'green' | 'red';

type Size = 'small' | 'medium' | 'large';

export const FullCard = ({
  colorBackground ='red',
  hasButtonBackground = false,
  isButtonAnimated=false,
  sizeButton = 'medium',
}: Props) => {

  const [isAnimated, setIsAnimated] = useState(isButtonAnimated);
  const [hasBackground, setHasBackground] = useState(hasButtonBackground);
  const [backgroundColor, setBackgroundColor] = useState(colorBackground);
  const [size, setSize] = useState(sizeButton);

  const handleAnimation = () => {
    setIsAnimated(!isAnimated)

  };

  const handleHasBackground = () => {
    setHasBackground(!hasBackground)
  };

  const handleBackgroundChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBackgroundColor(e.target.value as Color)

  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(e.target.value as Size)
  };

  return (
    <Card
      initialBg="#131212"
      middleBg='#414b34'
      finalBg='#000000'
      degrees={120}
    >
      <CardHead >
        <h3 className="title-card" >Choice properties</h3>
      </CardHead>

      <CardMedia>
        <div className="control">
          <input
            type="checkbox"
            checked={isAnimated}
            onChange={handleAnimation}
          />
          <label>Has Animation?</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            checked={hasBackground}
            onChange={handleHasBackground}
          />
          <label>Has Background?</label>
        </div>
        <div className="control">
          <label style={{ alignSelf: 'center' }} >Color:</label>
          <select
            value={backgroundColor}
            onChange={handleBackgroundChange}
            style={{ backgroundColor }}
          >
            <option value='red' >Red</option>
            <option value='blue' >Blue</option>
            <option value='green' >Green</option>
          </select>
        </div>

        <div className="control">
          <label style={{ alignSelf: 'center' }} >Size:</label>
          <select
            value={size}
            onChange={handleSizeChange}
            style={{ backgroundColor }}
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
          label="OK"
          hasBackground={hasBackground}
          isAnimated={isAnimated}
          backgroundColor={backgroundColor}
          size={size}
        />
      </CardContent>
    </Card >
  )
}
