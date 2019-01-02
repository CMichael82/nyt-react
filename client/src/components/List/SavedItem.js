import React from "react";
import { Container, Row} from "../Grid";
import DeleteBtn from "../DeleteBtn";

export const SavedItem = props => (
	<li className="list-group-item">
		<Container>
			<Row>
				<h5>{props.headline}</h5>
				<p>Published Date: {props.published}</p>
				<a rel="noreferrer noopener" target="_blank" href={props.href}>
					Go to Article!
          </a>
				<DeleteBtn onClick={(id)=>props.deleteArticle(props.id)}></DeleteBtn>
			</Row>
		</Container>
	</li>
);