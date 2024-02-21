import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
	oneDark,
	oneLight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { openAlert } from '../..';
import useTheme from '../hooks/context/useAppOptions';
import Clipboard from './Clipboard';

function Highlighter({ children }: { children: string }) {
	const { theme } = useTheme();
	const copyToClipboard = async () => {
		await navigator.clipboard.writeText(children);
		openAlert({
			message: 'copied to clipboard',
			type: 'info',
			sideX: 'left',
			sideY: 'down',
			duration: 3000,
		});
	};
	return (
		<div className='code-highlighter'>
			<SyntaxHighlighter
				language='jsx'
				style={theme === 'light' ? oneDark : oneLight}
			>
				{children}
			</SyntaxHighlighter>
			<button
				type='button'
				className='code-highlighter__btn'
				onClick={copyToClipboard}
				style={{ color:`${theme === 'light' ? 'white' : 'black'}`}}
			>
				<Clipboard />
			</button>
		</div>
	);
}

export default Highlighter;
