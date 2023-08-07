import {cardTemplate, popupViewPhoto, popupImg, popupCaption} from '../index.js';
import {openPopup} from './modal.js';

export const createCard = (cardInfo) => {
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


