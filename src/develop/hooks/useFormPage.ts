import { useState } from "react";
import useInput from "../../hooksApp/form/useInput";
import useCheckbox from "../../hooksApp/form/useCheckbox";
import useAppOptions from "./context/useAppOptions";

const form = {
	name: '',
	lastName: '',
	phone: '',
	description: '',
};

const check = {
	serieA: false,
	serieB: true,
};

const multiOptions = [
'PINEAPPLE', 'APPLE', 'GRAPES', 'LEMONS', 'PEACH'
];
const simpleOptions = ['ONE OPTION', 'SECOND OPTION', 'THIRD OPTION', 'FOURTH OPTION'];

const databaseTags: string[] = [];
export const useFormPage = () => {

  const { lang } = useAppOptions();

	const [selectState, handleSelectChange] = useState<string[]>([]);

	const [simpleSelect, handleSimple] = useState('');

	const { inputState, handleInputChange } = useInput({
		initialInput: form,
	});

	const { handleCheckboxChange, checkboxState } = useCheckbox({
		initialCheckbox: check,
	});

	const [tagsState, handleInputTagsChange] = useState(databaseTags);

  const [loading, setLoading] = useState(false)

  const handleLoading = ()=>{
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 2500);
  }

  return {
    lang,
    selectState,
    simpleOptions,
    inputState,
    simpleSelect,
    tagsState,
    checkboxState,
    multiOptions,
    loading,
    handleCheckboxChange,
    handleSelectChange,
    handleSimple,
    handleInputChange,
    handleInputTagsChange,
    handleLoading
  }
}
