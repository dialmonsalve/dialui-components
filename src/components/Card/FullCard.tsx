
import { useHandleCheckbox, useHandlerSelects } from "../hooks";

import { Card, CardContent, CardHead, CardMedia } from "./";
import { Button } from "../Button";

import { CheckboxData, Color, SelectData, Size } from "../../type";

interface FullCardProps {
  isButtonAnimated?: boolean
  hasButtonBackground?: boolean
  colorBackground?: Color
  sizeButton?: Size
}

export const FullCard = ({
  colorBackground = 'red',
  hasButtonBackground = false,
  isButtonAnimated = false,
  sizeButton = 'medium',
}: FullCardProps) => {

  const checkboxesData: CheckboxData = {
    isAnimated: isButtonAnimated,
    hasBackground: hasButtonBackground,
  };

  const selectData: SelectData<Color | Size> = {
    bg: colorBackground,
    size: sizeButton
  }

  const [checkboxState, handleCheckboxChange] = useHandleCheckbox(checkboxesData);
  const { selectState, handleChange } = useHandlerSelects(selectData);

  return (
    <Card
      initialBg="#131212"
      middleBg='#414b34'
      finalBg='#000000'
      degrees={120}
    >
      <CardHead >
        <h3
          className="title-card" >Choice properties to Button</h3>
      </CardHead>

      <CardMedia>
        <div className="control">
          <input
            type="checkbox"
            name="isAnimated"
            checked={checkboxState.isAnimated}
            onChange={() => handleCheckboxChange("isAnimated")}
          />
          <label>Has Animation?</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            name="hasBackground"
            checked={checkboxState.hasBackground}
            onChange={() => handleCheckboxChange("hasBackground")}
          />
          <label>Has Background?</label>
        </div>
        <div className="control">
          <label style={{ alignSelf: 'center' }} >Color:</label>
          <select
            name="bg"
            value={selectState.bg}
            onChange={handleChange}
            style={{ backgroundColor: selectState.bg }}
          >
            <option value='red' >Red</option>
            <option value='blue' >Blue</option>
            <option value='green' >Green</option>
          </select>
        </div>

        <div className="control">
          <label style={{ alignSelf: 'center' }} >Size:</label>
          <select
            name="size"
            value={selectState.size}
            onChange={handleChange}
            style={{ backgroundColor: selectState.bg }}
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
          hasBackground={checkboxState.hasBackground}
          isAnimated={checkboxState.isAnimated}
          backgroundColor={selectState.bg as Color}
          size={selectState.size as Size}
        />
      </CardContent>
    </Card >
  )
}
