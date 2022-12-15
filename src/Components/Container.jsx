import React, { useState } from "react"; // Se importa el useState 
import TaskList from "./TaskList"; // Se importan a los Componentes 
import FormTodo from "./FormTodo";
const Container = () => { // Constante con el mismo nombre de Componente Container
const [list, setList] = useState([]); // (B-1) // lista de tareas vacia
// (A-2)
const handleAddItem = addItem => {
setList([...list, addItem]); // (B-2)
};
return (                          //Se invocan los Componentes y sus metodos
<div>
{/*(A-1)*/}
<FormTodo handleAddItem={handleAddItem} />
{/*(C)*/}
<TaskList list={list} setList={setList} />
</div>
);
};
export default Container;