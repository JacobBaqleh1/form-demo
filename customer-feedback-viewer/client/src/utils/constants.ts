export const API_BASE_URL = 'http://localhost:5000/api'; // Base URL for API calls
export const DEFAULT_PAGE_SIZE = 10; // Default number of feedback entries per page
export const FEEDBACK_STATUS_OPTIONS = ['Pending', 'Reviewed', 'Resolved']; // Possible feedback statuses
export const DEFAULT_SORT_ORDER = 'desc'; // Default sort order for feedback entries
export const FEEDBACK_API_ENDPOINTS = {
    GET_FEEDBACK: `${API_BASE_URL}/feedback`,
    POST_FEEDBACK: `${API_BASE_URL}/feedback`,
}; // API endpoints for feedback operations