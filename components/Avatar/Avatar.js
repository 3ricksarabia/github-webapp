import Link from "next/link";
import { string, oneOf, number } from "prop-types";
import { Wrapper, Placeholder, Image } from "./styled";

const Avatar = ({ image, username, name, type, id, owner }) => {
	const QUERY = type === "repo" ? { owner, name } : null;

	return (
		<Link href={{ pathname: `/${type}/${[username || id]}`, query: QUERY }}>
			<Wrapper>
				<Placeholder>{image && <Image alt={username} src={image} />}</Placeholder>
				{username && <span>@{username}</span>}
				{name && <span>/{name}</span>}
			</Wrapper>
		</Link>
	);
};

Avatar.propTypes = {
	/** The user image source. */
	image: string,
	/** The user identification. */
	username: string,
	/** The user or repo name. */
	name: string,
	/** The type of search. */
	type: oneOf(["repo", "user"]),
	/** The repo identification. */
	id: number,
	/** The repo owner. */
	owner: string,
};

Avatar.defaultProps = {
	image: "",
	username: "",
	name: "",
	type: "",
	id: null,
	owner: "",
};

export default Avatar;
