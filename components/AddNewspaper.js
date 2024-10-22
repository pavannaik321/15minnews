"use client"; // Ensure this is a client component
import React, { useState } from 'react';
import Link from 'next/link';

export default function AddNewspaper() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [country, setCountry] = useState('');
    const [language, setLanguage] = useState('');
    const [publishedDate, setPublishedDate] = useState(new Date().toISOString().split("T")[0]);
    const [newspaper, setNewspaper] = useState('The Economic Times'); // Newspaper dropdown state
    const [countryName, setCountryName] = useState('India'); // country dropdown state
    const [languageDefault, setLanguageDefault] = useState('English'); // country dropdown state
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newspaperData = {
            name,
            description,
            country,
            language,
            publishedDate,
            articles: [], // Initialize articles as an empty array
        };

        console.log('Newspaper Data:', newspaperData);

        // Simulate a successful database call with a timeout
        setTimeout(() => {
            
            alert(`Newspaper added successfully!`);
            console.log("Newspaper saved!");
            setIsSubmitted(true); // Set submitted state to true
            window.location.href = '/dashboard/addArticle';
        }, 1000);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md w-full max-w-lg space-y-4">
                <h2 className="text-2xl font-bold mb-4">Add Newspaper</h2>



                {/* Newspaper Dropdown */}
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2 ">Newspaper Name:</label>
                    <div className="relative">
                        <select
                            value={newspaper}
                            onChange={(e) => setName(e.target.value)}
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

                {/* Newspaper Description */}
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md w-full"
                        required
                    />
                </div>

                {/* Country */}
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2 ">Country:</label>
                    <div className="relative">
                        <select
                            value={countryName}
                            onChange={(e) => setCountry(e.target.value)}
                            className="block appearance-none border border-gray-300 rounded-md shadow-sm p-3 w-full text-gray-700 leading-tight focus:outline-none focus:ring "
                        >
                            <option value="India">India</option>
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

                {/* Language */}

                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2 ">Language:</label>
                    <div className="relative">
                        <select
                            value={languageDefault}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="block appearance-none border border-gray-300 rounded-md shadow-sm p-3 w-full text-gray-700 leading-tight focus:outline-none focus:ring "
                        >
                            <option value="English">English</option>
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

                {/* Published Date */}
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">Published Date:</label>
                    <input
                        type="date"
                        value={publishedDate}
                        onChange={(e) => setPublishedDate(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md w-full"
                    />
                </div>



                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Save Newspaper
                </button>

                <p >Newspaper Already Created , <Link href="/dashboard/addArticle"><span className='text-blue-500 '>Add Article</span> </Link></p>

            </form>


        </div>
    );
}
