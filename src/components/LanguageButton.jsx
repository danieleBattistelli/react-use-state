// LanguageButton.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LanguageButton({ language, isSelected, onClick }) {
    return (
        <button
            className={`btn m-2 ${isSelected ? 'btn-warning' : 'btn-primary'}`}
            onClick={onClick}>
            {language.title}
        </button>
    );
}

export default LanguageButton;
