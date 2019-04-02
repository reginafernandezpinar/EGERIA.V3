import { initialRootState } from './root.state';

export function rootReducer(state = initialRootState, action) { //recibe el estado global por defecto, y un param llamado action: el objeto q devuelve la accion en root.action. 
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        ...state, // aqui se modifica el estado, '...' me destructura el array, como si lo escribiera complet, para q solo me sobrescriba la propiedad text (en este caso)
        text: action.payload, // me coge la clave texto y le paso el valor action.payload, q me viene del componente
      };
    default:
      return state;
  }
}
// desestrecturamos para q no nos borre nada. En el case delete: solo me borraria la prop text, name queda intacta.
