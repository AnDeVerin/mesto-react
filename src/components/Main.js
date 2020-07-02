import React from 'react';
import api from '../utils/api';

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo().then((userData) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
    });

    api.getCardList().then((cardData) => {
      setCards(cardData);
    });
  }, []);

  const imageStyle = { backgroundImage: `url(${userAvatar})` };

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__image" onClick={onEditAvatar} style={imageStyle}></div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="places page__section">
        <ul className="places__list">
          {cards.map((card, i) => {
            const cardStyle = { backgroundImage: `url(${card.link})` };

            return (
              <li key={i} className="places__item card">
                <div className="card__image" style={cardStyle}>
                </div>
                <button type="button" className="card__delete-button"></button>
                <div className="card__description">
                  <h2 className="card__title">
                    {card.name}
                  </h2>
                  <div className="card__likes">
                    <button type="button" className="card__like-button"></button>
                    <p className="card__like-count">{card.likes.length}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
