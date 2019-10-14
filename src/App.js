import React from 'react';
import './App.css';
import Textbox from './components/Textbox';

function App() {
  return (
    <div className="App">
      <h1>English to Japanese Text Converter!</h1>
      <p>Type the desired hiragana/katakana text in romaji and watch the magic happen!</p>
      <Textbox />
    </div>
  );
}

export default App;
