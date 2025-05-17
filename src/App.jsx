import { useState } from "react";
import "./App.css";
import axios from "axios";
import CuteRobotThinking from "./components/RobotThinking.jsx";
import Card from "./components/Card.jsx";

const setTheme = (theme) => {
  const root = document.documentElement;
  if (theme) {
    root.style.setProperty("--color-bg", theme.backgroundColor);
    root.style.setProperty("--color-text", theme.textColor);
    root.style.setProperty("--color-primary", theme.primaryColor);
    root.style.setProperty("--color-surface", theme.surfaceColor);
    root.style.setProperty("--color-border", theme.borderColor);
    root.style.setProperty("--color-hover", theme.primaryColorHover);
  }
};

function App() {
  const [analysis, setAnalysis] = useState({});
  const [sentence, setSentence] = useState("");
  const [previousSentence, setPreviousSentence] = useState(null);

  const [ongoingCall, setOngoingCall] = useState(false);
  const maxChars = 120;

  async function getAIAnalysis() {
    setOngoingCall(true);
    setPreviousSentence(sentence);

    try {
      const { data } = await axios.get(
        `/api/getClassification?message=${encodeURI(sentence)}`
      );

      return data;
    } catch {
      setPreviousSentence(null);
    } finally {
      setOngoingCall(false);
    }
  }

  const submit = async () => {
    if (!sentence || ongoingCall || previousSentence === sentence) {
      return;
    }

    const analysis = await getAIAnalysis();
    setAnalysis(analysis);
    setTheme(analysis.theme);
  };

  return (
    <div className="container">
      <h1>Feed me a sentence to analyze</h1>

      <div className="input-wrapper">
        <input
          className="input-field"
          value={sentence}
          placeholder="Hungry... Beop... Boep..."
          onChange={(e) => {
            const newValue = e.target.value.slice(0, maxChars);
            setSentence(newValue);
          }}
          onKeyDown={async (e) => {
            e.key === "Enter" ? await submit() : null;
          }}
        />
        <CuteRobotThinking renderBubbles={ongoingCall} />
        <span className="char-count">
          {sentence.length}/{maxChars}
        </span>
      </div>
      <button
        onClick={async () => {
          await submit();
        }}
      >
        Submit
      </button>
      {analysis?.undertone && <Card analysis={analysis}></Card>}
    </div>
  );
}

export default App;
