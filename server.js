const mongodb = require("mongodb")
const { MONGO_URI } = require("./config")
const newSet = [
    { name: "Attack on Titan", year:"2013" },
    { name: "Demon Slayer", year:"2019" },
    { name: "Hell's paradise", year:"2023" }
  ];

mongodb.MongoClient.connect(MONGO_URI, {})
.then(client => {
    console.log("--connection established--", client.db("test").databaseName)
    db = client.db("test")

    // return db.collections()

})
.then(collections => {
    console.log("\n--existing collections--", collections)
   return db.collection("Anime").insertMany(newSet)
    // return db.collection("Anime").insertOne({name: "Tokyo Ghoul", year:"2011"})
})

.then(insertResponse => {
    console.log("--",insertResponse)
    return db.collection("Anime").find({year :{$gt: 2020}}).toArray()

})
.then(collections => {
    // console.log("\n--undefined?", collections)
})

.then(findAllResponse => {
    console.log("\n---", findAllResponse)
    return db.collection("Anime").findOneAndUpdate({name: "Demon Slayer"},{$set: {name : "Jujutsu Kaisen"}} )
})
.then(findResponse => {
    console.log("\n ----", findResponse)
})
.catch(error => {
    console.log("--connection failed--", error)
})