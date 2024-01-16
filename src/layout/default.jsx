import { Outlet } from 'react-router-dom';
import { Grid, Main, Navbar, Sidebar } from '../components';

export const Layout = () => {
	return (
		<Grid>
			<Sidebar />
			<Main>
				<Outlet />
			</Main>
			<Navbar />
		</Grid>
	);
};
