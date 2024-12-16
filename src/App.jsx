import 'bootstrap/dist/css/bootstrap.min.css';
import languages from './data/languages';
import React,{useState} from 'react';

function App() {
  const[clickedLanguage, setClickedLanguage]=useState(null);

  return (
    <>
      <h1 className='m-3'>Learn Web development</h1>
      <div className="container mt-3">
        <div className="d-flex flex-wrap">
          {languages.map((language, index) => (
            <button 
            key={index} 
            className='btn btn-primary m-2' 
            onClick={() => setClickedLanguage(language)}>
            {language.title}
          </button>
          ))}
        </div>
        {clickedLanguage &&(
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title"> {clickedLanguage.title}</h5>
            <p className='card-text'>{clickedLanguage.description}</p>
          </div>
        </div>
        )}
      </div>
    </>
  )
}

export default App
