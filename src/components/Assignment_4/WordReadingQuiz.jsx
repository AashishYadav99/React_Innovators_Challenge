import styles from "../Assignment_4/WordReadingQuiz.module.css";
import 'regenerator-runtime/runtime';

import AudioWordInput from './AudioWordInput'

function WordReadingQuiz() {
  

  return (
    <>
    <div className={styles.mainContainer}>
    <AudioWordInput></AudioWordInput>
    </div>
     
    </>
  );
}

export default WordReadingQuiz;
