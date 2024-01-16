import { useRouteError } from 'react-router-dom';
import { Grid, Main, Navbar, Sidebar } from '../components';
import { H1, PBase } from '../components/Typography';
import { ErrorWrapper } from '../components/Error/styled';
import { Link } from '../components/Link';

export const ErrorLayout = () => {
	const error = useRouteError();
	console.error(error);

	return (
		<Grid>
			<Sidebar />
			<Main>
				<ErrorWrapper>
					<Link to="/" iconPosition="left" icon="arrow-left" $gap="1">
						Go back
					</Link>
					<H1>Oops!</H1>
					<PBase>Sorry, an unexpected error has occurred. </PBase>
					<PBase>
						<i>
							{error.status} {error.error.message}
						</i>
					</PBase>
				</ErrorWrapper>
			</Main>
			<Navbar />
		</Grid>
	);
};
