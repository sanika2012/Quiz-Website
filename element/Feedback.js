import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Feedback.css'; // Ensure you create this CSS file for styling

const Feedback = () => {
    const [rating, setRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleRating = (rate) => {
        setRating(rate);
    };

    const handleSubmitFeedback = () => {
        setSubmitted(true);
        Swal.fire(`Thank you for submitting with rating: ${rating} stars.`);
        // You can add logic to send this feedback to your server here
    };

    return (
        <div className="feedback-form">
            {!submitted ? (
                <>
                    <h3>Rate your experience:</h3>
                    <div className="star-rating">
                        {[...Array(5)].map((star, index) => {
                            index += 1;
                            return (
                                <button
                                    key={index}
                                    type="button"
                                    className={index <= rating ? 'on' : 'off'}
                                    onClick={() => handleRating(index)}
                                >
                                    <span className="star">&#9733;</span>
                                </button>
                            );
                        })}
                    </div>
                    <button onClick={handleSubmitFeedback} className="submit-btn">
                        Submit Feedback
                    </button>
                </>
            ) : (
                <p>Thank you for your feedback!</p>
            )}
        </div>
    );
};

export default Feedback;
