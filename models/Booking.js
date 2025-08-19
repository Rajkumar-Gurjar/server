const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
    {
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "course", // same as course model Course spelling  , course collection reference
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user", //user collection reference
            required: true,
        },
        date: {
            tyep: Date,
            default: Date.now,
        },
        status : {
            type: String ,
            enum: ["Pending", "COnfirmed", "Cancelled"],
            default: "Confirmed",
        },
        price: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true}
);

module.exports = mongoose.model("Booking", bookingSchema);