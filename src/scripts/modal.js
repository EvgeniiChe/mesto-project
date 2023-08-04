import {addMestoButton, editProfileButton, inputUserName, inputUserCaption, popupAddPlace, popupEditProfile, userName, userCaption, closeButtons, popupFormEditProfile, popupViewPhoto} from '../index.js';

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
}
export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc); 
}

addMestoButton.addEventListener('click', () => {
    openPopup(popupAddPlace);
})

editProfileButton.addEventListener('click', () => {
    openPopup(popupEditProfile);
    inputUserName.value = userName.textContent;
    inputUserCaption.value = userCaption.textContent;
})

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
})

//Сохранение введенных значений редактирования профиля (имени и профессии)
popupFormEditProfile.addEventListener('submit', (event) => {
  event.preventDefault(); 
  userName.textContent = inputUserName.value;
  userCaption.textContent = inputUserCaption.value;
  closePopup(popupEditProfile);
})

//Деактивация кнопки Submit после отправки данных
export const disableSubmit = () => {
    const button = document.querySelector('.popup__submit-add-place');
    button.classList.add('popup__submit_disabled');
    button.disabled = true;
  }

//closePopupByEsc
const closePopupByEsc = (evt) => {
    if (evt.key === 'Escape') {
      closePopup(document.querySelector('.popup_opened'));
    }
}
  
//closePopupByOverlay
const closePopupByOverlay = (evt) => {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target);
     }
}
popupEditProfile.addEventListener('mousedown', closePopupByOverlay);
popupAddPlace.addEventListener('mousedown', closePopupByOverlay);
popupViewPhoto.addEventListener('mousedown', closePopupByOverlay);