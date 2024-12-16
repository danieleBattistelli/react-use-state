import 'bootstrap/dist/css/bootstrap.min.css';
import languages from './data/languages';
import React, { useState } from 'react';
import LanguageCard from './components/LanguageCard';
import LanguageButton from './components/LanguageButton';

function App() {
  const [clickedLanguage, setClickedLanguage] = useState(null);

  return (
    <>
      <h1 className='m-3'>Learn Web development</h1>
      <div className="container mt-3">
        <div className="d-flex flex-wrap">
          {languages.map((language, index) => (
            <LanguageButton
              key={index}
              language={language}
              isSelected={clickedLanguage === language}
              onClick={() => setClickedLanguage(language)}
            />
          ))}
        </div>
        <LanguageCard language={clickedLanguage} />
      </div>
    </>
  );
}

export default App
