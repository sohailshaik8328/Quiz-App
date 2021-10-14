import React, { Component } from 'react';
import _ from 'lodash';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      answers: null,
      correctAnswer: null,
    };
  }

  componentDidMount() {
    let arrOfIncorrect = [
      ...this.props.questions[this.state.currentQuestion].incorrect_answers,
    ];

    let correctAns =
      this.props.questions[this.state.currentQuestion].correct_answer;

    let arrOfAllAns = _.uniq(_.concat(arrOfIncorrect, correctAns));

    this.setState({
      answers: arrOfAllAns,
      correctAnswer: correctAns,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentQuestion !== this.state.currentQuestion) {
      let arrOfIncorrect = [
        ...this.props.questions[this.state.currentQuestion].incorrect_answers,
      ];

      let correctAns =
        this.props.questions[this.state.currentQuestion].correct_answer;

      let arrOfAllAns = _.uniq(_.concat(arrOfIncorrect, correctAns));

      this.setState({
        answers: arrOfAllAns,
        correctAnswer: correctAns,
      });
    }
  }

  handleNextQuestion = () => {
    if (!this.props.allAnswers[this.state.currentQuestion]) {
      alert('You must select answer of current question.');
    } else {
      this.setState((prevState) => {
        return {
          currentQuestion: prevState.currentQuestion + 1,
        };
      });
    }
  };

  render() {
    let questionToDisplay = this.props.questions[this.state.currentQuestion];
    return (
      <div className='w-2/3 mx-auto p-10 rounded-lg bg-blue-200 shadow-md mb-5'>
        <h2 className='font-bold text-center mb-5 text-3xl'>
          Question No. - <span className="text-pink-900">{this.state.currentQuestion + 1}</span>
        </h2>
        <h2 className='flex justify-center mb-5'>
          <span className='px-4 py-2 rounded-full text-2xl font-medium bg-indigo-300'>
            Difficulty Level :  {questionToDisplay.difficulty}
          </span>
        </h2>
        <h3 className="text-2xl mb-5 font-bold text-green-900">
          Question:- <span className="text-black">{questionToDisplay.question}</span>
        </h3>

        {this.state.answers ? (
          <>
            <ul className="mx-auto w-5/6 mb-10">
              {this.state.answers.map((answer, i) => {
                return (
                  <li
                    onClick={(event) => {
                      this.props.handleAnswerSelect(
                        answer,
                        this.state.currentQuestion
                      );
                    }}
                    key={i}
                    className={
                      this.props.allAnswers[this.state.currentQuestion] ===
                      answer
                        ? 'mb-5 border px-3 py-2 rounded-md bg-green-900 hover:bg-green-700 text-white cursor-pointer'
                        : ' mb-5 border px-3 py-2 rounded-md bg-green-300 hover:bg-purple-700 cursor-pointer'
                    }
                  >
                    {i + 1} :-  {"   " + answer}
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          ''
        )}

        {this.state.currentQuestion > 8 ? (
          <div className='flex justify-center'>
            <button
              className='px-3 py-2 rounded-md text-white bg-red-600'
              onClick={(event) => {
                this.props.handleSubmit(
                  this.props.questions,
                  this.props.allAnswers
                );
              }}
            >
              Submit
            </button>
          </div>
        ) : (
          <div className='flex justify-center'>
            <button
              className='text-white px-3 py-2 rounded-md bg-green-600 hover:bg-blue-500'
              onClick={(event) => {
                this.handleNextQuestion();
              }}
            >
              Next
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Quiz;