import '../styles/main.scss';
import 'bootstrap';
import Darkmode from 'darkmode-js';
import displayMessage from './components/displayMessages/displayMessages';
import userRadios from './components/userRadios';

const buttonEvents = () => {
  const sendBtn = document.getElementById('send-button');
  const clearBtn = document.getElementById('clear-button');
  sendBtn.addEventListener('click', displayMessage.addMessage);
  clearBtn.addEventListener('click', displayMessage.clearMessages);
  $('#incoming-message').on('click', '#send-button', displayMessage.addMessage);
  $('body').on('click', '.delete', displayMessage.deleteCard);
  $('input[type=radio][name=userSelection]').on('change', displayMessage.displayAllMessages);
  new Darkmode().showWidget();
  $('input[type=checkbox][name=largeTextRadioButton]').on('change', displayMessage.displayAllMessages);
};

const init = () => {
  userRadios.printRadioButtons();
  displayMessage.displayAllMessages();
  buttonEvents();
};

init();
