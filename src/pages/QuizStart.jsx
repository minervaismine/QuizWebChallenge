import { useLocation } from "react-router-dom";

function QuizStart() {
  const location = useLocation();
  const questions = location.state?.questions;

  if (!questions) {
    return <h1>No questions loaded 😢</h1>;
  }

  return (
    <div>
      <h1>Quiz Started 🚀</h1>

      {questions.map((q, index) => (
        <div key={index}>
          <p dangerouslySetInnerHTML={{ __html: q.question }} />
        </div>
      ))}
    </div>
  );
}

export default QuizStart;