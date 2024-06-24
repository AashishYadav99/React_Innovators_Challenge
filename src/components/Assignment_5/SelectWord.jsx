import { useState } from "react";
import styles from '../Assignment_5/Select.module.css'
const SelectWord = ({ prompt, sentence, correctAnswers }) => {
    const [selectedWords, setSelectedWords] = useState([]);
    const [message, setMessage] = useState('');
  
  const handleWordClick = (word) => {
    if (selectedWords.includes(word)) {
      setSelectedWords((prevSelectedWords) =>
        prevSelectedWords.filter((selectedWord) => selectedWord !== word)
      );
    } else {
      setSelectedWords((prevSelectedWords) => [...prevSelectedWords, word]);
    }
  };
  
    const handleSubmit = () => {
      const isCorrect = selectedWords.sort().join(',') === correctAnswers.sort().join(',');
      setMessage(isCorrect ? 'Success! You selected the correct words.' : 'Error! Your selection is incorrect.');
    };
  
    return (
      <div>
        <h3 className={styles}>{prompt}</h3>
        <p>
          {sentence.split(' ').map((word, index) => (
            <span
              key={index}
              onClick={() => handleWordClick(word)}
              style={{
                cursor: 'pointer',
                color: selectedWords.includes(word) ? 'blue' : 'black',
                margin: '0 5px',
              }}
            >
              {word}
            </span>
          ))}
        </p>
        <button className={styles} onClick={handleSubmit} >Submit</button>
        <p>Result : {message && <span>{message}</span>} </p>
        
      </div>
    );
  };

  export default SelectWord;