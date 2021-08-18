const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');


const User = require('./models/User');

app.use(cors());
app.use(express.json());
const dbName = 'testEMPsys';
const url = `mongodb://localhost:27017/${dbName}`;


mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => console.log('mongoDB connected...'));;


app.get('/', (req, res) => {
    res.send('Hello World!')
})



app.post('/create', (req, res) => {
    const { name, age, position, wage } = req.body;

    if (name, age, position, wage) {
        const newUser = new User({
            name,
            age,
            position,
            wage
        });
        newUser.save();
        console.log(newUser);
    }


});

app.get('/employees', async (req, res) => {
    try {
        User.find().then((emp) => {
            res.send(emp)
        })
        User.close();
    } catch (error) {

    }
})


app.put('/update', async (req, res) => {
    const { id, wage, updateDate } = req.body;
    try {
        User.findOneAndUpdate({ _id: id }, { "$set": { wage: wage, updateDate: updateDate } }, { new: true }).then((err, result) => {
            res.send(result)
        })
    } catch (error) {
    }
    User.close();
})



app.delete('/delete/:id', async (req, res, next) => {
    try {
        User.findOneAndDelete
            ({ _id: new mongoose.Types.ObjectId(req.params.id) },
                (err, result) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log("Deleted");
                        console.log(result);
                    }
                })
    } catch (error) {

    }
    User.close();
})









app.listen('3003', () => {
    console.log("Server is running on port 5001");
})



