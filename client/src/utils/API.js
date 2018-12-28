import axios from "axios";

export default {
	getArticles: function () {
		return axios.get("/api/saved");
	},
	getArticle: function (id) {
		return axios.get("/api/articles/" + id);
	},
	deleteArticle: function (id) {
		return axios.delete("/api/saved/" + id);
	},
	saveArticle: function (articleData) {
		return axios.post("/api/articles", articleData);
	},
	searchNYTdb: function (topic, startYear, endYear) {
		const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
		const api = "220a5868692847ae9394d243bc146588";
		console.log(`${queryURL}api-key=${api}&q=${topic}&begin_date=${startYear}0101&end_date=${endYear}0101`);

		return axios.get(`${queryURL}api-key=${api}&q=${topic}&begin_date=${startYear}0101&end_date=${endYear}0101`)
	}
};


// https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b%3A0%3A74623931&q=Olympics&begin_date=20100101&end_date=20140101