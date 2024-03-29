const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "student"
});


db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});


app.get('/reject', (req, res) => {
    db.query('SELECT * FROM faculty where status="rejected"', (err, result) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(result);
    });
});
app.get('/accepted', (req, res) => {
    db.query('SELECT * FROM faculty where status="approved"', (err, result) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(result);
    });
});
app.get('/hpending', (req, res) => {
    db.query('SELECT * FROM faculty where status="pending" and role="faculty"', (err, result) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(result);
    });
});

app.get('/details', (req, res) => {
    
    db.query("SELECT * FROM details WHERE role='principal'", (err, result) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
       
        if (result.length === 0) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
       
        console.log('User data:', result[0]);
        
        res.json(result);
    });
});


app.post('/insert', (req, res) => {
    const leaveRequest = req.body;
  
  
    const sql = 'INSERT INTO faculty (id, name, role, fromd, tod, reason, workadjustment, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [
      leaveRequest.id,
      leaveRequest.name,
      leaveRequest.role,
      leaveRequest.fromDate,
      leaveRequest.toDate,
      leaveRequest.reason,
      leaveRequest.workAdjustment,
      leaveRequest.status
    ];
  
    connection.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error inserting leave request:', err);
        res.status(500).send('Error inserting leave request');
        return;
      }
      console.log('Leave request inserted successfully');
      res.status(200).send('Leave request inserted successfully');
    });
  });
  
app.post('/login', (req, res) => {
    const { email, password, role } = req.body;
    const sql = "SELECT * FROM details WHERE email = ? AND password = ? AND role = ?";
    
    db.query(sql, [email, password, role], (err, data) => {
        if(err) return res.status(500).json({ success: false, error: "An error occurred while processing the request" });
        if(data.length > 0) {
            return res.json({ success: true, data: data });
        } else {
            return res.status(401).json({ success: false, error: "Invalid credentials" });
        }
    });
});
app.post('/updateUser', (req, res) => {
    const { id, name, designation, email, phno } = req.body;

   
    const sql = "UPDATE details SET name = ?, designation = ?, email = ?, phno = ? WHERE id = ?";
    db.query(sql, [name, designation, email, phno, id], (err, result) => {
        if (err) {
            console.error("Error updating user details:", err);
            return res.status(500).json({ error: "An error occurred while updating user details" });
        }
        console.log("User details updated successfully");
        return res.json({ success: true });
    });
});

app.get('/hreject', (req, res) => {
    db.query('SELECT * FROM faculty where status="rejected" and role="faculty"', (err, result) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(result);
    });
});

const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.post('/updateLeave', (req, res) => {
    const { id, status, date } = req.body;

    
    const sql = "UPDATE faculty SET status = ?, acceptdate = ? WHERE id = ?";
    db.query(sql, [status, date, id], (err, result) => {
        if (err) {
            console.error("Error updating user details:", err);
            return res.status(500).json({ error: "An error occurred while updating user details" });
        }
        console.log("User details updated successfully");
        return res.json({ success: true });
    });
});
