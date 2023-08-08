import './pages/index.css';
import {createCard} from './scripts/card.js';
import {openPopup, closePopup, closePopupByOverlay, closeAll} from './scripts/modal.js'
import {enableValidation, disableSubmit} from './scripts/validate.js';
const popupEditProfile = document.querySelector('.popup-edit-profile');
const popupFormEditProfile = popupEditProfile.querySelector('.popup-form-edit-profile');
const popupAddPlace = document.querySelector('.popup-add-place');
const profile = document.querySelector('.profile');
const editProfileButton = profile.querySelector('.profile__edit-button');
const addMestoButton = profile.querySelector('.profile__add-mesto');
export const popupViewPhoto = document.querySelector('.popup-view-photo');
export const openPhotoClick = popupViewPhoto.querySelector('.popup-view-photo__image');
export const closePopupEditProfileButton = popupEditProfile.querySelector('.popup__close');
export const closePopupAddPlaceButton = popupAddPlace.querySelector('.popup__close');
export const closePopupPhotoButton = popupViewPhoto.querySelector('.popup__close');
export const popupImg = popupViewPhoto.querySelector('.popup-view-photo__image');
export const popupCaption = popupViewPhoto.querySelector('.popup-view-photo__caption');
const popupAddPlaceForm = popupAddPlace.querySelector('.popup__form');
const inputUserName = popupFormEditProfile.querySelector('.popup__username-input');
const inputUserCaption = popupFormEditProfile.querySelector('.popup__caption-input');
const userName = profile.querySelector('.profile__name');
const userCaption = profile.querySelector('.profile__caption');
const inputCardName = popupAddPlace.querySelector('.popup__card-name-input');
const inputCardImage = popupAddPlace.querySelector('.popup__card-image-input');
export const closeButtons = document.querySelectorAll('.popup__close');
export const cardTemplate = document.querySelector('#card').content;
const allCards = document.querySelector('.cards');
export const popupSubmitButton = document.querySelector('.popup__submit');

import arkhyzImage from './images/arkhyz.jpg';
import chelyabinskImage from './images/chelyabinsk-oblast.jpg';
import ivanovoImage from './images/ivanovo.jpg';
import kamchatkaImage from './images/kamchatka.jpg';
import kholmogorskyImage from './images/kholmogorsky-rayon.jpg';
import baikalImage from './images/baikal.jpg';

//Массив с данными карточек
const initialCards = [
    {
      name: 'Архыз',
      link: arkhyzImage
    },
    {
      name: 'Челябинская область',
      link: chelyabinskImage
    },
    {
      name: 'Иваново',
      link: ivanovoImage
    },
    {
      name: 'Камчатка',
      link: kamchatkaImage
    },
    {
      name: 'Холмогорский район',
      link: kholmogorskyImage
    },
    {
      name: 'Байкал',
      link: baikalImage
    }
    ]

closeAll();

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
};

//Открытие попапов
addMestoButton.addEventListener('click', () => {
  openPopup(popupAddPlace);
})
editProfileButton.addEventListener('click', () => {
  openPopup(popupEditProfile);
  inputUserName.value = userName.textContent;
  inputUserCaption.value = userCaption.textContent;
})

//Закрытие попапов By Overlay
popupEditProfile.addEventListener('mousedown', closePopupByOverlay);
popupAddPlace.addEventListener('mousedown', closePopupByOverlay);
popupViewPhoto.addEventListener('mousedown', closePopupByOverlay);

//Вызов валидации
enableValidation(validationSelectors);

//Обработка Submit
const handleCardFormSubmit = (evt) => {
  evt.preventDefault();
  const name = inputCardName.value;
  const link = inputCardImage.value;
  const initialCardsNew = {
    name,
    link
  }
  evt.target.reset();
  renderCardItem(createCard(initialCardsNew));
  closePopup(popupAddPlace);
  disableSubmit(popupAddPlace);
}
popupAddPlaceForm.addEventListener('submit', handleCardFormSubmit);

popupFormEditProfile.addEventListener('submit', (event) => {
  event.preventDefault(); 
  userName.textContent = inputUserName.value;
  userCaption.textContent = inputUserCaption.value;
  closePopup(popupEditProfile);
})
