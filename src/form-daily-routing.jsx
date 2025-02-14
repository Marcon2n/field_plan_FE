import React, { useState } from 'react';

function FormDailyRouting({onSubmit = (data) => {}}) {
    const [formData, setFormData] = useState({
        job_daily_plan_id: ''
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
                <label htmlFor="job_daily_plan_id">Assignee:</label>
                <input type="text" id="job_daily_plan_id" name="job_daily_plan_id" value={formData.job_daily_plan_id} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormDailyRouting;
