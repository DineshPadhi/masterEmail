const {MongoClient} = require('mongodb');
const {configureDetails} = require('./config/Config')
const url = configureDetails.mongodb


const client = new MongoClient(url)

 async function main(){
     client.connect();
    console.log("database Connected")

    const db = client.db('productDB')
    let collection = db.collection('products')
    //return  db.collection('products')
    //  await collection.insertOne({name:"pranay"}).then((res)=>{
    //     console.log(res)
    // });
    let data = await collection.find({}).toArray();
    console.log(data);
  



    // var today = moment(new Date()).format('2014-04-20T11:37:23.000+00:00');
    // var tommorrow = moment(new Date()).format('2016-07-01T02:32:46.000+00:00');
    // let m = today.toString();
    // console.log(today)
    // console.log(collection)

    // let m = new Date(today)
    // let m1 = new Date(tommorrow)

    // let result  = await collection.aggregate([{$group:{_id:{age:"$age", gender:"$gender"}}}]).toArray();
    // let result1 = await collection.aggregate([{$match:{ name: 'Whitney Conner'}}]).toArray();
    // let result2 = await collection.aggregate([{$group:{_id:"$name",total:{$sum:"$age"}}}]).toArray();
    // let result3 = await collection.aggregate([{$match:{registered:{$gte:m,$lt:m1 }}}]).toArray();

    // let result4 = await collection.find({registered:new Date(today)}).toArray();
    // console.log(result);
    // console.log(result1);
    // console.log(result2);
    // console.log(result3);
    // console.log(result4);


}
// main().then((res)=>{
//     res.aggregate([{$group:{_id:{age:"$age", gender:"$gender"}}}]).toArray().then((data)=>{
//         console.log(data)
//     })
// })
main()
