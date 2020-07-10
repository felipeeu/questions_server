import mongoose from "mongoose";

const initDB = () => {
  mongoose.connect(
    "mongodb+srv://felipeeu:fevi2406@clusterfelipe-kdk6j.mongodb.net/questions?retryWrites=true",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

  mongoose.connection.once("open", () => {
    console.log("connected to database");
  });
};

export default initDB;
