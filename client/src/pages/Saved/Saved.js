import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import { List, SavedItem } from "../../components/List";
import API from "../../utils/API";

class Saved extends Component {
	state = {
		article: []
	};

	loadArticles = () => {
		API.getArticles()
			.then(res =>
				this.setState({ article: res.data })
			)
			.catch(err => console.log(err));
	};

	deleteArticle = id => {
		API.deleteArticle(id)
			.then(res => this.loadArticles())
			.catch(err => console.log(err));
	};

	componentDidMount() {
		console.log("Page is Loaded");
		this.loadArticles();
		console.log('SAVED ARTICLES: ', this.state.article);
	}

	render() {
		return (
			<Container>
				<Row>
					<h1>SAVED ARTICLES:</h1>
					{this.state.article.length ? (
						<List>
							{this.state.article.map(saved => (
								<SavedItem key={saved._id}
									headline={saved.title}
									published={saved.date}
									href={saved.url}
									deleteArticle={this.deleteArticle}
									id={saved._id}
								>
								</SavedItem>
							))}
						</List>
					) : (
							<h3>No Saved Articles to Display</h3>
						)}
				</Row>
			</Container>
		)
	}
}

export default Saved;
