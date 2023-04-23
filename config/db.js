const mongoose = require("mongoose");
const connectDB = async () => {
  // let mongoUrl = "mongodb://localhost/product";
  let mongoUrl = process.env.DATABASE_URL;
  // console.log(process.env.DATABASE_URL);
  console.log("mongoUrl " + mongoUrl);
  const conn = await mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(
    `Mongo DB Connected: ${conn.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDB;
