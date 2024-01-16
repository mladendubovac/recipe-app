import { Icon } from '../Icon';
import { MetaInfoText, MetaInfoWrapper } from './styled';

export const MetaInfo = ({ icon, text }) => (
	<MetaInfoWrapper>
		<Icon type={icon} />
		<MetaInfoText>{text}</MetaInfoText>
	</MetaInfoWrapper>
);
