import styles from "./Audio.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import audio from '../Assignment_2/audio/audio.mp3'
function AudioPlayer({
  onSubmit,
  handleInputChange,
  value,
  showResult,
  initialValue,
  onRecognitionResult,
}) {
  let audio = new Audio("../Assignment_2/audio/audio.mp3");
  const start = () => {
    audio.play();
    startRecognition();
  };
  const stop = () => {
    audio.pause();
  };
  const startRecognition = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Sorry, your browser does not support speech recognition.");
      return;
    }
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-IN";

    recognition.onresult = (event) => {
      const recognizedText = event.results[0][0].transcript;
      onRecognitionResult(recognizedText);
    };
    recognition.start();
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Play Audio</h1>
        <div className="buttonContainer mt-2">
          <button
            type="button"
            className="btn btn-success me-5 p-0"
            onClick={start}
          >
            Play
          </button>

          <button type="button" className="btn btn-warning p-0" onClick={stop}>
            Pause
          </button>
        </div>
        <div className="mt-3">
          <input
            type="text"
            value={value}
            placeholder="Enter what you listen"
            onChange={handleInputChange}
          />
        </div>
        
        {showResult && (
          <div className={styles.result}>{value === initialValue ? (
            <span>Your answer is Correct</span>
          ) : (
            <span>
              Your answer is incorrect. The correct answer is :
              <b>{initialValue}</b>
            </span>
          )}</div>
            
        )}
        <button className="btn btn-success mt-3 p-0 w-50" onClick={onSubmit}>
          Submit Answer
        </button>
      </div>
    </>
  );
}

export default AudioPlayer;
