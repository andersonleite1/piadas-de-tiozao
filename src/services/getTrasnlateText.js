const fetchTranslateText = async (text) => {
  const response = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=en-GB|pt-BR`);
  const data = await response.json();
  return data.responseData.translatedText;
};

export default fetchTranslateText;
