const router = require('express').Router();
const burgerModel = require('../models/burger');

router.get('/', (req, res) => {
    burgerModel.all(result => {
        let hbsObject = {
            burgers: result
        };
        res.render("index", hbsObject);
    });
});

router.post('/api/burgers/:name', (req, res) => {
    burgerModel.create(req.params.name, result => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});

router.put('/api/burgers/:id', (req, res) => {
    let action = req.body.action;
    burgerModel.update(req.params.id, action, result => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});

module.exports = router;