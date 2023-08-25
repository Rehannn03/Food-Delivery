require("dotenv").config();
const mongoose=require('mongoose')

const mongoDB = async () => {
  mongoose
    .connect(process.env.MONGO_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      // mongoose.set("strictQuery", false);

      console.log("Connected to Mongo Successfully!");
      // const fetch_data = mongoose.connection.collection("test");
      // fetch_data
      //   .find({})
      //   .toArray()
      //   .then((data) => {
      //     console.log();
      //   });
    })

    .catch((err) => {
      console.log(err);
    });
};

module.exports=mongoDB 
