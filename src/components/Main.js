import React from 'react';

function Main() {
  function handleEditAvatarClick() {
    document.querySelector('.popup_type_edit-avatar').classList.add('popup_is-opened');
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_type_edit').classList.add('popup_is-opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_type_new-card').classList.add('popup_is-opened');
  }

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__image" onClick={handleEditAvatarClick}></div>
        <div className="profile__info">
          <h1 className="profile__title">Жак-Ив Кусто</h1>
          <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
          <p className="profile__description">Исследователь океана</p>
        </div>
        <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="places page__section">
        <ul className="places__list">
        </ul>
      </section>
    </main>
  );
}

export default Main;
