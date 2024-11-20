import React, { useEffect, useState } from 'react';

function UpdateJob({ jobId, onUpdate }) {
    const [job, setJob] = useState({ title: '', description: '', imageUrl: '' });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJob = async () => {
            const response = await fetch(`http://localhost:8000/api/job/${jobId}`);
            const data = await response.json();
            setJob(data);
            setLoading(false);
        };

        fetchJob();
    }, [jobId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJob({ ...job, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8000/api/job/${jobId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(job),
        });

        if (response.ok) {
            const updatedJob = await response.json();
            onUpdate(updatedJob); // Callback to update the parent component
        } else {
            console.error('Failed to update job');
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    value={job.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Description</label>
                <textarea
                    name="description"
                    value={job.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Image URL</label>
                <input
                    type="text"
                    name="imageUrl"
                    value={job.imageUrl}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Update Job</button>
        </form>
    );
}

export default UpdateJob;