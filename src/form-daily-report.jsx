import React, { useState } from 'react';

function FormDailyReport({onSubmit = (data) => {}}) {
    const [formData, setFormData] = useState({
        assignee: '',
        fromDate: '',
        toDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        // Here you can add code to handle the form submission, such as sending the data to a server.
        // alert('Form submitted!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="assignee">Assignee:</label>
                <input type="text" id="assignee" name="assignee" value={formData.assignee} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="fromDate">From Date:</label>
                <input type="text" id="fromDate" name="fromDate" value={formData.fromDate} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="toDate">To Date:</label>
                <input type="text" id="toDate" name="toDate" value={formData.toDate} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormDailyReport;
