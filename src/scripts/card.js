import {initialCards, popupViewPhoto, popupImg, popupCaption, inputCardName, inputCardImage, popupAddPlace, popupAddPlaceForm} from '../index.js';
import {disableSubmit, openPopup, closePopup} from './modal.js';

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
    disableSubmit(popupAddPlace);
}
popupAddPlaceForm.addEventListener('submit', handleCardFormSubmit);
