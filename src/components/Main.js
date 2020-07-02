import React from 'react';

function Main() {
  return (
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
  );
}

export default Main;
