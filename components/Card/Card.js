import { Wrapper, Thumbnail, Caption, Anchor } from "./styled";

const Card = ({ bio, image, username, name, url }) => (
	<Wrapper>
		<Thumbnail>
			<img alt={username} src={image} />
		</Thumbnail>
		<Caption>
			<div>
				<h3>{name}</h3>
				<span>@{username}</span>
			</div>
			{bio && <p>{bio}</p>}
			<Anchor href={url} target="_blank">
				More
			</Anchor>
		</Caption>
	</Wrapper>
);

export default Card;
