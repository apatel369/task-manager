//CRUD

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Andrew',
    //     age: 27
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

    db.collection('tasks').insertMany([
    {
        description: 'Swamiji',
        completed: true
    }, {
        description: 'ProbodhSwamiji',
        completed: false
    }
    ], (error, result) => {
        if(error) {
            return console.log('Unable to insert documents')
        } 
        
        console.log(result.ops)
    })
})