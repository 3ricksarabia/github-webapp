import Link from "next/link";
import { Wrapper, Placeholder, Image } from "./styled";

const Avatar = ({ image, username }) => (
	<Link href={`/user/${[username]}`}>
		<Wrapper title={username}>
			<Placeholder>
				<Image alt={username} src={image} />
			</Placeholder>
			<span>@{username}</span>
		</Wrapper>
	</Link>
);

export default Avatar;
