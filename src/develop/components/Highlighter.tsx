import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
	oneDark,
	oneLight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { openAlert } from '../..';
import useTheme from '../hooks/context/useAppOptions';
import Clipboard from './icons/Clipboard';

function Highlighter({
	children,
	language = 'jsx',
}: { children: string; language?: string }) {
	const { theme } = useTheme();
	const copyToClipboard = async () => {
		await navigator.clipboard.writeText(children);
		openAlert({
			message: 'copied to clipboard',
			type: 'info',
			sideX: 'right',
			sideY: 'down',
			duration: 1500,
		});
	};
	return (
		<article className='code-highlighter'>
			<SyntaxHighlighter
				language={language}
				style={theme === 'light' ? oneDark : oneLight}
			>
				{children}
			</SyntaxHighlighter>
			<button
				type='button'
				className='code-highlighter__btn'
				onClick={copyToClipboard}
				style={{ color: `${theme === 'light' ? 'white' : 'black'}` }}
			>
				<Clipboard />
			</button>
		</article>
	);
}

export default Highlighter;
