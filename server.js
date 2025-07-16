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

app.listen(PORT,()=>{
    console.log(`🚀 Server running at http://localhost:${PORT}`)
})