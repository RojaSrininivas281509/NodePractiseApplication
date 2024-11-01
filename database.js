const {MongoClient}= require('mongodb');
const URI='mongodb+srv://vundavilliroja:nKo4828rUKDiI1ir@cluster0.wepat.mongodb.net/'
//'mongodb+srv://vundavilliroja:nKo4828rUKDiI1ir@cluster0.wepat.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
/*

mangodb
username:vundavilliroja
password:nKo4828rUKDiI1ir

connectionstring:
mongodb+srv://vundavilliroja:<db_password>@cluster0.wepat.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
*/
const client =new MongoClient(URI);
const dbName =  'HelloWorld';
async function main(){
    await client.connect();
    console.log("Connected Successfully to Server");
    const db= client.db(dbName);
    const collection = db.collection('Users');
    //find collection
    const findResult = await collection.find({}).toArray();
    console.log("Found documents=>", findResult);
    //insert record
    const data={
        firstName:"Ganapathi",
        lastName:"Kailash",
        city:"Kailashpuram",
        country:"World",
    }
    /*insert record*/
    const insertRecord = await collection.insertMany([data]);
    console.log("inserted documents=>", insertRecord);
     /*delete record*/
    // const deleteRecord = await collection.deleteOne({ data});
    // console.log("delete documents=>", deleteRecord);
    /*find all*/
    const findAllDocuments =await collection.find({firstName:'Srinivas'}).toArray()
    console.log("findAllDocuments documents=>", findAllDocuments);
    return "done.";
}
main().then(console.log)
.catch(console.error)
.finally(()=>client.close());