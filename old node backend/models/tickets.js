const mongoose = require("mongoose");
const ticketSchema = new mongoose.Schema(
    {
        title: {
            type: String
        },
        content: {
            type: String
        },
        status: {
            type: Number
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("ticketentry", ticketSchema);
