
const yargs=require('yargs');
const {todoTask,removeTodo}=require('./todo');



yargs.command({
    command:'add',
    describe:'This command is used to add a todo task',
    builder:{
        title:{
            describe:'Todo task title to add',
            alias:'a',
            demandOption:true,
            type:'string'
        },
        description:{
            describe:'todo task description',
            alias:'d',
            demandOption:true,
            type:'string'
        },
    },
    handler:({title,description})=>{
        todoTask(title,description);
    }
})
yargs.command({
    command:'remove',
    describe:'remove a todo',
    builder:{
        title:{
            describe:"Todo Title",
            alias:'r',
            demandOption:true, 
            type:'string'      
        }
    },
    handler: ({title})=>{
        removeTodo(title);

    }
})
yargs.parse();