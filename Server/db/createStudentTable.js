const {pool} = require('./pool')


const createStudentTable = ()=>{
try{
    pool.query('CREATE TABLE IF NOT EXISTS studentsData (Tier_id VARCHAR(50), completed_gen_ai INT, created_at TIMESTAMP, dateofCompletion DATE, eligible_for_certificate INT, email VARCHAR(255), name VARCHAR(255), pathwaycompleted INT, rank INT, size VARCHAR(13),sized_entered INT, uid VARCHAR(50), updated_at TIMESTAMP  DEFAULT CURRENT_TIMESTAMP)',(error,result)=>{
        if (error) throw error

    })
    console.log(21)
}catch(err){
    console.error(err)
}
}

module.exports={createStudentTable}