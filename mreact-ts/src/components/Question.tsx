import * as React from 'react';
import { questions } from '../constants/questions';

type QuestionProps = { 
    question: string;
    answer: string;
}

const ChildQuestion = ({question, answer} : QuestionProps) => {
  const [isHidden, toggle] = React.useState<boolean>(true); 
  return (
    <article className="question">
        <header>{question}</header>
        <p>
            <span className={`${isHidden ? "blur" : ""}`}>{answer}</span>
        </p>
        <footer>
            <button onClick={() => toggle(!isHidden)}>Toggle</button>
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