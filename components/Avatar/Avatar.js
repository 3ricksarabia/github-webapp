import Link from "next/link";
import { Wrapper, Placeholder, Image } from "./styled";

const Avatar = ({ image, username, name, type, id, owner, repo }) => (
	<Link href={{ pathname: `/${type}/${[username || id]}`, query: { owner, name } }}>
		<Wrapper>
			<Placeholder>
				<Image alt={username} src={image} />
			</Placeholder>
			{username && <span>@{username}</span>}
			{name && <span>/{name}</span>}
		</Wrapper>
	</Link>
);

export default Avatar;
