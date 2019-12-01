const express = require('express');
const app = express();
const port = 4000;
const path = require('path'); //this gets the current directory 
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const mongodb = "mongodb+srv://fred:fred@cluster0-9zu60.mongodb.net/MERN-ProjectDB?retryWrites=true&w=majority";
mongoose.connect(mongodb, { useNewUrlParser: true });

const cors = require('cors'); app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    Title: String,
    Credits: Number,
    SubjectGrade: Number,
    Assessments: []
})

const SubjectModel = mongoose.model("subject", subjectSchema);

app.listen(port, () => console.log(`myGrades app listening on port ${port}`));

// create
app.post('/api/subjects', (req, res) => {
    SubjectModel.create({
        Title: req.body.title,
        Credits: req.body.credits
    });
})

// read
app.get("/api/subjects", (req, res) => {
    SubjectModel.find((error, data) => {
        res.json({ subjects: data });
    })
})

app.get("/api/subjects/:id", (req, res) => {
    SubjectModel.findById(req.params.id, (error, data) => {
        if (error) {
            res.json(error);
        }
        else {
            res.json(data);
        }
    })
})

// update
app.patch('/api/subjects/:id', (req, res) => {
    SubjectModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, data) => {
        if (error) {
            res.json(error);
        }
        else {
            res.json(data);
        }
    })
})

// delete
app.delete("/api/subjects/:id", (req, res) => {
    console.log(req.params.id);
    SubjectModel.deleteOne({ _id: req.params.id }, (error, data) => {
        if (error) {
            res.json(error);
        }
        else {
            res.json(data);
        }
    })
})





