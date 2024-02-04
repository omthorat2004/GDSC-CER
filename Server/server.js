const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(cors())

const {createStudentTable} = require('./db/createStudentTable')
const { pool } = require('./db/pool')
createStudentTable()

app.get('/:email',(req,res)=>{
    console.log("Hello")
    const {email} =req.params
    try{
        pool.query('SELECT * FROM studentsData WHERE email=?',[email],(err,result)=>{
            res.json({students:result})
        })

    }catch(err){
        console.error(err)
    }
})

// app.post('/', (req, res) => {
//     const students = req.body;

//     for (let i = 0; i < students.length; i++) {
//         const student = students[i];
        
//         pool.query(
//             'INSERT INTO studentsData VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
//             [
//                 student.Tier_id,
//                 student.completed_gen_ai,
//                 student.created_at,
//                 student.dateofCompletion,
//                 student.eligible_for_certificate,
//                 student.email,
//                 student.name,
//                 student.pathwaycompleted,
//                 student.rank,
//                 student.size,
//                 student.sized_entered,
//                 student.uid,
//                 student.updated_at,
//             ],
//             (error, results, fields) => {
//                 if (error) {
//                     console.error(error);
//                     return res.status(500).send('Internal Server Error');
//                 }
//             }
//         );
//     }

//     res.send('Data inserted successfully!');
// });


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
