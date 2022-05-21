import bcrypt from 'bcryptjs'

const users=[
{
    name:"admin",
    email:"admin@gmail.com",
    password: bcrypt.hashSync("admin@gmail.com",10)

},
{
    name:"harsh",
    email:"harsh@gmail.com",
    password: bcrypt.hashSync("harsh@gmail.com",10),
},
{
    name:"mohit",
    email:"mohit@gmail.com",
    password: bcrypt.hashSync("mohit@gmail.com",10),
}



]

export default users