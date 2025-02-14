import React, { useState } from 'react';

function FormWeekReport({onSubmit = (data) => {}}) {
    const [formData, setFormData] = useState({
        week: '',
        month: '',
        year: '',
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
                <label htmlFor="week">week:</label>
                <input type="number" id="week" name="week" value={formData.week} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="month">month:</label>
                <input type="number" id="month" name="month" value={formData.month} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="year">year:</label>
                <input type="number" id="year" name="year" value={formData.year} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormWeekReport;
