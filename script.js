//Открытие и закрытие модальных окон
const popupEditProfile = document.querySelector('.popup-edit-profile');
const popupAddPlace = document.querySelector('.popup-add-place');
const profile = document.querySelector('.profile');
const editProfileButton = profile.querySelector('.profile__edit-button');
const addMestoButton = profile.querySelector('.profile__add-mesto');
const openPhotoClick = document.querySelector('.popup-view-photo__image');
const popupViewPhoto = document.querySelector('.popup-view-photo');
const closePopupEditProfileButton = popupEditProfile.querySelector('.popup__close');
const closePopupAddPlaceButton = popupAddPlace.querySelector('.popup__close');
const closePopupPhotoButton = popupViewPhoto.querySelector('.popup__close');
const popupImg = popupViewPhoto.querySelector('.popup-view-photo__image');
const popupCaption = popupViewPhoto.querySelector('.popup-view-photo__caption');
const popupAddPlaceForm = popupAddPlace.querySelector('.popup__form');

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
const popupFormEditProfile = popupEditProfile.querySelector('.popup-form-edit-profile');
const userName = profile.querySelector('.profile__name');
const userCaption = profile.querySelector('.profile__caption');
popupFormEditProfile.addEventListener('submit', (event) => {
  event.preventDefault(); 
  userName.textContent = inputUserName.value;
  userCaption.textContent = inputUserCaption.value;
  closePopupEditProfile();
})

//Массив с данными карточек
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
const operationsCardItem = (cardInfo) => {
//Клонирование карточек и наполнение содержимым
  const cardItem = cardTemplate.querySelector('.card').cloneNode(true);
  const cardName = cardItem.querySelector('.card__name');
  const cardImg = cardItem.querySelector('.card__image');
  cardImg.src = cardInfo.link;
  cardImg.alt = `Фотография ${cardInfo.name}`;
  cardName.textContent = cardInfo.name;

//Открытие и закрытие попапа с картинкой
  cardImg.addEventListener('click', () => {
    popupViewPhoto.classList.add('popup-view-photo_opened');
    popupImg.src = cardImg.src;
    popupImg.alt = cardName.textContent;
    popupCaption.textContent = cardName.textContent;
  })

//Лайки
  const likeButton = cardItem.querySelector('.card__like');
  const addLike = () => {
    likeButton.classList.toggle('card__like_active');
  }
  likeButton.addEventListener('click', addLike);

//Удаление карточки
  const trashIconButton = cardItem.querySelector('.card__trash-icon');
  const deleteCard = () => {
    cardItem.remove();
  }
  trashIconButton.addEventListener('click', deleteCard);

  return cardItem;
}

//Отображение карточек на странице
initialCards.forEach((item) => {
    const cardItem = operationsCardItem(item);
    allCards.append(cardItem);
  })

const renderCardItem = (cardItem) => {
    allCards.prepend(cardItem);
}

//Добавление карточки
const addCardHandler = (evt) => {
  evt.preventDefault();
  const inputCardName = document.getElementById('card-name-input');
  const inputCardImage = document.getElementById('card-image-input');
  const name = inputCardName.value;
  const link = inputCardImage.value;
  const initialCardsNew = {
    name,
    link
  }
  renderCardItem(operationsCardItem(initialCardsNew));
  closePopupAddPlace();
}
popupAddPlaceForm.addEventListener('submit', addCardHandler);
