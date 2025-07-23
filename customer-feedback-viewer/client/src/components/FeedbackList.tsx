import React, { useEffect, useState } from 'react';
import { Table } from '@blueprintjs/table';
import { Feedback } from '../types/feedback';
import { fetchFeedback } from '../services/api';

const FeedbackList: React.FC = () => {
    const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getFeedback = async () => {
            try {
                const data = await fetchFeedback();
                setFeedbackList(data);
            } catch (err) {
                setError('Failed to fetch feedback');
            } finally {
                setLoading(false);
            }
        };

        getFeedback();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Table numRows={feedbackList.length}>
            <thead>
                <tr>
                    <th>Feedback ID</th>
                    <th>Customer Name</th>
                    <th>Comments</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {feedbackList.map((feedback) => (
                    <tr key={feedback.id}>
                        <td>{feedback.id}</td>
                        <td>{feedback.customerName}</td>
                        <td>{feedback.comments}</td>
                        <td>{new Date(feedback.date).toLocaleDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default FeedbackList;