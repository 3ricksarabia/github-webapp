import { useRouter } from "next/router";
import Card from "../../components/Card";
import Container from "../../containers/User";

const Post = ({ user }) => (
	<Container>
		<Card bio={user.bio} image={user.avatar_url} name={user.name} username={user.login} />
	</Container>
);

export async function getServerSideProps({ query }) {
	const RESPONSE = await fetch(`https://api.github.com/users/${query.username}`);
	const USER = await RESPONSE.json();

	return {
		props: {
			user: USER,
		},
	};
}

export default Post;
