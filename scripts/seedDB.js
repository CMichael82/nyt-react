const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
	process.env.MONGODB_URI ||
	"mongodb://localhost/nytreact"
);

const articleSeed = [{
		title: "Title1",
		url: "Link1",
		date: new Date(Date.now())
	},
	{
		title: "Title2",
		url: "Link2",
		date: new Date(Date.now())
	},
	{
		title: "Title3",
		url: "Link3",
		date: new Date(Date.now())
	},
	{
		title: "Title4",
		url: "Link4",
		date: new Date(Date.now())
	},
	{
		title: "Title5",
		url: "Link5",
		date: new Date(Date.now())
	}
];

db.Article
	.remove({})
	.then(() => db.Article.collection.insertMany(articleSeed))
	.then(data => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});