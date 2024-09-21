import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_QUESTION } from '../utils/queries';
import QuestionDisplay from './QuestionDisplay';

const Welcome = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { loading, data } = useQuery(QUERY_QUESTION);

  if (loading) {
    return <div>Loading...</div>;
  }

  const questions = data?.questions || [];

  if (questions.length === 0) {
    return <div>No questions available</div>;
  }

  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div className="container">
      <h1>Welcome to Meeptopia</h1>
      <h2>Discover what people really think!</h2>

      <QuestionDisplay question={questions[currentQuestionIndex]}/>

      {currentQuestionIndex < questions.length - 1 && (
        <button onClick={handleNextClick}>Next</button>
      )}
    </div>
  );
};

export default Welcome;