const router = require("express").Router();
const Athlete = require('../../models/Athlete')
const { checkSchema, validationResult } = require('express-validator');

router.get('/', async (req, res) => {
    console.log('GET /api/athlete');

    try {
        const athletes = await Athlete.find();
        res.status(200).send(athletes);
    } catch (err) {
        console.log(err);
        res.status(500).json({ errors: err });
    }
})

router.post('/', 
checkSchema({
    name: {
        in: ['params']
    },
    sport: {
        in: ['params']
    },
    gender: {
        in: ['params']
    },
    birth: {
        in: ['params']
    },
    description: {
        in: ['params']
    },
    location: {
        in: ['params']
    },
    team: {
        in: ['params']
    },
}),
async (req, res) => {
    console.log('POST /api/athlete/');
    const newAthlete = new Athlete(req.body);

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw errors;
        }
        const insert = await newAthlete.save();
        console.log(insert);
        res.status(200).send(insert);
    } catch (err) {
        console.log(err);
        res.status(500).json({ errors: err });
    }
    
})

router.put('/:id', async (req, res) => {
    console.log('PUT /api/athlete/' + req.params.id);

    try {
        const change = await Athlete.findByIdAndUpdate(req.params.id, req.body.change);
        console.log(change);
        res.status(200).send(change);
    } catch (err) {
        console.log(err);
        res.status(500).json({ errors: err });
    }
    
})

module.exports = router;