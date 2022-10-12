const mongoose = require("mongoose");


module.exports = {

    createEntry(req, res, modelName)

    {
        var obj = req.body
        console.log(obj)
        var modelObj = new modelName(obj);

        modelObj.hashPassword(modelObj.password);
        console.log(modelObj.password);
        modelObj
            .save()
            .then(result => {

                return res.status(201).json({ "message": "saved", "userID": result._id });


            }).catch(err => {
                console.log(err)
                res.status(500).json({
                    error: err
                })

            })



    },


    getAllEntries(req, res, modelObj)

    {

        modelObj
            .find()
            .then(result => {

                return res.status(201).json(result);


            }).catch(err => {
                console.log(err)
                res.status(500).json({
                    error: err
                })

            })
    },


    getEntryByID(req, res, modelObj)

    {


        modelObj
            .findOne({ "_id": req.query._id })
            .then(result => {
                if (result == null)
                    return res.status(201).json({ "err": "id not found" });
                else if (result == [])
                    return res.status(201).json({ "err": "No such ID found" });
                else
                    return res.status(201).json(result);


            }).catch(err => {
                console.log(err)
                res.status(500).json({
                    error: "Incorrect ID format",
                    "dump": err
                })

            })
    },

    deleteEntryByID(req, res, modelObj)

    {

        modelObj
            .deleteOne({ "_id": req.body._id })
            .then(result => {

                if (result.deletedCount == 1)
                    return res.status(201).json({ "DeleteStatus": true });
                else
                    return res.status(403).json({ "DeleteStatus": false, "err": "id not found" });


            }).catch(err => {
                res.status(500).json({
                    error: "Incorrect ID format",
                    dump: err
                })

            })

    },

    updateEntryByID(req, res, modelObj) {

        console.log(req.body)

        modelObj
            .findOneAndUpdate({ "_id": req.body._id }, { $set: req.body })
            .then(result => {

                console.log(result)
                if (result == null)
                    return res.status(403).json({ "UpdateStatus": false, "err": "id not found" });
                else
                    return res.status(201).json({ "UpdateStatus": true });


            }).catch(err => {
                res.status(500).json({
                    error: "Incorrect ID format",
                    dump: err
                })
            })

    },

    getAllEntriesv2(req, res, modelObj)

    {

        modelObj
            .find({ "item_availability": "True" })
            .then(result => {

                return res.status(201).json(result);


            }).catch(err => {
                console.log(err)
                res.status(500).json({
                    error: err
                })

            })
    },

}
