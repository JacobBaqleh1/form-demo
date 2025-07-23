import React from 'react';
import { Button, InputGroup, Select, MenuItem } from '@blueprintjs/core';

const FeedbackFilters = ({ onFilterChange }) => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [status, setStatus] = React.useState('all');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        onFilterChange(event.target.value, status);
    };

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
        onFilterChange(searchTerm, event.target.value);
    };

    return (
        <div className="feedback-filters">
            <InputGroup
                placeholder="Search feedback..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <Select
                value={status}
                onChange={handleStatusChange}
                options={[
                    { value: 'all', label: 'All' },
                    { value: 'resolved', label: 'Resolved' },
                    { value: 'pending', label: 'Pending' },
                ]}
            >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="resolved">Resolved</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
            </Select>
            <Button text="Apply Filters" onClick={() => onFilterChange(searchTerm, status)} />
        </div>
    );
};

export default FeedbackFilters;