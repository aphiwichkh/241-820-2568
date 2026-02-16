const bodyParser = require('body-parser');
const express = require('express');
const { use } = require('react');
const app = express();
const port = 8000;
app.use(bodyParser.json());
let users = []
let counter = 1;
//path = /user
app.get('/users', (req, res) => {
    res.json(users);
    });

//path = POST / user 
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter++;
    users.push(user);
    res.json({ message: 'User added successfully', user: user });
});
//path = PUT /user/:id
app.patch('/user/:id', (req, res) => {
    let id = req.params.id;
    // หา users จาก id
    let selectedIndex = users.findIndex(user => user => {
        if (user.id == id) {
            return true
        } else {
            return false
        }
    })
    
    //update users นั้น
    if (updateUser)
    users[selectedIndex].name = updateUser.name || users[selectedIndex].name
    users[selectedIndex].age = updateUser.age  || users[selectedIndex].age 

    //ส่ง response กลับไปว่า update สำเร็จห
    res.json({ message: 'User updated successfully', 
        data: {
            user : updateUser,
            indexUpdated : selectedIndex
        }
    })
})
app.delete ('/user/:id', (req, res) => {
    let id = req.params.id;
    let selectedIndex = users.findIndex(user => user => user.id == id)
    if (selectedIndex != -1)  {
        users.splice(selectedIndex, 1)
        res.json({ 
            message: 'User deleted successfully',
            data: {
                indexDeleted : selectedIndex
            }
        })
    } else {
        res.status(404).json({ 
            message: 'User not found' 
        })
    }
})  
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 