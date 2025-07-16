import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import tasks from './taskData.js';

const app = express();
const PORT = 3000;

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

app.use(express.static(path.join(_dirname,'public')));

app.get('/tasks',(req,res)=>{
    const filtered = tasks
    .filter(task=>task.priority==='high' && !task.completed)
    .map(task=>({
        ...task,
        title: task.title.toUpperCase(),
    }));
    res.json(filtered);
});



function logTasksWithDelay(tasks,callback){
    tasks.forEach((task,index)=>{
        setTimeout(()=>{

            console.log(`task: ${task.title}-[${task.priority}]`);
            if(index=== tasks.length-1){
                callback();
            }

        },index*1000);
    });
}



app.get("/log-tasks",async(req,res)=>{
    const filtered=tasks.filter(task=>task.priority==='high' && !task.completed)
    .map(task=>({
        ...task,
        title:task.title.toUpperCase(),
    }));
    logTasksWithDelay(filtered,()=>{
        console.log("✅ Logging complete!")
    });
    res.send("⏳ Logging started on server console… Check terminal.")
})








app.listen(PORT,()=>{
    console.log(`🚀 Server running at http://localhost:${PORT}`)
})
