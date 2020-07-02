import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="page__content">
      <Header />
      <Main />
      <Footer />
      <div className="popup popup_type_edit">
        <div className="popup__content">
          <button type="button" className="popup__close"></button>
          <h3 className="popup__title">Редактировать профиль</h3>
          <form className="popup__form" name="edit-profile" noValidate>
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
            <button type="submit" className="button popup__button">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_new-card">
        <div className="popup__content">
          <button type="button" className="popup__close"></button>
          <h3 className="popup__title">Новое место</h3>
          <form className="popup__form" name="new-place" noValidate>
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
            <button type="submit" className="button popup__button popup__button_disabled">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_remove-card">
        <div className="popup__content">
          <button type="button" className="popup__close"></button>
          <h3 className="popup__title">Вы уверены?</h3>
          <form className="popup__form" name="remove-card" noValidate>
            <button type="submit" className="button popup__button">Да</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_edit-avatar">
        <div className="popup__content">
          <button type="button" className="popup__close"></button>
          <h3 className="popup__title">Обновить аватар</h3>
          <form className="popup__form" name="edit-avatar" noValidate>
            <label className="popup__label">
              <input type="url" name="avatar" id="owner-avatar"
                     className="popup__input popup__input_type_description" placeholder="Ссылка на изображение"
                     required />
              <span className="popup__error" id="owner-avatar-error"></span>
            </label>
            <button type="submit" className="button popup__button">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_image">
        <div className="popup__content popup__content_content_image">
          <button type="button" className="popup__close"></button>
          <img alt="" className="popup__image" />
          <p className="popup__caption"></p>
        </div>
      </div>
    </div>
  );
}

export default App;
