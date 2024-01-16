import { TagWrapper } from './styled';

export const Tag = ({ text, $weight = 'medium' }) => {
	return <TagWrapper $weight={$weight}>{text}</TagWrapper>;
};
