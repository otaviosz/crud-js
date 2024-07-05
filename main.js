'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')


const tempClient = {
    nome: "frank",
    email: "frankdias@gmail.com",
    celular: "16991558344",
    cidade: "Passos"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [];
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient));

// Crud - Cread Read Update Delete


const createClient = (client) => {
    const dbClient = getLocalStorage();
    dbClient.push(client)
    setLocalStorage(dbClient)
}

// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)