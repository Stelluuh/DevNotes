import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TimerSchema = new Schema({
    title: {
        type: String,
        required: 'Enter a title'
    },
    initialTime: {
        type: Number,
        required: 'Enter the initial time in minutes'
    },
    remainingTime: {
        type: Number
    },
    isRunning: {
        type: Boolean,
        default: false //By default, the timer is not running
    }

})