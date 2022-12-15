import React, { useState } from "react"; // incovar hook useState el cual cambia su estado
const FormTodo = props => { // constante con el mismo nombre de Componente FormTodo
const { handleAddItem } = props; //(C-1)
const [description, setDescription] = useState(""); // (F-1) //las propiedades son iguales a su estado en donde se guardan
const handleSubmit = e => { // const de hadleSubmit escucha el evento 
e.preventDefault(); // (E) // evento para la ejecucion con el enter, boton 
// (C-2)
handleAddItem({
done: false,
id: (+new Date()).toString(), // id contiene fecha y el string asignado
description
});
setDescription(""); // (B) // actualiza el estado 
};
return (
<form onSubmit={handleSubmit}>
{/*(D)*/}
<div className="todo-list">
<div className="file-input">
{/*(F-2)*/}
<input  //input con valores
type="text"
className="text"
value={description}
onChange={e => setDescription(e.target.value)} // setea el valor a 0 
/>
{/*(A)*/}
<button
className="button pink"
disabled={description ? "" : "disabled"}// Boton condicion, Desabilitado  si no encuentra description
>
Add
</button>
</div>
</div>
</form>
);
};
export default FormTodo;