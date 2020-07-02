import React from 'react';

function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <div className="popup__content popup__content_content_image">
        <button type="button" className="popup__close"></button>
        <img alt="" className="popup__image" />
        <p className="popup__caption"></p>
      </div>
    </div>
  );
}

export default ImagePopup;
