const express = require('express');
const router = express.Router();
const Msg = require('../models/MsgSchema');

//Send Msg
router.post('/message', async (req, res, next) => {
    try {
       const ename = req.body.ename;
       const eemail = req.body.eemail;
       const emessage = req.body.emessage;

       const sendMsg = new Msg({
               ename: ename,
               eemail: eemail,
               emessage: emessage
       });
 
       const created = await sendMsg.save();
       console.log(created);
       res.status(200).send("Sent");

    } catch (err) {
            res.status(400).send(err);
    }
});

module.exports = router;
