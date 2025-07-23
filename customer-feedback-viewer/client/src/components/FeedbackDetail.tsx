import React from 'react';
import { Card, Elevation, Button } from '@blueprintjs/core';
import { Feedback } from '../types/feedback';

interface FeedbackDetailProps {
    feedback: Feedback | null;
    onEdit: () => void;
    onDelete: () => void;
}

const FeedbackDetail: React.FC<FeedbackDetailProps> = ({ feedback, onEdit, onDelete }) => {
    if (!feedback) {
        return <div>No feedback selected.</div>;
    }

    return (
        <Card elevation={Elevation.TWO}>
            <h2>{feedback.title}</h2>
            <p>{feedback.description}</p>
            <p><strong>Submitted by:</strong> {feedback.submittedBy}</p>
            <p><strong>Date:</strong> {new Date(feedback.date).toLocaleDateString()}</p>
            <Button intent="primary" onClick={onEdit}>Edit</Button>
            <Button intent="danger" onClick={onDelete}>Delete</Button>
        </Card>
    );
};

export default FeedbackDetail;