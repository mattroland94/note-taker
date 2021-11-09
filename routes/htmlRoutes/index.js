const path = require('path');
const router = require('express').Router();

const rootDirectory = path.join(__dirname, '../../public');

router.get('/', (req, res) => {
    res.sendFile(rootDirectory, 'index.html');
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(rootDirectory, 'notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(rootDirectory, 'index.html'));
});

module.exports = router;