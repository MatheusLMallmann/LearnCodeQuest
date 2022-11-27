const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    level: {
        type: Number,
        default: 0
    },
    learnPoints: {
        type: Number,
        default: 15000
    },
    keyword: {
        type: String,
        required: true
    },
    purchasesHistoric: [
        {
            productId: {
                type: String
            },
            productName: {
                type: String
            },
            productActivationCode: {
                type: String
            },
            purchaseDate: {
                type: Date
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;