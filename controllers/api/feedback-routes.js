const router = require('express').Router();
const { Feedback } = require('../../models');
const {withAuth,authAdmin} = require("../../utils/auth.js")

router.post('/', async (req,res) => {
    try {   
        const feedbackData = await Feedback.create(req.body);
        res.status(200).json(feedbackData)
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
});

module.exports = router;