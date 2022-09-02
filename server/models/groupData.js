import mongoose from 'mongoose';

const groupSchema = mongoose.Schema({
    Name: String,
    Authors: [{Author: String, Count: Number}],
    Created: [Number],
    Distinguished: Number,
    Edited: Number,
    LinkFlairs: [{LinkFlair: String, Count: Number}],
    Locked: Number,
    NumComments: [Number],
    NumPosts: Number,
    Original: Number, 
    Scores: [Number],
    Self: Number,
    Stickied: Number,
    UpvoteRatios: [Number],
    TimeSeries: [{Week: String, Count: Number}]
}, {collection: 'groupData'});

const GroupData = mongoose.model('GroupData', groupSchema);

export default GroupData