import {inputUserName, inputUserCaption, popupEditProfile, userName, userCaption, popupFormEditProfile} from '../index.js';

//Сохранение введенных значений редактирования профиля (имени и профессии)
popupFormEditProfile.addEventListener('submit', (event) => {
  event.preventDefault(); 
  userName.textContent = inputUserName.value;
  userCaption.textContent = inputUserCaption.value;
  closePopup(popupEditProfile);
})

