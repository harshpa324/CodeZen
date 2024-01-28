import mongoose from "mongoose";

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDatabase = async () => {
  const connectionUrl =
  process.env.API_KEY
    

  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log(" database connected successfully!"))
    .catch((err) =>
      console.log(`Getting Error from DB connection ${err.message} ${process.env.API_KEY}`)
    );
};

export default connectToDatabase;