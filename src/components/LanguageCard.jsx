// LanguageCard.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LanguageCard({ language }) {
    return (
        <div className="card mt-3">
            <div className="card-body">
                <h5 className="card-title">
                    {language ? language.title : "Nessun linguaggio selezionato"}
                </h5>
                <p className="card-text">
                    {language ? language.description : ""}
                </p>
            </div>
        </div>
    );
}

export default LanguageCard;
