//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
  if (err){
    return console.log('Erro ao se conectar com o Banco de dados');
  };

  const db = client.db('TodoApp');

  // db.collection('Users').find({
  //   _id: new ObjectID('5be507ffdce810011847c052')
  // }).toArray().then((docs) => {
  //   console.log(docs);
  // }, (err) => {
  //   console.log('erro: ', err);
  // });

  db.collection('Users').find().filter({age: 25}).then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('erro: ', err);
  });


});
