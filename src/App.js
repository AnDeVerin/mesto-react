import React from 'react';
import './App.css';
import logoPath from './images/logo.svg';

function App() {
  return (
    <div className="page__content">
      <header className="header page__section">
        <img src={logoPath} alt="Логотип проекта Mesto" className="logo header__logo" />
      </header>
      <main className="content">
        <section className="profile page__section">
          <div className="profile__image"></div>
          <div className="profile__info">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button className="profile__edit-button" type="button"></button>
            <p className="profile__description">Исследователь океана</p>
          </div>
          <button className="profile__add-button" type="button"></button>
        </section>
        <section className="places page__section">
          <ul className="places__list">
          </ul>
        </section>
      </main>
      <footer className="footer page__section">
        <p className="footer__copyright">
          © 2020 Mesto Russia
        </p>
      </footer>
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
