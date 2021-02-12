import { useState } from "react";
import Search from "../components/Search";

const Home = () => {
	const [users, setUsers] = useState();

	const searchUsers = (event) => {
		if (event) {
			fetch(`https://api.github.com/search/users?q=${event.target.value}&per_page=5`, {
				headers: {
					authorization: "token 493080f1411e27c7a0b339e3605e1680d381b331",
				},
			})
				.then((response) => response.json())
				.then((data) => setUsers(data.items));
		}
	};

	return (
		<>
			<Search results={users} handleSearch={searchUsers} />
		</>
	);
};

export default Home;
