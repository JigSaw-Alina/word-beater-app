import React from 'react';
import CurrentWord  from '../components/CurrentWord';
import DisplayTime from '../components/DisplayTime';
import Header from '../components/Header';
import Guessword from '../components/Guessword'

 


export default class WordbeaterApp extends React.Component {
    state = {
      time: 10,
      score: 0,
      scoreBoard: [],
      words: ['god','family','eat','sleep', 'games'],
      currentWord: undefined,
      isPlaying : undefined
   };
 
 
componentDidMount() {
  try {
    const json = localStorage.getItem('scoreBoard')
    const scoreBoard = JSON.parse(json);

    if (scoreBoard)
    this.setState(() => ({ scoreBoard }))
  } catch (e) {
    // // Do nothing at all
  }

  window.addEventListener('load', this.init);
} 


componentDidUpdate(prevProps, prevState) {
  if (prevState.score !== this.state.score) {
        const json = JSON.stringify(this.state.scoreBoard)
        localStorage.setItem('scoreBoard', json)
  }
}
 



init = () => {
   // call random words
   this.handleWords()
}


startTimeMatch = () => {
  this.countDown()
  this.resetTIme()
}


countDown = () => {
    let startTime = setInterval(() => {   
      let { time } = this.state  
      if (time > 0) {
        this.setState(({ time }) => ({
          time: time - 1
       
    }));
  }
    }, 1000);
    this.setState(() => ({
      isPlaying: startTime
    }));
    
    clearInterval(this.state.isPlaying);
  
  let { score } = this.state
    if (score > 0) {
      this.setState(({ scoreBoard, score }) => ({
        scoreBoard: scoreBoard.concat(score),
        score: 0
    }))
  }
}


resetTIme = () => {
  this.setState(() => ({ time: 10 }))
}

 handelChange = (option) => {
   this.handleWords()
   let { currentWord } = this.state
     if (option === currentWord) {
        this.setState(({ score, time }) => ({
         time: 9,
         score: score + 1
        }))
       return 'Correct'
     } else {
       return 'Wrong'
     }
 }
 
 
 handleWords = () => {
   const randomNum = Math.floor(Math.random() * this.state.words.length);
   const randomWords= this.state.words[randomNum];
     this.setState(() => ({
       currentWord: randomWords
   }));
 };
 
 
 render() {
   const subtitle = 'Type the given word within 10 seconds'
     return (
       <div>
        <Header 
          subtitle={subtitle} />
        <div className="container">
         <CurrentWord 
           currentWord={this.state.currentWord}/>
         <Guessword   
            handelChange={this.handelChange} 
            startMatch ={this.startMatch}
            handelInput ={this.state.time > 9 || this.state.time === 0 }
         />
      <div className="widget">
      <DisplayTime 
            displayTime={this.state.time}  
            scoreDisplay={this.state.score}
            startTimeMatch={this.startTimeMatch} 
            startDisabled={this.state.time > 9 || this.state.time === 0}
            scoreBoard = {this.state.scoreBoard}
      />
          </div>
        </div>    
       </div>
     )
   }
 };

