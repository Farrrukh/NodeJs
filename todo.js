const fs =require("fs");

const todoTask=(title,desciption)=>{
const data=loadData();

const chkDuplicate=isDuplicatte(title,data);
if(chkDuplicate){
    console.log("Task is already in database");

}
else{
    const newTask={
        title,
        desciption
    }

    const tempData=[...data,newTask]
    saveDataBase(tempData,title)
}

}
const removeTodo=(title,desciption)=>{
    const data = loadData();

    const removeArrays= isArrayRemove(title,data);
    data.length<removeArrays?console.log("No todo found"):console.log('Todo remove');

    saveDataBase(removeArrays);


}

const isArrayRemove=(title,data)=>{
return data.filter(R=>R.title===title);
}
const saveDataBase=(loadData,title)=>{

    const JsonData=JSON.stringify(loadData);

    fs.writeFileSync("data.json",JsonData);
    
    console.log('Todo Task with title ${ title } added into database ');

}

const isDuplicatte=(title,data)=>{
const dataFound= data.filter(d=>d.title===title);
return (dataFound.length==0)?false:true;
}
const loadData=()=>{
    try {
        const rawData=fs.readFileSync("data.json");
        const result =JSON.parse(rawData);
        return result;
    } catch (error) {
        return []
    }
}
module.exports={todoTask,removeTodo}

