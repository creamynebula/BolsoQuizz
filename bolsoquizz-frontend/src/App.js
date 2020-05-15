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

let [
  totalRightAnswers,
  totalVotes,
  sentenceNumber, // sentence 1/14, etc
  delay, //length of countdown to next sentence
  img, //name of file containing the author of the sentence
  caption,
  source, //if author == bolsonaro contains a link proving the sentence is his, otherwise contains a small paragraph describing the real author
  rightAnswer, //did you get it right?
] = [0, 0, 1, 4, "", "", "", null];

function App() {
  const [quote, setQuote] = useState(quotesList[quoteIndex]); //vamos pegar um quote random pra começar o game
  const [reply, setReply] = useState("");
  const [intro, setIntro] = useState("");
  const [showButtons, setShowButtons] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const handleVote = (event) => {
    setShowButtons(false); //disappear with the voting buttons
    totalVotes += 1;
    if (totalVotes === 14) {
      setGameOver(true);
    }

    if (quote.bolsonaro) {
      //se bolso era o autor
      let newReply = getNewElement(bolsonaroAutor, reply); //fetch info saying he is the author
      setReply(newReply); //put it in the card
      source = quote.fonte;
      img = "feliz01.jpg";
      caption = "Jair Bolsonaro";
    } else {
      setReply(quote.fonte);
      source = "";
      img = quote.img;
      caption = quote.caption;
    }
    let newIntro; //the intro contains an affirmative or negative statement, depending on whether the user got the question right

    if ((event === 1 && quote.bolsonaro) || (event === 0 && !quote.bolsonaro)) {
      //se acertou
      rightAnswer = 1;
      totalRightAnswers += 1;
      newIntro = getNewElement(positiveIntros, intro);
      setIntro(newIntro);
    } else {
      rightAnswer = 0;
      newIntro = getNewElement(negativeIntros, intro);
      setIntro(newIntro);
    }

    //transition to next sequence, executed after 'delay' seconds
    setTimeout(() => {
      sentenceNumber = sentenceNumber + 1; //question 1/14 etc
      quotesList.splice(quoteIndex, 1); //remove answered question from array
      quoteIndex = getRandomIndex(quotesList);
      setQuote(quotesList[quoteIndex]); //render next question
      setShowButtons(true); //return with the voting buttons
      setIntro("");
      setReply("");
    }, delay * 1000);
  }; //end of handleVote

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
    else
      return (
        <>{`Próxima pergunta vindo automaticamente em ${counter} segundos`}</>
      );
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
        <Card2
          intro={intro}
          reply={reply}
          source={source}
          msgStatus={rightAnswer}
          img={img}
          caption={caption}
        />
      </div>
    );
  //game over
  else
    return (
      <div className="App">
        <div style={msgStyleSuccess}>
          <p>Game Over!</p>
          <p>Score: {`${totalRightAnswers}/${totalVotes}`}</p>
        </div>
        <div>
          <br />
          <br />
        </div>
        <Card2
          intro={intro}
          reply={reply}
          source={source}
          msgStatus={rightAnswer}
        />
      </div>
    );
} //fim App

export default App;
