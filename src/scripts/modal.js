import {buttonsClose} from '../index.js';

//Открытие и закрытие Popup 
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
}
export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc); 
}

//closePopupByOverlay
export const closePopupByOverlay = (evt) => {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target);
     }
}

//closePopupByEsc
const closePopupByEsc = (evt) => {
    if (evt.key === 'Escape') {
      closePopup(document.querySelector('.popup_opened'));
    }
}

export function closeAll() {
buttonsClose.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
})
}