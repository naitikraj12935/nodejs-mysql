import mysql from "mysql2";
import express from "express";
import con from "../index.js";

const addemployee=async(req,res,next)=>{
    const {emp_name, emp_role, emp_dept, salary, join_date}=req.body;
    const query='insert into employee(emp_name, emp_role, emp_dept, salary, join_date) values(?,?,?,?,?)';
    con.query(query,[emp_name, emp_role, emp_dept, salary, join_date],(err,result)=>{
         if(err)
         {
            res.status(500).json({message:err});
            return ;
         }

         res.status(201).json({message:"employee added successfully"});


    })
}

const addmultipleemployee=async(req,res,next)=>{
    const employees = req.body; // Expecting an array of employee objects

    // Validate that we have an array of employee objects
    if (!Array.isArray(employees) || employees.length === 0) {
        return res.status(400).json({ message: "Invalid input format. Expecting an array of employee objects." });
    }

    // Map the employees array to a format that MySQL can use
    const values = employees.map(emp => [
        emp.emp_name,
        emp.emp_role,
        emp.emp_dept,
        emp.salary,
        emp.join_date
    ]);
    const query='insert into employee(emp_name, emp_role, emp_dept, salary, join_date) values ?';
    con.query(query,[values],(err,result)=>{
        if(err)
        {
            res.status(500).json({
                message:err
            })
        }

        res.status(201).json({
            message:"employees added succesfully"
        })
    })
}

export {addemployee,addmultipleemployee};