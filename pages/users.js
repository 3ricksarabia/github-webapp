import { useState } from "react";
import Search from "../components/Search";
import Navigation from "../components/Navigation";
import Container from "../containers/User";

const Home = () => {
	const [users, setUsers] = useState();
	console.log("process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN", process.env.GITHUB_ACCESS_TOKEN);

	const searchUsers = (event) => {
		const USERNAME = event.target.value || "";

		if (USERNAME) {
			fetch(`https://api.github.com/search/users?q=${USERNAME}&per_page=5`, {
				headers: {
					authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
				},
			})
				.then((response) => response.json())
				.then((data) => setUsers(data.items))
				.catch(() => setUsers([]));
		} else {
			setUsers([]);
		}
	};

	return (
		<Container>
			<Navigation back="/" />
			<Search results={users} handleSearch={searchUsers} />
		</Container>
	);
};

export default Home;
