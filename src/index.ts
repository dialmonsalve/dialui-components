import IconSpinnerDots from './components/iconSpinner/IconSpinnerDots';
import IconSpinnerEclipse from './components/iconSpinner/IconSpinnerEclipse';
import IconSpinnerFleas from './components/iconSpinner/IconSpinnerFleas';
import IconSpinnerMice from './components/iconSpinner/IconSpinnerMice';
import IconSpinnerSquares from './components/iconSpinner/IconSpinnerSquares';

import openAlert from './components/alert/openAlert';
import openModal from './components/modal/openModal';

import Notification from './components/Notification';
import Table, {
	Cell,
	Row,
	TableBody,
	TableHead,
	Title,
} from './components/Table';

import Checkbox from './components/Checkbox';
import Input from './components/Input';
import InputTags from './components/InputTags';
import Select from './components/Select';
import Textarea from './components/Textarea'
import Spinner from './components/Spinner';
import { lazy } from 'react';

const Button = lazy(()=>import('./components/button/ButtonNormal'))
const ButtonBeat = lazy(()=>import('./components/button/ButtonBeat'))
const ButtonRipple = lazy(()=>import('./components/button/ButtonRipple'))
const ButtonSlideDown = lazy(()=>import('./components/button/ButtonSlideDown'))
const ButtonSquares = lazy(()=>import('./components/button/ButtonSquares'))

export {
	Button,
	ButtonBeat,
	ButtonRipple,
	ButtonSlideDown,
	ButtonSquares,
	Cell,
	Checkbox,
	IconSpinnerDots,
	IconSpinnerEclipse,
	IconSpinnerFleas,
	IconSpinnerMice,
	IconSpinnerSquares,
	Input,
	InputTags,
	Notification,
	openAlert,
	openModal,
	Row,
	Select,
	Spinner,
	Table,
	TableBody,
	TableHead,
	Textarea,
	Title,
};
