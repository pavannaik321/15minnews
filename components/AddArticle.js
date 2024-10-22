"use client"; // Ensure this is a client component
import React, { useState } from 'react';

export default function AddArticle() {
    const [newspaperName, setNewspaperName] = useState("The Economic Times");
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [summary, setSummary] = useState("");
    const [highlights, setHighlights] = useState([]);
    const [highlightInput, setHighlightInput] = useState("");

    // To simulate the addition of articles
    const [articles, setArticles] = useState([]);

    // Function to handle form submission with validation
    const handleAddArticle = () => {
        // Check if any of the fields are empty
        if (!newspaperName || !date || !category || !title || !content || !summary || highlights.length === 0) {
            let missingFields = [];

            if (!newspaperName) missingFields.push("Newspaper Name");
            if (!date) missingFields.push("Date");
            if (!category) missingFields.push("Category");
            if (!title) missingFields.push("Title");
            if (!content) missingFields.push("Content");
            if (!summary) missingFields.push("Summary");
            if (highlights.length === 0) missingFields.push("Highlights");

            // Alert missing fields
            alert(`Missing the following field(s): ${missingFields.join(", ")}`);
            return; // Stop the function if fields are missing
        }

        // Create a new article if all fields are filled
        const newArticle = {
            id: articles.length + 1,
            newspaper: newspaperName,
            date: date,
            category: category,
            title: title,
            content: content,
            summary: summary,
            highlights: highlights
        };

        // Add new article to the list of articles
        setArticles([...articles, newArticle]);

        // Clear input fields after submission
        setCategory("");
        setTitle("");
        setContent("");
        setSummary("");
        setHighlights([]);
        setHighlightInput("");
    };


    // Function to add highlights
    const addHighlight = () => {
        if (highlightInput) {
            setHighlights([...highlights, highlightInput]);
            setHighlightInput("");
        }
    };

    return (
        <div className="p-6 ">
            <h1 className="text-2xl font-semibold mb-4 ">Admin Dashboard: Add Article</h1>

            {/* Form to add a new article */}
            <div className="bg-white shadow-lg p-6 rounded-lg ">
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2 ">Newspaper Name:</label>
                    <div className="relative">
                        <select
                            value={newspaperName}
                            onChange={(e) => setNewspaperName(e.target.value)}
                            className="block appearance-none border border-gray-300 rounded-md shadow-sm p-3 w-full text-gray-700 leading-tight focus:outline-none focus:ring "
                        >
                            <option value="The Economic Times">The Economic Times</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700 ">
                            <svg
                                className="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 10l5 5 5-5"
                                />
                            </svg>
                        </div>
                    </div>
                </div>


                <div className="mb-4 ">
                    <label className="block text-lg font-medium mb-2 ">Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md w-full "
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2 ">Category:</label>
                    <div className="relative">
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="block appearance-none border border-gray-300 rounded-md shadow-sm p-3 w-full text-gray-700 leading-tight focus:outline-none focus:ring "
                        >
                            <option value="">Select a Category</option>
                            <option value="Business">Business</option>
                            <option value="Technology">Technology</option>
                            <option value="Health">Health</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Politics">Politics</option>
                            <option value="Sports">Sports</option>
                            <option value="Finance">Finance</option>
                            <option value="Education">Education</option>
                            <option value="Lifestyle">Lifestyle</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700 ">
                            <svg
                                className="w-4 h-4 "
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 10l5 5 5-5"
                                />
                            </svg>
                        </div>
                    </div>
                </div>



                <div className="mb-4 ">
                    <label className="block text-lg font-medium mb-2 ">Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md w-full "
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2 ">Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md w-full "
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2 ">AI Summary:</label>
                    <textarea
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md w-full "
                    />
                </div>

                {/* Highlights Section */}
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2 ">Key Highlights:</label>
                    <div className="flex mb-2">
                        <input
                            type="text"
                            value={highlightInput}
                            onChange={(e) => setHighlightInput(e.target.value)}
                            className="border border-gray-300 p-2 rounded-md w-full "
                        />
                        <button
                            onClick={addHighlight}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 "
                        >
                            Add Highlight
                        </button>
                    </div>
                    <ul className="list-disc list-inside ml-4">
                        {highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                        ))}
                    </ul>
                </div>

                <button
                    onClick={handleAddArticle}
                    className="bg-green-500 text-white px-4 py-2 rounded-md "
                >
                    Add Article
                </button>
            </div>

            {/* Display added articles */}
            <div className="mt-8 ">
                <h2 className="text-xl font-semibold mb-4 ">Added Articles</h2>
                <ul className="space-y-4 ">
                    {articles.map((article) => (
                        <li key={article.id} className="border-b pb-4 ">
                            <h3 className="text-lg font-bold ">{article.title}</h3>
                            <p><strong>Category:</strong> {article.category}</p>
                            <p><strong>Date:</strong> {article.date}</p>
                            <p><strong>Content:</strong> {article.content}</p>
                            <p><strong>Summary:</strong> {article.summary}</p>
                            <p><strong>Highlights:</strong></p>
                            <ul className="list-disc list-inside ml-4 ">
                                {article.highlights.map((highlight, index) => (
                                    <li key={index}>{highlight}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
