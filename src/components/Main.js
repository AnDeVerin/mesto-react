import React from 'react';
import api from '../utils/api';

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState();

  React.useEffect(() => {
    api.getUserInfo().then((userData) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
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
        </ul>
      </section>
    </main>
  );
}

export default Main;
