require("dotenv").config()
const mongoose = require("mongoose");



// Connection URL
const mongo_url = process.env.MONGO_URL

// Connect to MongoDB
mongoose.connect(mongo_url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(console.log("succefully connected"))
	.catch((error) => {
		console.log("connection fail hogya re baba ");
		process.exit(1);
	});
