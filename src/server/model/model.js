const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    ImgUrl: {
        type: String,
        required: [true, "Image is required"]
    },
    Treasure: {
        type: Number,
        required: [true, "Number of treasure is required"]
    },
    Phrases: {
        type: String,
        required: [true, "catch phrases is required"]
    },
    position: {
        type: String,
        required: [true, "position is required"]
    },
    pegLeg: {
        type: Boolean
    },
    eyePatch: {
        type: Boolean
    },
    hookHand: {
        type: Boolean
    }
}, { timestamps: true });

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;


