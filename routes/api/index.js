const router = require("express").Router();
const articleRoutes = require("./articles");
const savedRoutes = require("./saved");

router.use("/articles", articleRoutes);
router.use("/saved", savedRoutes);

module.exports = router;
