#!/usr/bin/env node
// We are going to create BMI Calculator (Body-Mass-Index).
import inquirer from "inquirer"

const Questions= [
    {type:'number', name: 'weight', message: 'weight:(kg):'},
    {type:'number', name: 'height', message: 'height:(m):'},
]

const calculateBMI=(weight:number, height:number):number=> weight/(height*height)
const main=async() => {
    const{weight, height}=await inquirer.prompt(Questions);
    console.log(`BMI:${calculateBMI(weight,height).toFixed(2)}`);
    
};

main()


