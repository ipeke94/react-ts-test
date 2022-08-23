import * as React from 'react';
import { questions } from '../constants/questions';

type QuestionProps = { 
    question: string;
    answer: string;
}

const ChildQuestion = ({question, answer} : QuestionProps) => {
  return (
    <article className="question">
        <header>{question}</header>
        <p>
            <span className="blur">{answer}</span>
        </p>
        <footer>
            <button>Toggle</button>
        </footer>
    </article>
  )
}

const Question = () => {
    return(
        <main>
            {
            questions.map( q => (
                <ChildQuestion question={q.question} answer={q.answer} key={q.id}/>
            ))
            }
        </main>
    )
}

export default Question;