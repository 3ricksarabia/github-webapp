import { useState, useEffect } from "react";
import Search from "../components/Search";
import Navigation from "../components/Navigation";
import Container from "../components/Container";

const Users = () => {
	const [users, setUsers] = useState([]);
	const [storage, setStorage] = useState({});
	const [block, setBlock] = useState(false);

	useEffect(() => {
		if (Object.keys(storage).length >= 30) {
			setStorage({});
		}
	}, [storage]);

	const searchUsers = (event) => {
		const USERNAME = event.target.value || "";
		const STORAGE = storage;

		if (USERNAME) {
			if (USERNAME in storage) {
				setUsers(storage[USERNAME]);
				setBlock(false);
			} else if (!block) {
				fetch(`https://api.github.com/search/users?q=${USERNAME}&per_page=5`, {
					headers: {
						authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
					},
				})
					.then((response) => response.json())
					.then((data) => {
						if (data.items.length === 0) {
							setBlock(true);
						}

						STORAGE[USERNAME] = data.items;
						setUsers(data.items);
						setStorage(STORAGE);
					})
					.catch(() => setUsers([]));
			}
		} else {
			setUsers([]);
		}
	};

	return (
		<Container>
			<Navigation back="/" />
			<Search results={users} handleSearch={searchUsers} title="GithHub Users" type="user" />
		</Container>
	);
};

export default Users;
