import React from "react";
import { Container, Row} from "../Grid";
import SaveBtn from "../SaveBtn";

export const ListItem = props => (
	<li className="list-group-item">
		<Container>
			<Row>
				<h3>{props.headline}</h3>
				<p>Published Date: {props.published}</p>
				<a rel="noreferrer noopener" target="_blank" href={props.href}>
					Go to Article!
          </a>
				<SaveBtn onClick={()=>props.saveArticle({title: props.headline, url: props.href, date: props.published})} ></SaveBtn>
			</Row>
		</Container>
	</li>
);
