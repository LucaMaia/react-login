const express = require('express');
const routes = express.Router();
const users = [
    {
        id: 1,
        name: "Luca",
        email: "luca@hotmail.com",
        password: "1234",
    }
]

routes.post('/login', function (req,res){
    const {email,password} = req.body;
    const user = users.find(
        user => user.email === email
            &&
        user.password === password
    )

    console.log("usuaroio",user,password)

    if(user){
        return res.status(200).json(user);
    }else{
        return res.status(401).json({message: "Credenciais inválidas"});
    }
    res.send(email);
})

module.exports = routes;
