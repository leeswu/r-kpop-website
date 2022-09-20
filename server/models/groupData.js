import mongoose from 'mongoose';

const groupSchema = mongoose.Schema({
    Name: String,
    Authors: [{Author: String, Count: Number}],
    Created: [Number],
    Distinguished: Number,
    Edited: Number,
    'Link Flairs': [{LinkFlair: String, Count: Number}],
    Locked: Number,
    'Num Comments': [Number],
    'Num Posts': Number,
    Original: Number, 
    Scores: [Number],
    Self: Number,
    Stickied: Number,
    'Upvote Ratios': [Number],
    'Time Series': [{Week: String, Count: Number}]
}, {collection: 'groupData'});

const GroupData = mongoose.model('GroupData', groupSchema);

export default GroupData