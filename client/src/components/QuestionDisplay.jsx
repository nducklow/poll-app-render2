
import { useState, useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_RESPONSES } from '../utils/mutations';

const QuestionDisplay = ({ question }) => {
    const [showResponses, setShowResponses] = useState(false)
    const [updateResponses, { data, loading, error }] = useMutation(UPDATE_RESPONSES)

    const handleChoiceClick = async (choiceId) => {
        await updateResponses({ variables: { id: choiceId } })
        setShowResponses(true)
    }

    return (
        <div >
            <div className="questionContainer">
                <h2 className="questionName">{question.name}</h2>
            </div>
            {question.choices.map((choice) => (
                <div className="choice-cointainer" key={choice._id}>
                    <button className="choice-button" onClick={() => handleChoiceClick(choice._id)}>
                        {choice.name}
                    </button>
                    {showResponses && (
                        <p className="choice-response">Responses: {choice.responses}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default QuestionDisplay;