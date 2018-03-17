const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_users_redux');

const User = conn.define('user',{
  name: Sequelize.STRING
})

const sync = ()=>{ force: true };

const seed = ()=> {
  Promise.all([
    User.create({ name: moe}),
    User.create({ name: moe2}),
    User.create({ name: moe3})
  ])
};

module.exports ={
  sync,
  seed,
  models: {
    User
  }
};
