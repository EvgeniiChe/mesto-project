const popupEditProfile = document.querySelector('.popup-edit-profile');
const popupFormEditProfile = popupEditProfile.querySelector('.popup-form-edit-profile');
const popupAddPlace = document.querySelector('.popup-add-place');
const profile = document.querySelector('.profile');
const editProfileButton = profile.querySelector('.profile__edit-button');
const addMestoButton = profile.querySelector('.profile__add-mesto');
const popupViewPhoto = document.querySelector('.popup-view-photo');
const openPhotoClick = popupViewPhoto.querySelector('.popup-view-photo__image');
const closePopupEditProfileButton = popupEditProfile.querySelector('.popup__close');
const closePopupAddPlaceButton = popupAddPlace.querySelector('.popup__close');
const closePopupPhotoButton = popupViewPhoto.querySelector('.popup__close');
const popupImg = popupViewPhoto.querySelector('.popup-view-photo__image');
const popupCaption = popupViewPhoto.querySelector('.popup-view-photo__caption');
const popupAddPlaceForm = popupAddPlace.querySelector('.popup__form');
const inputUserName = popupFormEditProfile.querySelector('.popup__username-input');
const inputUserCaption = popupFormEditProfile.querySelector('.popup__caption-input');
const userName = profile.querySelector('.profile__name');
const userCaption = profile.querySelector('.profile__caption');
const inputCardName = popupAddPlace.querySelector('.popup__card-name-input');
const inputCardImage = popupAddPlace.querySelector('.popup__card-image-input');
const closeButtons = document.querySelectorAll('.popup__close');

function openPopup(popup) {
    popup.classList.add('popup_opened');
}
function closePopup(popup) {
    popup.classList.remove('popup_opened');
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
const createCard = (cardInfo) => {
//Клонирование карточек и наполнение содержимым
  const cardItem = cardTemplate.querySelector('.card').cloneNode(true);
  const cardName = cardItem.querySelector('.card__name');
  const cardImg = cardItem.querySelector('.card__image');
  cardImg.src = cardInfo.link;
  cardImg.alt = `Фотография ${cardInfo.name}`;
  cardName.textContent = cardInfo.name;

//Открытие попапа с картинкой
  cardImg.addEventListener('click', () => {
    openPopup(popupViewPhoto);
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
    const cardItem = createCard(item);
    allCards.append(cardItem);
  })

const renderCardItem = (cardItem) => {
    allCards.prepend(cardItem);
}

//Добавление карточки
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
}
popupAddPlaceForm.addEventListener('submit', handleCardFormSubmit);
