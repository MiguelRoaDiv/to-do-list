import React from "react";
import Checkbox from "./Checkbox"; // 

const TaskList = props => { // constante con el mismo nombre de Componente TaskList
// (C)
const { list, setList } = props; // Traer las propiedades a list
const onChangeStatus = e => { // funcion status es igual a evento con nombre y check
const { name, checked } = e.target; // valida el cambio de check
// (E)
const updateList = list.map(item => ({ // actualiza list, metodo map recorre list
...item,
done: item.id === name ? checked : item.done
}));
setList(updateList);
};
// (D)
const onClickRemoveItem = e => {
const updateList = list.filter(item => !item.done); // filtrar los items diferentes a hecho
setList(updateList); // recargar la lista, actualiza 
};
// (A-2)
const chk = list.map(item => ( 
<Checkbox key={item.id} data={item} onChange={onChangeStatus} /> //check solo el id y la data del item y cambia el status
));
return (                             // en la longitud de list esta chk, si no esta chk entonces no tasks
<div className="todo-list"> 
{/*(A-1)*/}
{list.length ? chk : "No tasks"} 
{/*(B)*/}
{list.length ? (
<p>
<button className="button blue" onClick={onClickRemoveItem}>
Delete all done
</button>
</p>
) : null}
</div>
);
};
export default TaskList;
