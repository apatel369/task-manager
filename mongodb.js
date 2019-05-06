//CRUD

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Bhagwadi',
    //     age: 55
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     } 
        
    //     console.log(result.ops)
    // })

//     db.collection('users').insertMany([
//     {
//         name: 'Swamiji',
//         age: 84
//     }, {
//         name: 'ProbodhSwamiji',
//         age: 65
//     }
// ], (error, result) => {
//         if(error) {
//             return console.log('Unable to insert documents')
//         } 
        
//         console.log(result.ops)
//     })

    // db.collection('tasks').insertMany([
    // {
    //     description: 'Swamiji',
    //     completed: true
    // }, {
    //     description: 'ProbodhSwamiji',
    //     completed: false
    // }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert documents')
    //     } 
        
    //     console.log(result.ops)
    // })

    // db.collection('users').findOne({ _id: new ObjectID("5ccf8da5408bbf1aa4d8ed58")}, (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("5ccf8fb80e9924059cf6b427") }, (error, tasks) => {
    //     console.log(tasks)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5ccf8c2aad33d73c8c82eec2")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('users').deleteMany({
        age: 27
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})