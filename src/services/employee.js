
import {ValidateEmail} from '../lib/email-validation';

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
export const AddEmployee=(req,res,db)=>{
    try{
    const {body:{name,email,position}}=req;
 
    if(!ValidateEmail(email)) return res.status(400).json({message:'Please enter a valid email'});

    db.run(`INSERT INTO Employee(name,email,position) VALUES(?,?,?)`, [name,email,position], (err)=> {
            if (err) {
              return res.status(400).json(err);
            }
       return res.status(200).json({message:'Employee created successfully'});
          });
          return db;}catch(err){
              return res.status(400).json({message:err.message});
          }
}

export const GetEmployee=(req,res,db)=>{
    try{
const {query:{email}}=req;

if(!ValidateEmail(email)) return res.status(400).json({message:'Please enter a valid email'});

db.get('SELECT name,email,position FROM Employee where email=?',[email],(err,row)=>{
    if(err) return res.status(400).json(err);
    return res.status(200).json(row);
})
    }catch(err){
        return res.status(400).json({message:err.message});
    }
}

export const DeleteEmployee=(req,res,db)=>{
    try{
    const {params:{email}}=req;

    if(!ValidateEmail(email)) return res.status(400).json({message:'Please enter a valid email'});

    db.run('DELETE FROM Employee where email=?',[email],(err)=>{
        if(err) return res.status(400).json(err);
        return res.status(200).json({message:'deleted successfully'});
    })}catch(err){
        return res.status(400).json({message:err.message});
    }
}