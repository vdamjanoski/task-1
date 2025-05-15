const port = 10000
const express = require("express")
const database = require("./database/database")
const courseController = require("./controller/courseController")
const academyController = require("./controller/academyController")
const testController = require("./controller/testController")


const app = express();
app.set(`view engine`,`ejs`)
app.use(express.urlencoded({extended: true}))
app.use(express.json())

database.connectDatabase();

app.get(`/courses`, courseController.getAll)
app.post(`/course`, courseController.createCourse)
app.delete(`/course/:id`, courseController.deleteCourse)
app.patch(`/course/:id`, courseController.updateCourse)

app.get(`/test`, testController.test)
app.get(`/welcome`, testController.getAll)

app.get(`/academies`, academyController.getAll)
app.post(`/academy`, academyController.createAcademy)
app.delete(`/academy/:id`, academyController.deleteAcademy)
app.patch(`/academy/:id`, academyController.updateAcademy)



app.listen(port, (err) => {
    if(err){
        console.log(err.message);
    }
    console.log("Server started successfully!");
})