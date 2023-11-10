import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const NoteSchema = new Schema({
    tabs: {
        type: String,
        required: 'Enter a category or tab for the note'
    },
    summary: {
        type: String,
        required: 'Enter a summary for the note'
    },
    title: {
        type: String,
        required: 'Enter a title for the note'
    },
    date: {
        type: Date,
        default: Date.now 
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: 'Each note must be associated with a user'
    }
});
