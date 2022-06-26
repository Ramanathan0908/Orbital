const functions = require('firebase-functions');
const app = require('express')();
const auth = require('./util/auth');

const {
    getAllSummaries,
    postOneSummary,
    deleteSummary,
    editSummary
} = require('./API/summaries')

const {
    loginUser,
    signUpUser,
    getUserDetail
} = require('./API/users')

app.get('/summaries', auth, getAllSummaries);
app.post('/summary', auth, postOneSummary);
app.delete('/summary/:summaryId', auth, deleteSummary);
app.put('/summary/:summaryId', auth, editSummary);

app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.get('/users', auth, getUserDetail)

exports.api = functions.https.onRequest(app);
