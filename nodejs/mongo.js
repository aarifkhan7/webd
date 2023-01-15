const mongoClient = require("mongodb").MongoClient;

const myclient = new mongoClient("mongodb://127.0.0.1:27017/");
myclient.connect().then(()=>{
const db = myclient.db("chatserver");
const users = db.collection("users");

const query = {username: "aarif", password: "khan"};
users.findOne(query).then((obj)=>console.log(obj));
});