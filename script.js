//Открытие и закрытие модальных окон
const popupEditProfile = document.querySelector('.popup-edit-profile');
const popupAddPlace = document.querySelector('.popup-add-place');
const closePopupEditProfileButton = popupEditProfile.querySelector('.popup__close');
const closePopupAddPlaceButton = popupAddPlace.querySelector('.popup__close');
const profile = document.querySelector('.profile');
const editProfileButton = profile.querySelector('.profile__edit-button');
const addMestoButton = profile.querySelector('.profile__add-mesto');

const openPhotoClick = document.querySelector('.popup-view-photo__image');
const popupViewPhoto = document.querySelector('.popup-view-photo');
const closePopupPhotoButton = popupViewPhoto.querySelector('.popup__close');

function openPopupViewPhoto() {
    popupViewPhoto.classList.add('popup-view-photo_opened');
}
function closePopupViewPhoto() {
    popupViewPhoto.classList.remove('popup-view-photo_opened');
}
function openPopupEditProfile() {
    popupEditProfile.classList.add('popup_opened');
}
function openPopupAddPlace() {
    popupAddPlace.classList.add('popup_opened');
}
function closePopupEditProfile() {
    popupEditProfile.classList.remove('popup_opened');
}
function closePopupAddPlace() {
    popupAddPlace.classList.remove('popup_opened');
}
openPhotoClick.addEventListener('click', openPopupViewPhoto);
editProfileButton.addEventListener('click', openPopupEditProfile);
addMestoButton.addEventListener('click', openPopupAddPlace);
closePopupPhotoButton.addEventListener('click', closePopupViewPhoto);
closePopupEditProfileButton.addEventListener('click', closePopupEditProfile);
closePopupAddPlaceButton.addEventListener('click', closePopupAddPlace);

//Вставка текущих значений профиля (имени и профессии) в соответствующие поля модального окна
const inputUserName = document.getElementById('username-input');
const inputUserCaption = document.getElementById('caption-input');
inputUserName.value = profile.getElementsByTagName("h1")[0].textContent;
inputUserCaption.value = profile.getElementsByTagName("p")[0].textContent;

//Сохранение введенных значений редактирования профиля (имени и профессии)
const submitPopupButton = document.querySelector('.popup__submit');
const userName = profile.querySelector('.profile__name');
const userCaption = profile.querySelector('.profile__caption');
function formSubmitHandler (evt) {
  evt.preventDefault(); 
  userName.textContent = inputUserName.value;
  userCaption.textContent = inputUserCaption.value;
}
submitPopupButton.addEventListener('submit', formSubmitHandler);

//Шесть карточек при загрузке
const initialCards = [
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
    ];
const cardTemplate = document.querySelector('#card').content;
const allCards = document.querySelector('.cards');
initialCards.forEach(function addCard(item, index) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__image').src = `${initialCards[index].link}`;
    cardElement.querySelector('.card__image').alt = `Фотография ${initialCards[index].link}`;
    cardElement.querySelector('.card__name').textContent = `${initialCards[index].name}`;
    allCards.append(cardElement);
      });


//Добавление новой карточки
const addCardButton = popupAddPlace.querySelector('.popup__submit');
const inputCardName = document.getElementById('card-name-input');
const inputCardImage = document.getElementById('card-image-input');
function addCardHandler (evt) {
  evt.preventDefault();
  initialCards.unshift({
    name: `${inputCardName.value}`,
    link: `${inputCardImage.value}`
  })
  addCard(initialCards[0]);
}
addCardButton.addEventListener('submit', addCardHandler);

//Удаление карточки
document.querySelector('.card__trash-icon').addEventListener('click', function (evt) {  
  evt.target.initialCards.remove();
});

//Открытие и закрытие попапа с картинкой
const cardImg = document.querySelector('.card__image');
const popupImg = popupViewPhoto.querySelector('.popup-view-photo__image');
const popupCaption = popupViewPhoto.querySelector('.popup-view-photo__caption');
const cardName = document.querySelector('.card__name');
cardImg.addEventListener('click', function (evt) {
  popupViewPhoto.classList.add('popup-view-photo_opened');
  popupImg.src = evt.target.src;
  popupImg.alt = cardName.textContent;
  popupCaption.textContent = cardName.textContent;
});

//Лайки
const likeButton = document.querySelector('.card__like');
likeButton.addEventListener('click', function (evt) {
  evt.target.classList.toggle('card__like_active');
});








