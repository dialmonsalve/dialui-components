import { useState } from "react";
import { Color, SelectData, Size } from "../../type";

type SelectsHandlerResult = {
  selectState:SelectData<Color| Size>,
  handleChange:(e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const useHandlerSelects = (selectData: SelectData<Color| Size>): SelectsHandlerResult => {

  const [selectState, setSelectState] = useState<SelectData<Color| Size>>(selectData);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

    const { name, value } = e.target;

    setSelectState(prevState => ({
      ...prevState,
      [name]: value as Color
    }))

  }

  return {
    selectState,
    handleChange
  }
}