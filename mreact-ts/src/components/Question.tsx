import * as React from 'react';
import { questions } from '../constants/questions';

type QuestionsProps = {
    question: string;
    answer: string;
}

const ChildQuestion = ({ question, answer }: QuestionsProps) => {
    // + " 🙋‍♀️ 🙋 "
    const [isHidden, toggle] = React.useState<boolean>(true);
    return (
        <article className="question">
            <header data-testid="header-question">{question}</header>
            <div data-testid="answer" className={`answerQ ${isHidden ? "blur" : ""}`}>{answer}</div>
            <footer>
                <button data-testid="toggle-btn" className="toggle" onClick={() => toggle(!isHidden)}>Toggle</button>
            </footer>
        </article>
    )
}

const Questions = () => {
    return (
        <main>
            {(questions && questions.length > 0) ?
                questions.map(q => (
                    <ChildQuestion question={q.question} answer={q.answer} key={q.id} />
                )) : <div>No questions</div>
            }
        </main>
    )
}

export default Questions;