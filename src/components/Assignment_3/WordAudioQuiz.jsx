// import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../Assignment_3/WordAudioQuiz.module.css";
import Audio from "./Audio";
import { useState } from "react";

function WordAudioQuiz() {
  const [value, setValue] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [initialValue, setInitialValue] = useState("");

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = () => {
    if (value !== "") {
      setShowResult(true);
    }
  };

  const handleRecognitionResult = (recognizedText) => {
    setInitialValue(recognizedText.trim());
    setShowResult(false);  // Reset result when new recognition is done
  };

  return (
    <div className={styles.mainContainer}>
      <Audio
        onSubmit={onSubmit}
        handleInputChange={handleInputChange}
        value={value}
        showResult={showResult}
        initialValue={initialValue}
        onRecognitionResult={handleRecognitionResult}
      />
    </div>
  );
}

export default WordAudioQuiz;
