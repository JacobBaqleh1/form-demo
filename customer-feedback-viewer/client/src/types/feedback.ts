export interface Feedback {
    id: number;
    userId: number;
    comment: string;
    rating: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface FeedbackResponse {
    feedback: Feedback[];
    total: number;
}