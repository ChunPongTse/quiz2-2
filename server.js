
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//const uri = "mongodb://localhost:27017/Exams23002";
//const uri = "mongodb+srv://tempuser:123@cluster0.f9d6o.gcp.mongodb.net/Exams23002";
const uri = "mongodb+srv://junkuser:junk12345@nodeexpress-jwt-test.ojchbel.mongodb.net/Exams23002";

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true   }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


// import routes
const quizRouter = require('./routes/quizes');

// adding /books to before all routes
app.use('/', quizRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
