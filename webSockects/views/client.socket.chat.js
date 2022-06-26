const socket = io();
const messageForm = document.querySelector('#chatForm');
const messageEmail = document.querySelector('#email');
const messageData = document.querySelector('#message');

const addMessage = (message) => {
    socket.emit('client:message', message);
}

const renderMessage = (messages) => {
    const html = messages.map((elem, index) => {
        return (`<div>
            <strong>Title: ${elem.email} </strong>
            <em>Price: ${elem.message} </em>
        </div>
        `)
    }).join(' ');
    document.getElementById('chatPool').innerHTML = html;
}

messageForm.addEventListener('submit', evt => {
    evt.preventDefault();
    const message = {email: messageEmail.value, message: messageData.value};
    addMessage(message);
})

socket.on('server:messages', renderMessage)