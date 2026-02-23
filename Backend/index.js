const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const port = 8000;

app.use(bodyParser.json());

let users = []
let counter = 1;
let conn = null
const initMySQL = () => {
    conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8820
    });
}

app.get('/testdb', (req, res) => {
    mysql.createConnection({
        host: 'localhost',
        user: 'root',       
        password: 'root',
        database: 'webdb',
        port: 8820
    }).then((conn) => {
        conn.query('SELECT * FROM users')
        .then((results) => {
            res.json(results[0]);
        })
        .catch((err) => {
            console.error('Database query error:', err.message);
            res.status(500).json({ error: 'Database query error' });
        });
    });
}); 
app.get('/testdb-new',async (req, res) => {
    try{
       
     const results = await conn.query('SELECT * FROM users');
     res.json(results[0]);
    }catch(error) {
        console.error('Database query error:', error.message);
        res.status(500).json({ error: 'Database query error' });
    }
});


/**
 GET /users สำหรับ get ข้อมูลผู้ใช้ทั้งหมด
 POST /user สำหรับเพิ่มผู้ใช้ใหม่
 GET /user/:id สำหรับ get ข้อมูลผู้ใช้ที่มี id
 PUT /user/:id สำหรับแก้ไขข้อมูลผู้ใช้ที่มี id
 DELETE /user
 */

//path = /users (ชื่อ path อะไรก็ได้ที่เราต้องการ)
app.get('/users', async (req, res) => {
    const results = await conn.query('SELECT * FROM users');
    res.json(results[0]);
    });
    


//path = POST /user
app.post('/user', async (req, res) => {
    try {
         let user = req.body;
    const result = await conn.query('INSERT INTO users SET ?', user)
    res.json({
        message: 'User created successfully',
        data: result[0]
    
    })
 } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json ({
        message: 'Error creating user',
        error: error.message
    });
 }
});



//path = GET /user/:id สำหรับ get ข้อมูลผู้ใช้ที่มี id ตรงกับ id ที่ส่งมา
app.get('/user/:id', async (req, res) => {
    try {
        let id = req.params.id
   const results = await conn.query('SELECT * FROM users WHERE id = ?', [id])
   res.json(results[0][0]);
    }
        catch (error) {
            console.error('Error fetching user:', error.message);
            let statusCode = error.statusCode || 500;
             res.status(statusCode).json ({
                message: 'Error fetching user',
                error: error.message
            });

        }

})

// PUT = /users/:id สำหรับแก้ไขข้อมูลผู้ใช้ที่มี id ตรงกับ id ที่ส่งมา
app.patch('/user/:id', async (req, res) => {
     try {
        let id = req.params.id
        let updateusers = req.body;
   const results = await conn.query('UPDATE users SET ? WHERE id = ?', [updateusers,id])
   if (results[0].affectedRows === 0) {
    throw { statusCode: 404, message: 'User not found' };
    }
   res.json({
    message: 'User updated successfully',
    data: updateusers

   });

   
   
    }
        catch (error) {
            console.error('Error fetching user:', error.message);
            let statusCode = error.statusCode || 500;
             res.status(statusCode).json ({
                message: 'Error fetching user',
                error: error.message
            });

        }

})


    

//DELETE = /user/:id สำหรับลบข้อมูลผู้ใช้ที่มี id ตรงกับ id ที่ส่งมา
app.delete('/user/:id', async (req, res) => {
    try {
        let id = req.params.id
        const results = await conn.query('DELETE FROM users WHERE id = ?', [id])
        if (results[0].affectedRows === 0) {
            throw { statusCode: 404, message: 'User not found' };
        }
        res.json({
            message: 'User deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting user:', error.message);
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: 'Error deleting user',
            error: error.message
        });
    }
});
    