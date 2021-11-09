const { createNote, validateNote, deleteNote } = require('../../lib/notes');
let { notes } = require('../../db/db.json');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    let outcome = notes;
    res.json(outcome);
    console.log(outcome);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if(!validateNote(req.body)) {
        res.status(400).send('Note is invalid');
    }
    else {
        const note = createNote(req.body, notes);
        res.json(note);
    }
});

router.delete('/notes/:id', (req, res) => {
    let singleNoteId = req.params.id;
    notes = notes.filter(note => note.id !== singleNoteId);

    deleteNote(notes);
    res.json(notes);
});

module.exports = router;