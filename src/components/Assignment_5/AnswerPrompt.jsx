import styles from "../Assignment_5/AnswerPrompt.module.css";
import SelectWord from "./SelectWord";

const AnswerPrompt = () => {
  const prompt = "Select the adjectives in the sentence.";
  const sentence = "The quick brown fox jumps over the lazy dog.";
  const correctAnswers = ["quick", "lazy"];

  return (
    <div className={styles.container}>
      <SelectWord
        prompt={prompt}
        sentence={sentence}
        correctAnswers={correctAnswers}
      ></SelectWord>
    </div>
  );
};

export default AnswerPrompt;
