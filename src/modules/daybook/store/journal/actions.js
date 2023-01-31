//? TEMPLATE - store/actions.js
//* Recordar: acciones pueden ser asíncronas que van a llamar a una mutación

//export const myAction = async ({ commit }) => {}

// - cuando no vamos a ocupar el commit se lo pone en un comentario de este tipo /**/ esto con el fin de evitar las quejas por parte del linter
// - pero recordemos que dentro de este vamos a tener acceso al context que se encuentra dentro del commit

export const loadEntries = async (/*{ commit }*/) => {}

export const updateEntry = async (/*{ commit }*/) => {}

export const createEntry = async (/*{ commit }*/) => {}
