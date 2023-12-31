const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// import routes
const router = require('./routes/routes');

// adding /books to before all routes
app.use('/book', router);

const uri = "mongodb+srv://bookuser1:book123@cluster0.yb2jpwb.mongodb.net/BookDB?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true,  useUnifiedTopology: true   }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)});
})