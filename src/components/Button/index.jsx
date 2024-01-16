import { StyledButton } from './styled';

export * from './styled';

export const Button = ({
	$variant = 'primary',
	$size = 'lg',
	$weight = 'medium',
	children,
	...props
}) => {
	return (
		<StyledButton
			$variant={$variant}
			$size={$size}
			$weight={$weight}
			{...props}
		>
			{children}
		</StyledButton>
	);
};
