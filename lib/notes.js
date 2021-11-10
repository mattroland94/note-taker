const fs = require('fs');
const path = require('path');

const notesDatabase = path.join(__dirname, '../db/db.json');

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        notesDatabase,
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

function deleteNote(notesArray) {
    fs.writeFileSync(
        notesDatabase,
        JSON.stringify({ notes: notesArray }, null, 2)
    );
}

module.exports = {
    createNewNote,
    validateNote,
    deleteNote
};