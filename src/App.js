import React, { useState, useEffect } from "react";
import {
  quotesList,
  positiveIntros,
  negativeIntros,
  bolsonaroAutor,
  msgStyleSuccess,
  whiteStyle,
  fontRoboto,
  fontLato,
} from "./components/StringsNStyles";
import Card2 from "./components/Card2";
import { CSSTransition } from "react-transition-group";

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
] = [0, 0, 1, 8, "", "", "", null];

let letsGo;

function App() {
  const [quote, setQuote] = useState(quotesList[quoteIndex]); //vamos pegar um quote random pra começar o game
  const [reply, setReply] = useState("");
  const [intro, setIntro] = useState("");
  const [showButtons, setShowButtons] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [fade, setFade] = useState(false);

  const nextQuestion = () => {
    sentenceNumber = sentenceNumber + 1; //question 1/14 etc
    quotesList.splice(quoteIndex, 1); //remove answered question from array
    quoteIndex = getRandomIndex(quotesList);
    setQuote(quotesList[quoteIndex]); //render next question
    setShowButtons(true); //return with the voting buttons
    setFade(false); //fade out the card
  };

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
      setFade(true); //fade the card in
    } else {
      setReply(quote.fonte);
      source = "";
      img = quote.img;
      caption = quote.caption;
      setFade(true);
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
    letsGo = setTimeout(() => {
      nextQuestion();
    }, delay * 1000); //we can cancel this with clearInterval(letsGo)
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
        <>
          <p style={whiteStyle}>{`Próxima pergunta em ${counter} segundos`}</p>
          <p>
            <button
              onClick={() => {
                clearTimeout(letsGo);
                nextQuestion();
              }}
            >
              Pular
            </button>
          </p>
        </>
      );
  }; //end of RenderButtons

  const congratulationsMessage = () => {
    if (totalRightAnswers <= 10)
      return "Você não conhece muito bem o presidente, algumas pessoas diriam que isso é uma coisa boa. Continue assim!";
    else
      return "Você conhece bem o presidente, não sei se isso é bom ou ruim :)";
  };

  if (!gameOver)
    return (
      <div className="App">
        <div style={msgStyleSuccess}>
          <div style={fontRoboto}>
            <p>
              {sentenceNumber}/14 - "{quote.frase}"
            </p>
          </div>
          <br />
          <p>O autor da frase é o presidente Jair Bolsonaro?</p>
        </div>
        <div>
          <RenderButtons handleVote={handleVote} showButtons={showButtons} />
        </div>
        <CSSTransition in={fade} timeout={300} classNames="fade" unmountOnExit>
          <Card2
            intro={intro}
            reply={reply}
            source={source}
            msgStatus={rightAnswer}
            img={img}
            caption={caption}
          />
        </CSSTransition>
      </div>
    );
  //game over
  else
    return (
      <div className="App">
        <div style={msgStyleSuccess}>
          <div style={fontLato}>
            <p>Game Over! Score: {`${totalRightAnswers}/${totalVotes}`}</p>
            <p>{congratulationsMessage()}(´｡• ω •｡`)</p>
          </div>
          <br />
          <br />
          <div style={fontRoboto}>
            <p>
              Feedback, trocar algum tipo de idéia ou oferta de trabalho:{" "}
              <a href="https://www.linkedin.com/in/mateus-souza-ab4aa1199/">
                https://www.linkedin.com/in/mateus-souza-ab4aa1199/
              </a>
            </p>
            <p>
              Código:{" "}
              <a href="https://github.com/creamynebula/BolsoQuizz">
                https://github.com/creamynebula/BolsoQuizz
              </a>{" "}
            </p>
          </div>
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
          img={img}
          caption={caption}
        />
      </div>
    );
} //fim App

export default App;
