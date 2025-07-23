import axios from 'axios';
import { Feedback } from '../types/feedback';
import { API_BASE_URL } from '../utils/constants';

export const getFeedbacks = async (): Promise<Feedback[]> => {
    const response = await axios.get(`${API_BASE_URL}/feedback`);
    return response.data;
};

export const submitFeedback = async (feedback: Feedback): Promise<Feedback> => {
    const response = await axios.post(`${API_BASE_URL}/feedback`, feedback);
    return response.data;
};