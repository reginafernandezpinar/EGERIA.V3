
export const changeAction = payload => ({ payload, type: 'CHANGE_TEXT' });



/* 
Se declara inicializa y exporta una const que es una funcion: la accion -- La que importaremos en nuestro componente.
Esta func recibe el param payload (ninguno o cqiera q me venga del componente) y retorna un objeto (equivale a 'action' en el reducer) 
con dos keys: ese valor q se ha pasado payload:payload y el type.

const AccionCambiarTexto = {
   payload: '<El contenido que queremos cambiar>',
   type: 'CHANGE_TEXT',
};

*/
