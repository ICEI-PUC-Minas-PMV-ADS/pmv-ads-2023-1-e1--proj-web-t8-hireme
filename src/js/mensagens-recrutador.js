//RESPONSIVIDADE
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}

//FUNCIONAMENTO DO CHAT DE MENSAGENS
const joaoSelectorBtn = document.querySelector('#joao-selector')
const anaSelectorBtn = document.querySelector('#ana-selector')
const chatHeader = document.querySelector('.chat-header')
const chatMessages = document.querySelector('.chat-messages')
const chatInputForm = document.querySelector('.chat-input-form')
const chatInput = document.querySelector('.chat-input')
const clearChatBtn = document.querySelector('.clear-chat-button')

const messages = JSON.parse(localStorage.getItem('messages')) || []

const createChatMessageElement = (message) => `
  <div class="message ${message.sender === 'João da Silva' ? 'white-bg' : 'green-bg'}">
    <div class="message-sender">${message.sender}</div>
    <div class="message-text">${message.text}</div>
    <div class="message-timestamp">${message.timestamp}</div>
  </div>
`

window.onload = () => {
  messages.forEach((message) => {
    chatMessages.innerHTML += createChatMessageElement(message)
  })
}

let messageSender = 'João da Silva'

const updateMessageSender = (name) => {
  messageSender = name
  chatHeader.innerText = `${messageSender}`
  chatInput.placeholder = `Escreva uma mensagem, ${messageSender}...`

  if (name === 'João da Silva') {
    joaoSelectorBtn.classList.add('active-person')
    anaSelectorBtn.classList.remove('active-person')
  }
  if (name === 'Ana Campos') {
    anaSelectorBtn.classList.add('active-person')
    joaoSelectorBtn.classList.remove('active-person')
  }

  /* auto-focus the input field */
  chatInput.focus()
}

joaoSelectorBtn.onclick = () => updateMessageSender('João da Silva')
anaSelectorBtn.onclick = () => updateMessageSender('Ana Campos')

const sendMessage = (e) => {
  e.preventDefault()

  const timestamp = new Date().toLocaleString('pt-BR', { hour: 'numeric', minute: 'numeric', hour12: true })
  const message = {
    sender: messageSender,
    text: chatInput.value,
    timestamp,
  }

  /* Save message to local storage */
  messages.push(message)
  localStorage.setItem('messages', JSON.stringify(messages))

  /* Add message to DOM */
  chatMessages.innerHTML += createChatMessageElement(message)

  /* Clear input field */
  chatInputForm.reset()

  /*  Scroll to bottom of chat messages */
  chatMessages.scrollTop = chatMessages.scrollHeight
}

chatInputForm.addEventListener('submit', sendMessage)

clearChatBtn.addEventListener('click', () => {
  localStorage.clear()
  chatMessages.innerHTML = ''
})