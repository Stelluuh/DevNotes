import Note from '../models/Note';

export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find()
        res.status(200).json(notes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};