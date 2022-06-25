const { db } = require('../util/admin');

exports.getAllSummaries = (request, response) => {
    db
    .collection('summaries')
    .orderBy('createdAt', 'desc')
    .get()
    .then((data) => {
        let summary = [];
        data.forEach((doc) => {
            summary.push({
                summaryId: summary.id,
                title: doc.data().title,
                body: doc.data().body,
                createdAt: doc.data().createdAt
            })
        })
        return response.json(summary);
    })
    .catch((err) => {
        console.log(err);
        return response.status(500).json({ error: err.code })
    })
}

exports.postOneSummary = (request, response) => {
    if (request.body.body.trim() === '') {
        return response.status(400).json({ body: 'Must not be empty' });
    }

    if (request.body.title.trim() === '') {
        return response.status(400).json({ title: 'Must not be empty' });
    }

    const newSummaryItem = {
        title: request.body.title,
        body: request.body.body,
        createdAt: new Date().toISOString()
    }

    db
    .collection('summaries')
    .add(newSummaryItem)
    .then((doc) => {
        const responseSummaryItem = newSummaryItem;
        responseSummaryItem.id = doc.id;
        return response.json(responseSummaryItem);
    })
    .catch((err) => {
        response.status(500).json({ error: 'Something went wrong' });
        console.log(err);
    })
}

exports.deleteSummaty = (request, response) => {
    const document = db.doc(`/summaries/${request.params.summaryId}`);
    document
    .get()
    .then((doc) => {
        if (!doc.exists) {
            return response.status(404).json({ error: 'Summary not found' })
        }
        return document.delete();
    })
    .then(() => {
        response.json({ message: 'Delete successfull' });
    })
    .catch((err) => {
        console.error(err);
        return response.status(500).json({ error: err.code });
    })
}

exports.editSummary = (request, response) => {
    if (request.body.summaryId || request.body.createdAt) {
        response.status(403).json({ message: 'Not allowed to edit' });
    }

    let document = db.collection('summaries').doc(`${request.params.summaryId}`);
    document.update(request.body)
    .then(() => {
        response.json({ message: 'Updated successfully' });
    })
    .catch((err) => {
        console.error(err);
        return response.status(500).json({
            error: err.code
        })
    })
}

// https://us-central1-orbital-246a3.cloudfunctions.net/api