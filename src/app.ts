import "reflect-metadata"
import express from "express";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

const app = express();
app.use(express.json());

app.get("/", async (req, res)=>{
    const userRepo = AppDataSource.getRepository(User);

    //inserting values
    const user : User = new User();
    user.email = "aniket@gmail.com";
    user.firstName = "Aniket";
    user.lastName = "Sharma";
    await userRepo.save(user);
    
    // finding all the records
    const allRecords = await userRepo.find();

    res.send({
        message : "Hello from server !!",
        data : allRecords
    })
})

AppDataSource.initialize().then(()=>{
    console.log("Database connection done !!")
    app.listen(3001, ()=>{
        console.log(`Server up and running on 3001`);
    })
}).catch((err)=>{
    console.log(`Error Connecting to Postgres Database - ${err}`)
})


