import React from 'react';

function PopupWithForm({
  title,
  name,
  buttonText = 'Сохранить',
  children,
}) {
  return (
    <div className={`popup popup_type_${name}`}>
      <div className="popup__content">
        <form className="popup__form" name={name} noValidate>
          <button type="button" className="popup__close"></button>
          <h3 className="popup__title">{title}</h3>
          {children}
          <button type="submit" className="button popup__button">{buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
