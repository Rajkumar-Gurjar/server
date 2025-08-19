const mongoose = require("mongoose");
// const Live_url = "mongodb+srv://mavairk:Rkmav@cluster0.esjagbj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async () => {
    return mongoose.connect(process.env.Live_url)

        .then(() => {
            console.log("Database Connection succesful");
        })
        .catch((error) => {
            console.log(error);
        });
};

module.exports = connectDB;