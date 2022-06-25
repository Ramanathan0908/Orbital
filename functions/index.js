const functions = require('firebase-functions');
const app = require('express')();

const {
    getAllSummaries,
    postOneSummary,
    deleteSummary,
    editSummary
} = require('./API/summaries')

app.get('/summaries', getAllSummaries);
app.post('/summary', postOneSummary);
app.delete('/summary/:summaryId', deleteSummary);
app.put('/summary/:summaryId', editSummary);
exports.api = functions.https.onRequest(app);
