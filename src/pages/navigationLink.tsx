import { NavigationLink } from '@/components/ui/NavigationLink';

function NavigationLinkPage() {
	return (
		<NavigationLink
			backgroundColor='red-400'
			radius='radius-4'
			to='/'
			size='sm-100'
		>
			hola mundo
		</NavigationLink>
	);
}

export default NavigationLinkPage;
