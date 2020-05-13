import React, { useState, useEffect } from "react";
import {
  quotesList,
  positiveIntros,
  negativeIntros,
  bolsonaroAutor,
  msgStyleSuccess,
} from "./components/StringsNStyles";
import Card2 from "./components/Card2";

const getRandomIndex = (array) => {
  let randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
};
const getNewElement = (array, previousElement) => {
  let newElement = previousElement;
  while (newElement === previousElement)
    newElement = array[getRandomIndex(array)];
  return newElement;
};

let quoteIndex = getRandomIndex(quotesList);
let totalRightAnswers = 0;
let totalVotes = 0;
const delay = 3; //tempo padrao que mostra o card com a resposta (em segundos)

function App() {
  const [quote, setQuote] = useState(quotesList[0]); //vamos pegar um quote random pra começar o game
  const [reply, setReply] = useState("");
  const [rightAnswer, setrightAnswer] = useState(null); //a última resposta foi certa ou errada?
  const [intro, setIntro] = useState("");
  const [sentenceNumber, setSentenceNumber] = useState(1);
  const [showButtons, setShowButtons] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const handleVote = (event) => {
    setShowButtons(false); //some com os botões de votar
    totalVotes += 1;
    if (totalVotes === 14) {
      setGameOver(true);
      return;
    }

    if (quote.bolsonaro) {
      //se bolso era o autor
      let newReply = getNewElement(bolsonaroAutor, reply); //pega info falando q era ele
      setReply(`${newReply}\nFonte: ${quote.fonte}`); //coloca no card
    } else {
      setReply(quote.fonte); //coloca no card info sobre o real autor
    }
    let newIntro; //a intro contém tipo uma afirmação ou negação, dependendo se acertou ou errou
    if ((event === 1 && quote.bolsonaro) || (event === 0 && !quote.bolsonaro)) {
      //se acertou
      setrightAnswer(1);
      totalRightAnswers += 1;
      newIntro = getNewElement(positiveIntros, intro);
      setIntro(newIntro);
    } else {
      setrightAnswer(0);
      newIntro = getNewElement(negativeIntros, intro);
      setIntro(newIntro);
    }

    //transição para a próxima pergunta, executada depois de 'delay' segundos
    setTimeout(() => {
      setSentenceNumber(sentenceNumber + 1); //question 1/14 etc
      quotesList.splice(quoteIndex, 1); //remove answered question from array
      quoteIndex = getRandomIndex(quotesList);
      setQuote(quotesList[quoteIndex]); //render next question
      setShowButtons(true); //volta os botoes de voto
      setIntro("");
      setReply("");
    }, delay * 1000);
  }; //fim handleVote

  const RenderButtons = ({ handleVote, showButtons }) => {
    const [counter, setCounter] = useState(delay);
    //if counter > 0, decrease counter after 1s, every time [counter] changes
    useEffect(() => {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    if (showButtons)
      return (
        <>
          <button onClick={() => handleVote(1)}>Sim</button>
          <button onClick={() => handleVote(0)}>Não</button>
        </>
      );
    else return <>{`Próxima pergunta vindo em ${counter} segundos`}</>;
  };

  if (!gameOver)
    return (
      <div className="App">
        <div style={msgStyleSuccess}>
          <p>
            {sentenceNumber}/14 - "{quote.frase}"
          </p>
          <br />
          <p>O autor da frase é o presidente Jair Bolsonaro?</p>
        </div>
        <div>
          <RenderButtons handleVote={handleVote} showButtons={showButtons} />
          <br />
          <br />
        </div>
        <Card2 intro={intro} message={reply} msgStatus={rightAnswer} />
        <div></div>
      </div>
    );
  else
    return (
      <div style={msgStyleSuccess}>
        <p>Game Over!</p>
        <p>Score: {`${totalRightAnswers}/${totalVotes}`}</p>
      </div>
    );
} //fim App

export default App;
