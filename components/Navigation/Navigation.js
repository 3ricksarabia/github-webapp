import Link from "next/link";
import { Anchor, Wrapper } from "./styled";

const Navigation = ({ back, home }) => (
	<Wrapper>
		<li>
			{back && (
				<Link href={back}>
					<Anchor>&laquo; back</Anchor>
				</Link>
			)}
		</li>
		<li>
			{home && (
				<Link href={home}>
					<Anchor>home</Anchor>
				</Link>
			)}
		</li>
	</Wrapper>
);

export default Navigation;
