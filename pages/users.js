import Search from "../components/Search";

const Users = () => (
	<Search title="GithHub Users" type="user" url="https://api.github.com/search/users" />
);

export default Users;
