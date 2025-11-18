import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import { Profile } from "./entity/Profile";

const app = express();
app.use(express.json());

app.get("/", async (req, res)=>{
    const userRepo = AppDataSource.getRepository(User);

    //-------------------------inserting values-----------------------------
    // const user : User = new User();
    // user.email = "lavakush@gmail.com";
    // user.firstName = "Luv";
    // user.lastName = "Sharma";
    // await userRepo.save(user);
    
    // -----------------------finding all the records-------------------------
    // const allRecords = await userRepo.find();
    const allRecords = await userRepo.find({relations : {profile : true}}) // this is done to include profile in response from db

    // ------------------------updating record------------------------------
    // await userRepo.update(2, {lastName : "Kush Gaur"});
    
    // ---------------------------filtering record-------------------------
    // const temp = await userRepo.findOne({where : {lastName : "Kush Gaur"}})

    // ----------------------- Deleting record ---------------------
    // await userRepo.delete(1);

    res.send({
        message : "Hello from server !!",
        // temp,
        data : allRecords
    })
})

app.get("/oneToOne",async (req, res)=>{
    const userRepo = AppDataSource.getRepository(User);
    const profileRepo = AppDataSource.getRepository(Profile);

    // -------------------- One to One Relationship, Data insertion without Cascade -----------------------------

    // const profile : Profile = new Profile();
    // profile.gender = "male";
    // const savedProfile = await profileRepo.save(profile);

    // const newUser : User = new User();
    // newUser.firstName = "Shashank";
    // newUser.lastName = "Sharma";
    // newUser.email = "sharma@gmail.com";
    // newUser.profile = savedProfile;
    // const savedUser = await userRepo.save(newUser);

    // Note : In this, for saving one user-record, we are hitting the db two times, to avoid this, we can use cascade.  

    // -------------------- One to One Relationship, Data insertion With Cascade -----------------------------

    // const profile : Profile = new Profile();
    // profile.gender = "male";

    // const newUser : User = new User();
    // newUser.firstName = "Narendra";
    // newUser.lastName = "Chauhan";
    // newUser.email = "ch069@gmail.com";
    // newUser.profile = profile;
    // const savedUser = await userRepo.save(newUser);

    // res.send({
    //     message : "New User Saved !!",
    //     data : savedUser
    // })

    // -------------------- One to One Relationship, Data Updation With Cascade --------------------------------

    // const userFound = await userRepo.findOne({where : {id : 3}, relations : {profile : true}});
        
    // if(userFound){
    //     userFound.lastName = "Changed Lastname";
    //     userFound.profile.gender = "female";
    //     const updatedUser = await userRepo.save(userFound);
    //     return res.send({
    //         message : "User details updated !!",
    //         data : updatedUser
    //     });
    // }

    // res.status(404).send({
    //         message : "User does not exists with this ID."
    // });

    // --------------------- Delete --------------------------------------------------
    // await profileRepo.delete(2); // this will throw FOREIGN KEY VIOLATION ERROR

    // after adding onDelete : "CASCADE"
    // await profileRepo.delete(1);
    // res.send({
    //     message : "Profile Deleted !!"
    // })


    res.send({
        message : "Hello from server !!",
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


