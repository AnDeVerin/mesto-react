import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import './App.css';

function App() {
  return (
    <div className="page__content">
      <Header />
      <Main />
      <Footer />

      <PopupWithForm title="Редактировать профиль" name="edit">
        <label className="popup__label">
          <input type="text" name="userName" id="owner-name"
                 className="popup__input popup__input_type_name" placeholder="Имя"
                 required minLength="2" maxLength="40" pattern="[a-zA-Zа-яА-Я -]{1,}" />
          <span className="popup__error" id="owner-name-error"></span>
        </label>
        <label className="popup__label">
          <input type="text" name="userDescription" id="owner-description"
                 className="popup__input popup__input_type_description" placeholder="Занятие"
                 required minLength="2" maxLength="200" />
          <span className="popup__error" id="owner-description-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm title="Новое место" name="new-card">
        <label className="popup__label">
          <input type="text" name="name" id="place-name"
                 className="popup__input popup__input_type_card-name" placeholder="Название"
                 required minLength="1" maxLength="30" />
          <span className="popup__error" id="place-name-error"></span>
        </label>
        <label className="popup__label">
          <input type="url" name="link" id="place-link"
                 className="popup__input popup__input_type_url" placeholder="Ссылка на картинку"
                 required />
          <span className="popup__error" id="place-link-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm title="Вы уверены?" name="remove-card" buttonText="Да" />

      <PopupWithForm title="Обновить аватар" name="edit-avatar">
        <label className="popup__label">
          <input type="url" name="avatar" id="owner-avatar"
                 className="popup__input popup__input_type_description" placeholder="Ссылка на изображение"
                 required />
          <span className="popup__error" id="owner-avatar-error"></span>
        </label>
      </PopupWithForm>

      <ImagePopup />
    </div>
  );
}

export default App;
