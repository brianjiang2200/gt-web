const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for course
const courseSchema = new Schema({
    author: mongoose.Types.ObjectId,
    title: {
        type: String,
        required: [true, 'The course title is required']
    },
    summatives: [{
        title: { 
           type: String,
           required: [true, 'The summative title is required']
        }, 
        weight: {
            type: mongoose.Types.Decimal128,
            min: 0.0,
            max: 100.0
        },
        grade: {
            type: mongoose.Types.Decimal128,
            min: 0.0,
            max: 100.0
        } 
    }],
    active: Boolean,
    description: String
});

const Course = mongoose.model('course', courseSchema);

module.exports = Course;