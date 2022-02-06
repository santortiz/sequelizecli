const express = require('express');
const {sequelize, User} = require('./models');

const app= express();
app.use(express.json())

app.listen(5000, ()=>{
    console.log("api running!");
})

app.post('/users', async (req, res) => {
    const { name, email, role } = req.body
  
    try {
      const user = await User.create({ name, email, role })
  
      return res.json(user)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  })


async function main(){
    await sequelize.sync();
};

main();