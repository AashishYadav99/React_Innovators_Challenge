import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import styles from "../Routes/AppRoutes.module.css";
import DisplayList from "../Assignment_1/ImageOption";
import Contact from "../Contacts";
import Home from "../Home";
import AudioQuiz from "../Assignment_2/AudioQuiz";
import WordAudioQuiz from "../Assignment_3/WordAudioQuiz";
import WordReadingQuiz from "../Assignment_4/WordReadingQuiz";
import AnswerPrompt from "../Assignment_5/AnswerPrompt";
import WordTypingQuiz from "../Assignment_3b/WordTypingQuiz";

const AppRoutes = () => {
  return (
    <Router>
      <div>
        <nav className={styles.mainContainer}>
        

          <button type="button" className={`btn btn-warning ${styles.button}`}>
            <Link to="/DisplayList" className={styles.btn}>Assignment-1</Link>
          </button>
          <button type="button" className={`btn btn-warning ${styles.button}`}>
            <Link to="/AudioQuiz" className={styles.btn}>Assignment-2</Link>
          </button>
          <button type="button" className={`btn btn-warning ${styles.button}`}>
            <Link to="/WordAudioQuiz" className={styles.btn}>Assignment-3</Link>
          </button>
          <button type="button" className={`btn btn-warning ${styles.button}`}>
            <Link to="/WordTypingQuiz" className={styles.btn}>Assignment-3b</Link>
          </button>
          <button type="button" className={`btn btn-warning ${styles.button}`}>
            <Link to="/WordReadingQuiz" className={styles.btn}>Assignment-4</Link>
          </button>
          <button type="button" className={`btn btn-warning ${styles.button}`}>
            <Link to="/AnswerPrompt" className={styles.btn}>Assignment-5</Link>
          </button>

        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/DisplayList"
            element={<DisplayList></DisplayList>}
          ></Route>
          <Route path="/AudioQuiz" element={<AudioQuiz></AudioQuiz>}></Route>
          <Route path="/WordAudioQuiz" element={<WordAudioQuiz></WordAudioQuiz>}></Route>
          <Route path="/WordTypingQuiz" element={<WordTypingQuiz></WordTypingQuiz>}></Route>
          <Route path="/WordReadingQuiz" element={<WordReadingQuiz></WordReadingQuiz>}></Route>
          <Route path="/AnswerPrompt" element={<AnswerPrompt></AnswerPrompt>}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
