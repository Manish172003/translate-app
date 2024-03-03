const AWS = require("aws-sdk");
const translate = new AWS.Translate();

exports.handler = async (event) => {
  const requestBody = JSON.parse(event.body);

  const params = {
    SourceLanguageCode: "en",
    TargetLanguageCode: "fr",
    Text: requestBody.text,
  };

  try {
    const translation = await translate.translateText(params).promise();

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        translatedText: translation.TranslatedText,
      }),
    };

    return response;
  } catch (error) {
    console.error("Translation error:", error);

    const response = {
      statusCode: 500,
      body: JSON.stringify({
        translatedText: "Error translating text",
      }),
    };

    return response;
  }
};
