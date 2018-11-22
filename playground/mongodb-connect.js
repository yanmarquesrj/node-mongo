//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

console.log(new ObjectID);

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
  if (err){
    return console.log('Erro ao se conectar com o Banco de dados');
  }
  console.log('Conectado com o banco de dados');

  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Alguma coisa aqui',
  //   completed: false
  // }, (err, result) => {
  //   if (err){
  //     return console.log('Erro ao inserir dados', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Yanzada',
    age: 25,
    location: 'Rua Teodoro Burlamaqui 10'
  }, (err, result) => {
    if (err) return console.log(err);

    //console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    console.log(JSON.stringify(result.ops[0]._id, undefined, 2));
  });

  client.close();
});
