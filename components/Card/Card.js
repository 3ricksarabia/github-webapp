import { Wrapper, Thumbnail, Caption, Button } from "./styled";

const Card = ({ bio, image, username, name }) => (
	<Wrapper>
		<Thumbnail>
			<img alt={username} src={image} />
		</Thumbnail>
		<Caption>
			<div>
				<h3>{name}</h3>
				<span>@{username}</span>
			</div>
			<p>{bio}</p>
			<Button>More</Button>
		</Caption>
	</Wrapper>
);

export default Card;
