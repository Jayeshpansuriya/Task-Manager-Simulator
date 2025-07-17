const myPromise = new Promise((resolve,reject)=>{
    let success = true;
    if(success){
        resolve("kaam ho gaya!");
    }else{
        reject("kaam bigad gaya!");
    }
});

myPromise
.then((result)=>{
    console.log("Success:" + result);
})
.catch((error)=>{
    console.log("Error:" +error);
})

function loadData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("data load ho gaya bhai ");
        },2000)
    });
}

loadData()
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log("Error:"+ err);
})

import {readFile} from 'fs/promises';
const data = await readFile('README.md','utf-8');
console.log(data);

import { add } from './server.js';
console.log(add(5,3));

import http from 'http';

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"});
    res.end("Hello from Node.js Server!");
});

server.listen(3000,()=>{
    console.log("Server running on port 3000");
});


import express from 'express';
import { rejects } from 'assert';
const app = express();

app.get('/',(req,res)=>{
    res.send("hello Daku!");
});

app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000");
});


app.use(express.json());
app.use(express.static("public"));


function getData(){
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            resolve("Data loaded")
        },1000);
    });
}

async function main(){
    const data = await getData();
    console.log(data);
}

main();

setTimeout(()=>{
    console.log("task 1");
    setTimeout(()=>{
        console.log("Task 2");
    },1000);
},1000);


import fetch from 'node-fetch';
const res =await fetch("https://jasonplaceholder.typicode.com/todos/1");
const data1 = await res.json();
console.log(data1);


import { writeFile } from 'fs/promises';
import { toNamespacedPath } from 'path';
const users =[{name:"jayesh",task:"Coding"}];
await writeFile('users.json',JSON.stringify(users,null,2));


const myPromise1 = new Promise((resolve,reject)=>{
    let success =true;
    if(success){
        resolve("kaam ho gaya!");
    }else{
        reject("kaam bigad gaya!");
    }
});

myPromise1
.then((result)=>{
    console.log("success:"+ result);

})
.catch((error)=>{
    console.log("Error: "+ error);
});

function loadData(){
    return new promises((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data load ho gaya bhia");

        },1000);
    })
}

loadData()
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log("error: "+ err)
});

let name = [];
name.push("ravi");
name.push("sneha");
name[2]="amit";
name[3]="kajal";
name[4]="mOna";

console.log(name[2]);
names[0]="jay";
console.log(names);


let fruits =["apples","banana","mango"];
fruits.push("graps");
fruits.splice(1,1,"kiwi");
console.log(fruites.join("|"));
fruits.flat()
fruits.concat(arr2)
arrayBuffer.splice(2,1,"new");

arr.forEach(x=> console.log(x));
arr.map(x=>x*2);
arr.filter(x=>x>10)
arr.find(x=>x>10)
arr.findIndex(x=>x>10);
arr.some(x=>x>5)
arr.every(x=>x>8)

