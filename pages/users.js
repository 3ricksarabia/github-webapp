import { useState, useEffect } from "react";
import Search from "../components/Search";
import Navigation from "../components/Navigation";
import Container from "../components/Container";

const Users = () => {
	const [users, setUsers] = useState([]);
	const [storage, setStorage] = useState({});
	const [block, setBlock] = useState(false);
	const [interval, setInterval] = useState(0);

	useEffect(() => {
		if (Object.keys(storage).length >= 30) {
			setStorage({});
		}
	}, [storage]);

	const searchUsers = (username, currentInterval) => {
		const STORAGE = storage;

		if (username && !block) {
			fetch(`https://api.github.com/search/users?q=${username}&per_page=5`, {
				headers: {
					authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
				},
			})
				.then((response) => response.json())
				.then((data) => {
					if (data.items.length === 0) {
						setBlock(true);
					}

					STORAGE[username] = data.items;
					setUsers(data.items);
					setStorage(STORAGE);
				})
				.catch(() => setUsers([]))
				.finally(() => window.clearInterval(currentInterval));
		} else {
			setUsers([]);
		}
	};

	const onKeyUp = () => {
		const INPUT = document.querySelector("#search").value;
		window.clearInterval(interval);

		if (INPUT in storage) {
			setUsers(storage[INPUT]);
			setBlock(false);
		} else {
			const INTERVAL = window.setInterval(() => searchUsers(INPUT, INTERVAL), 1000);
			setInterval(INTERVAL);
		}
	};

	return (
		<Container>
			<Navigation back="/" />
			<Search results={users} onKeyUp={onKeyUp} title="GithHub Users" type="user" />
		</Container>
	);
};

export default Users;
