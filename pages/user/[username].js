import { shape } from "prop-types";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Navigation from "../../components/Navigation";

const User = ({ user }) => (
	<Container>
		<Navigation back="/users" home="/" />
		<Card
			bio={user.bio}
			image={user.avatar_url}
			name={user.name}
			username={user.login}
			url={user.html_url}
		/>
	</Container>
);

export async function getServerSideProps({ query }) {
	const RESPONSE = await fetch(`https://api.github.com/users/${query.username}`, {
		headers: {
			authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
		},
	});
	const USER = await RESPONSE.json();

	return {
		props: {
			user: USER,
		},
	};
}

User.propTypes = {
	/** The user data. */
	user: shape(),
};

User.defaultProps = {
	user: null,
};

export default User;
