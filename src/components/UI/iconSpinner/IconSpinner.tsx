import Eclipse from './IconSpinnerEclipse';
import Dots from './IconSpinnerDots';
import Mice from './IconSpinnerMice';
import Fleas from './IconsSpinnerFleas';
import Squares from './IconSpinnerSquares';

import type { SpinnerSize, SpinnerType } from '../../../types';

interface Props {
	iconSpinner?: SpinnerType;
	size?: SpinnerSize;
}
const IconSpinner = ({ iconSpinner = 'eclipse', size = 'sm' }: Props) => {
	if (iconSpinner === 'mice') return <Mice size={size} />;

	if (iconSpinner === 'dots') return <Dots size={size} />;

	if (iconSpinner === 'fleas') return <Fleas size={size} />;

	if (iconSpinner === 'eclipse') return <Eclipse size={size} />;

	if (iconSpinner === 'squares') return <Squares size={size} />;
};

export default IconSpinner;
