const express = require('express');
const path = require('path');
const app = express();
const db = require('./db');
const { sync, seed, models } = db;

app.use(require('body-parser').json());
app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/api/users', (req, res, next)=> {
  models.User.findAll()
  .then(users => res.send(users))
  .catch(next);
});

app.delete('/api/users/:id', (req, res, next)=>{
  models.User.findById(req.params.id)
  .then( user => {
    return user.destroy();
  })
  .then(()=> res.sendStatus(204))
  .catch(next);
});

app.post('/api/users', (req, res, next)=> {
  models.User.create(req.body)
  .then( users => res.send(users))
  .catch(next);
});

const port = process.env.PORT || 3000;

app.listen(port,()=> console.log(`Listening on port ${port}!!!`));

sync()
.then(()=>seed());
