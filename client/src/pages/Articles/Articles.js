import React, { Component } from "react";
import API from "../../utils/API";
import { Redirect } from "react-router-dom";
import { Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Articles extends Component {
	state = {
		results: [],
		topic: "",
		startYear: "",
		endYear: "",
		saved: false,
	};


	saveArticle = article => {
		console.log(article);
		API.saveArticle({
			title: article.title,
			url: article.url,
			datePublished: article.date,
		})
			.then(() => this.setState(() => ({
				saved: true
			})))
			.catch(err => console.log(err));
	}

	// deleteArticle = id => {
	// 	API.deleteArticle(id)
	// 		.then(res => this.loadArticles())
	// 		.catch(err => console.log(err));
	// };

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.topic && this.state.startYear && this.state.endYear) {
			API.searchNYTdb(this.state.topic, this.state.startYear, this.state.endYear)
				.then(res => {
					return (
						this.setState({ results: res.data.response.docs, topic: "", startYear: "", endYear: "" }),
						console.log('SEARCH DATA', res.data),
						console.log('RESULTS', this.state.results)
					)
				})
				.catch(err => console.log(err))
		}
	};

	render() {

		if (this.state.saved === true) {
			return <Redirect to='/saved' />
		}
		return (
			<Container>
				<Row>
					<h1>SEARCH:</h1>
					<form>
						<Input
							value={this.state.topic}
							onChange={this.handleInputChange}
							name="topic"
							placeholder="Topic (required)"
						/>
						<Input
							value={this.state.startYear}
							onChange={this.handleInputChange}
							name="startYear"
							placeholder="Start Year (required)"
						/>
						<Input
							value={this.state.endYear}
							onChange={this.handleInputChange}
							name="endYear"
							placeholder="End Year (required)"
						/>
						<FormBtn
							disabled={!(this.state.topic && this.state.startYear && this.state.endYear)}
							onClick={this.handleFormSubmit}
						>Submit
						</FormBtn>
					</form>
				</Row>
				<Row>
					<h1>RESULTS:</h1>
					{this.state.results.length ? (
						<List>
							{this.state.results.map(result => (
								<ListItem key={result._id}
									headline={result.headline.main}
									published={result.pub_date}
									href={result.web_url}
									saveArticle={this.saveArticle}
									id={result._id}
								>
								</ListItem>
							))}
						</List>
					) : (
							<h3>No Results to Display</h3>
						)}
				</Row>
			</Container>
		)
	}
}

export default Articles;
