import React, { useState } from "react";
import axios from "axios"; // Import Axios

const TranslationForm = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = async () => {
    try {
      console.log(inputText);
      const response = await axios.post(
        "https://7m4ebv7h3g.execute-api.us-east-1.amazonaws.com/dev/translate",
        {
          text: inputText,
        }
      );

      setTranslatedText(response.data.translatedText);
    } catch (error) {
      console.error("Translation error:", error);
      setTranslatedText("Error translating text");
    }
  };

  return (
    <div>
      <h1>Translation App</h1>
      <div>
        <label htmlFor="inputText">Enter Text to Translate:</label>
        <input
          type="text"
          id="inputText"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleTranslate}>Translate</button>
      </div>
      <div>
        <h2>Translated Text:</h2>
        <p>{translatedText}</p>
      </div>
    </div>
  );
};

export default TranslationForm;
