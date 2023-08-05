import './pages/index.css';
import {handleCardFormSubmit} from './scripts/card.js';
export const popupEditProfile = document.querySelector('.popup-edit-profile');
export const popupFormEditProfile = popupEditProfile.querySelector('.popup-form-edit-profile');
export const popupAddPlace = document.querySelector('.popup-add-place');
export const profile = document.querySelector('.profile');
export const editProfileButton = profile.querySelector('.profile__edit-button');
export const addMestoButton = profile.querySelector('.profile__add-mesto');
export const popupViewPhoto = document.querySelector('.popup-view-photo');
export const openPhotoClick = popupViewPhoto.querySelector('.popup-view-photo__image');
export const closePopupEditProfileButton = popupEditProfile.querySelector('.popup__close');
export const closePopupAddPlaceButton = popupAddPlace.querySelector('.popup__close');
export const closePopupPhotoButton = popupViewPhoto.querySelector('.popup__close');
export const popupImg = popupViewPhoto.querySelector('.popup-view-photo__image');
export const popupCaption = popupViewPhoto.querySelector('.popup-view-photo__caption');
export const popupAddPlaceForm = popupAddPlace.querySelector('.popup__form');
export const inputUserName = popupFormEditProfile.querySelector('.popup__username-input');
export const inputUserCaption = popupFormEditProfile.querySelector('.popup__caption-input');
export const userName = profile.querySelector('.profile__name');
export const userCaption = profile.querySelector('.profile__caption');
export const inputCardName = popupAddPlace.querySelector('.popup__card-name-input');
export const inputCardImage = popupAddPlace.querySelector('.popup__card-image-input');
export const closeButtons = document.querySelectorAll('.popup__close');
export const cardTemplate = document.querySelector('#card').content;
export const allCards = document.querySelector('.cards');

//Массив с данными карточек 
export const initialCards = [
    {
      name: 'Архыз',
      link: 'images/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'images/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'images/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'images/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'images/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'images/baikal.jpg'
    }
    ]

//Отображение карточек на странице
initialCards.forEach((item) => {
  const cardItem = createCard(item);
  allCards.append(cardItem);
})

const renderCardItem = (cardItem) => {
  allCards.prepend(cardItem);
}

//Селекторы для валидации
export const validationSelectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_active'
}

popupAddPlaceForm.addEventListener('submit', handleCardFormSubmit);

//Открытие и закрытие Popup
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