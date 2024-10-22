"use client";
import React, { useEffect, useState } from 'react';
import bg from '../public/background.jpg'
import { useAuth } from '@/context/AuthContext';
import Loading from './Loading';
import AddNewspaper from './AddNewspaper';
import Login from './Login';

export default function Dashboard() {
    const [selectedPaper, setSelectedPaper] = useState("The Economic Times");
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    // State to manage the selected article and view mode
    const [selectedArticleId, setSelectedArticleId] = useState(null);
    const [viewMode, setViewMode] = useState('highlights'); // 'highlights', 'summary', or 'full'

    const { currentUser, loading } = useAuth()


    const isAdmin = false;


    if (loading) {

        return <Loading />

    }

    if (currentUser) {
        if (isAdmin) {
            return <AddNewspaper />
        }
    } else {
        return <Login />
    }

    // Sample article data with categories
    const articles = [
        // Economy Category
        {
            id: 1,
            title: "Economic Growth in 2024",
            content: "In 2024, global economic growth is expected to rise due to increased consumer spending and government investment. This anticipated growth comes on the heels of recovery efforts from the pandemic, where countries are aiming to rebuild their economies stronger than before Consumer confidence has been steadily improving, leading to higher spending. Many households are experiencing increased disposable income due to favorable job markets and wage growth. As a result, businesses are witnessing a surge in demand for goods and services, prompting them to increase production and hire more employees.Simultaneously, governments around the world are ramping up investments in infrastructure projects, renewable energy initiatives, and technology advancements. These investments not only aim to boost economic activity but also address long-term challenges such as climate change and digital transformation.",
            summary: "An overview of predicted economic growth rates in 2024. In 2024, global economic growth is expected to rise due to increased consumer spending and government investment. This growth is fueled by improved consumer confidence, higher disposable incomes, and strategic investments by governments in infrastructure and technology. While analysts are optimistic about GDP growth rates, potential challenges such as inflation and supply chain issues must be addressed to sustain momentum and ensure inclusive growth",
            highlights: ["GDP expected to rise", "Inflation rates stabilizing"],
            category: "Economy",
        },
        {
            id: 2,
            title: "Global Economic Outlook",
            content: "The global economy is set to recover with strong performance in Asia and North America...",
            summary: "Forecasting economic recovery and growth prospects for various regions.",
            highlights: ["Asia shows strong growth", "North America rebounds"],
            category: "Economy",
        },
        {
            id: 3,
            title: "Impact of Interest Rates on Economy",
            content: "The recent changes in interest rates are affecting consumer behavior and investment decisions...",
            summary: "Understanding the relationship between interest rates and economic activity.",
            highlights: ["Rising rates discourage borrowing", "Lower rates encourage spending"],
            category: "Economy",
        },
        {
            id: 4,
            title: "Unemployment Rates and Economic Recovery",
            content: "Analyzing how unemployment rates influence economic recovery in various sectors...",
            summary: "The link between employment levels and economic growth.",
            highlights: ["Unemployment rates declining", "Job creation in technology sector"],
            category: "Economy",
        },
        {
            id: 5,
            title: "Consumer Confidence Index Trends",
            content: "Consumer confidence is a key indicator of economic health and spending behavior...",
            summary: "Tracking the consumer confidence index and its implications.",
            highlights: ["High confidence boosts spending", "Low confidence leads to savings"],
            category: "Economy",
        },
        {
            id: 6,
            title: "Trade Agreements and Economic Impact",
            content: "How trade agreements shape economic growth and international relations...",
            summary: "Exploring the effects of new trade policies.",
            highlights: ["New trade deals signed", "Impact on local industries"],
            category: "Economy",
        },
        {
            id: 7,
            title: "Economic Inequality and Growth",
            content: "The rise of economic inequality and its impact on sustainable growth...",
            summary: "Understanding the challenges of economic inequality.",
            highlights: ["Wealth gap widening", "Effects on social stability"],
            category: "Economy",
        },
        {
            id: 8,
            title: "The Future of Work and Economy",
            content: "How remote work and automation are transforming the workforce...",
            summary: "Evaluating the implications of the future of work.",
            highlights: ["Shift to remote work", "Increased automation in industries"],
            category: "Economy",
        },
        {
            id: 9,
            title: "Inflation Trends and Consumer Prices",
            content: "Inflation is affecting purchasing power and leading to changes in consumer behavior...",
            summary: "Analyzing the factors driving inflation and its impact.",
            highlights: ["Rising prices in essential goods", "Inflation expected to stabilize"],
            category: "Economy",
        },
        {
            id: 10,
            title: "Financial Markets and Economic Growth",
            content: "The correlation between stock market performance and economic indicators...",
            summary: "How financial markets reflect economic health.",
            highlights: ["Stock market hitting new highs", "Economic indicators showing positive trends"],
            category: "Economy",
        },

        // Market Category
        {
            id: 11,
            title: "Market Trends Shaping 2024",
            content: "Key market trends for 2024 include a surge in the technology sector and fluctuations in energy prices...",
            summary: "Key trends expected in the global market in 2024.",
            highlights: ["Tech sector booming", "Energy prices fluctuating"],
            category: "Market",
        },
        {
            id: 12,
            title: "Consumer Electronics Market Growth",
            content: "The consumer electronics market is set to grow with innovations in smart devices...",
            summary: "Exploring growth prospects in consumer electronics.",
            highlights: ["Smart devices gaining popularity", "Shift towards sustainability"],
            category: "Market",
        },
        {
            id: 13,
            title: "Retail Industry Innovations",
            content: "Innovations in the retail industry are reshaping consumer experiences and sales strategies...",
            summary: "The future of retail in a digital world.",
            highlights: ["Rise of e-commerce", "In-store technology enhancements"],
            category: "Market",
        },
        {
            id: 14,
            title: "Automotive Market Dynamics",
            content: "The automotive market is witnessing shifts towards electric vehicles and sustainability...",
            summary: "Key factors influencing the automotive industry.",
            highlights: ["Electric vehicle adoption rising", "Sustainability driving innovation"],
            category: "Market",
        },
        {
            id: 15,
            title: "Real Estate Trends in 2024",
            content: "The real estate market is adapting to new consumer preferences and investment strategies...",
            summary: "Trends shaping the real estate market.",
            highlights: ["Remote work influencing housing choices", "Urban vs suburban trends"],
            category: "Market",
        },
        {
            id: 16,
            title: "Global Supply Chain Challenges",
            content: "Supply chain disruptions are impacting markets and economies worldwide...",
            summary: "Understanding the global supply chain crisis.",
            highlights: ["Logistics issues causing delays", "Impact on product availability"],
            category: "Market",
        },
        {
            id: 17,
            title: "Stock Market Predictions for 2024",
            content: "Analysts predict volatility in the stock market amid global economic changes...",
            summary: "Forecasting stock market performance.",
            highlights: ["Tech stocks expected to lead", "Market corrections anticipated"],
            category: "Market",
        },
        {
            id: 18,
            title: "Investment Trends in Renewable Energy",
            content: "Investment in renewable energy is becoming a priority for many investors...",
            summary: "Examining the rise of renewable energy investments.",
            highlights: ["Green energy projects on the rise", "Government incentives for clean energy"],
            category: "Market",
        },
        {
            id: 19,
            title: "The Gig Economy and Market Changes",
            content: "The gig economy is reshaping labor markets and employment dynamics...",
            summary: "Understanding the impact of gig work on traditional jobs.",
            highlights: ["Rise of freelance work", "Flexibility in employment"],
            category: "Market",
        },

        // Environment Category
        {
            id: 20,
            title: "The Rise of Renewable Energy",
            content: "As the world focuses on sustainability, renewable energy sources are becoming more mainstream...",
            summary: "The shift towards renewable energy is accelerating.",
            highlights: ["Solar energy adoption increasing", "Government incentives for renewables"],
            category: "Environment",
        },
        {
            id: 21,
            title: "Climate Change and its Effects",
            content: "Climate change is impacting weather patterns, ecosystems, and human activities...",
            summary: "Exploring the implications of climate change.",
            highlights: ["Increased frequency of extreme weather", "Impact on agriculture"],
            category: "Environment",
        },
        {
            id: 22,
            title: "Conservation Efforts Worldwide",
            content: "Global conservation efforts are crucial in protecting endangered species and habitats...",
            summary: "The importance of biodiversity and conservation.",
            highlights: ["Protected areas increasing", "Focus on sustainable practices"],
            category: "Environment",
        },
        {
            id: 23,
            title: "Sustainable Practices in Business",
            content: "More businesses are adopting sustainable practices to reduce their environmental footprint...",
            summary: "Examining sustainable business strategies.",
            highlights: ["Sustainable sourcing becoming essential", "Corporate responsibility rising"],
            category: "Environment",
        },
        {
            id: 24,
            title: "Pollution and Public Health",
            content: "Air and water pollution continue to pose significant health risks worldwide...",
            summary: "The relationship between pollution and health outcomes.",
            highlights: ["Pollution-related illnesses rising", "Government regulations tightening"],
            category: "Environment",
        },
        {
            id: 25,
            title: "The Role of Technology in Sustainability",
            content: "Innovations in technology are playing a key role in promoting sustainability...",
            summary: "How technology is helping combat climate change.",
            highlights: ["Smart technologies for energy efficiency", "Data analytics in resource management"],
            category: "Environment",
        },
        {
            id: 26,
            title: "Water Scarcity and Management",
            content: "Water scarcity is becoming a critical issue in many regions around the world...",
            summary: "Understanding the challenges of water management.",
            highlights: ["Innovative water conservation techniques", "Policy reforms needed"],
            category: "Environment",
        },
        {
            id: 27,
            title: "Renewable Energy Sources and Their Benefits",
            content: "Exploring various renewable energy sources and their advantages...",
            summary: "Benefits of transitioning to renewable energy.",
            highlights: ["Lower carbon emissions", "Energy independence"],
            category: "Environment",
        },
        {
            id: 28,
            title: "Impact of Deforestation",
            content: "Deforestation is leading to loss of biodiversity and disruption of ecosystems...",
            summary: "Examining the effects of deforestation on the environment.",
            highlights: ["Biodiversity loss", "Impact on indigenous communities"],
            category: "Environment",
        },
        {
            id: 29,
            title: "Sustainable Agriculture Practices",
            content: "Sustainable agriculture is essential for food security and environmental health...",
            summary: "Innovative farming practices for sustainability.",
            highlights: ["Organic farming on the rise", "Agroforestry benefits"],
            category: "Environment",
        },

        // Society Category
        {
            id: 30,
            title: "The Impact of Social Media on Society",
            content: "Social media is influencing public opinion, shaping culture, and affecting communication...",
            summary: "Exploring the effects of social media.",
            highlights: ["Increased connectivity", "Mental health concerns"],
            category: "Society",
        },
        {
            id: 31,
            title: "Mental Health Awareness",
            content: "Raising awareness about mental health is critical in today's society...",
            summary: "Understanding the importance of mental health awareness.",
            highlights: ["Stigma reduction efforts", "Access to mental health services"],
            category: "Society",
        },
        {
            id: 32,
            title: "Cultural Diversity and Inclusion",
            content: "Promoting cultural diversity and inclusion is essential for social cohesion...",
            summary: "The benefits of embracing cultural diversity.",
            highlights: ["Strengthening community ties", "Fostering creativity"],
            category: "Society",
        },
        {
            id: 33,
            title: "Education and Social Change",
            content: "Education plays a vital role in driving social change and development...",
            summary: "The impact of education on society.",
            highlights: ["Access to education improving", "Lifelong learning emphasized"],
            category: "Society",
        },
        {
            id: 34,
            title: "Gender Equality Progress",
            content: "Advancements in gender equality are critical for a just society...",
            summary: "Evaluating progress towards gender equality.",
            highlights: ["Women in leadership roles increasing", "Awareness campaigns gaining traction"],
            category: "Society",
        },
        {
            id: 35,
            title: "The Role of Technology in Social Change",
            content: "Technology is driving significant changes in how societies function...",
            summary: "Exploring technology's role in social progress.",
            highlights: ["Digital divide remains a challenge", "Technology facilitating activism"],
            category: "Society",
        },
        {
            id: 36,
            title: "Youth Activism and Change",
            content: "Youth activism is rising, driving social change on various issues...",
            summary: "The influence of youth on social movements.",
            highlights: ["Climate action led by youth", "Social justice movements gaining support"],
            category: "Society",
        },
        {
            id: 37,
            title: "Impact of Aging Population",
            content: "An aging population presents both challenges and opportunities for society lorem",
            summary: "Understanding the implications of demographic changes.",
            highlights: ["Healthcare demands increasing", "Retirement planning becoming critical"],
            category: "Society",
        },
        {
            id: 38,
            title: "Social Media and Activism",
            content: "The role of social media in mobilizing support for social causes...",
            summary: "Exploring how platforms facilitate activism.",
            highlights: ["Viral campaigns making impact", "Online communities forming around issues"],
            category: "Society",
        },

        // Finance Category
        {
            id: 39,
            title: "Cryptocurrency Trends in 2024",
            content: "As cryptocurrency gains popularity, its impact on the economy and regulations will be significant...",
            summary: "Analyzing trends in cryptocurrency for 2024.",
            highlights: ["Regulations expected to increase", "Adoption by major businesses"],
            category: "Finance",
        },
        {
            id: 40,
            title: "Stock Market Analysis",
            content: "A detailed look at the current trends in the stock market and investment strategies...",
            summary: "Key insights for investors in 2024.",
            highlights: ["Market volatility expected", "Investment diversification recommended"],
            category: "Finance",
        },
        {
            id: 41,
            title: "Financial Literacy and Education",
            content: "Improving financial literacy is essential for informed decision-making...",
            summary: "The importance of financial education in schools.",
            highlights: ["Financial courses being introduced", "Empowerment through knowledge"],
            category: "Finance",
        },
        {
            id: 42,
            title: "Personal Finance Tips for Young Adults",
            content: "Practical advice for young adults to manage their finances effectively...",
            summary: "Guidelines for budgeting and saving.",
            highlights: ["Setting financial goals", "Importance of emergency funds"],
            category: "Finance",
        },
        {
            id: 43,
            title: "The Role of Central Banks",
            content: "Understanding how central banks influence economic stability and growth...",
            summary: "The impact of monetary policy on the economy.",
            highlights: ["Interest rates and inflation control", "Role in financial crises"],
            category: "Finance",
        },
        {
            id: 44,
            title: "Investment Strategies for 2024",
            content: "Evaluating effective investment strategies in the current economic climate...",
            summary: "Tips for making informed investment choices.",
            highlights: ["Focus on long-term gains", "Emerging markets offering opportunities"],
            category: "Finance",
        },
        {
            id: 45,
            title: "Understanding Credit Scores",
            content: "What you need to know about credit scores and their importance in financial decisions...",
            summary: "Demystifying credit scores and their impact.",
            highlights: ["Factors affecting credit scores", "Improving your credit score"],
            category: "Finance",
        },
        {
            id: 46,
            title: "The Future of Banking",
            content: "How technology is transforming the banking industry and customer experiences...",
            summary: "The rise of fintech and its implications.",
            highlights: ["Digital banking growth", "Innovations in payment systems"],
            category: "Finance",
        },
        {
            id: 47,
            title: "Real Estate Investment Trends",
            content: "Examining the latest trends in real estate investment for 2024...",
            summary: "Opportunities in the real estate market.",
            highlights: ["Residential vs commercial investment", "Impact of remote work on real estate"],
            category: "Finance",
        },
        {
            id: 48,
            title: "Economic Policies and Market Impact",
            content: "Analyzing how government policies affect market dynamics and investor behavior...",
            summary: "Understanding the interplay between policy and finance.",
            highlights: ["Tax reforms influencing investments", "Trade policies affecting markets"],
            category: "Finance",
        },
    ];

    // Categorizing articles
    const categorizedArticles = articles.reduce((acc, article) => {
        if (!acc[article.category]) {
            acc[article.category] = [];
        }
        acc[article.category].push(article);
        return acc;
    }, {});

    // Function to filter articles based on selected category
    const filteredArticles = selectedCategory === "All Categories"
        ? articles
        : categorizedArticles[selectedCategory] || [];



    // Function to handle button click
    const handleView = (articleId, mode) => {
        setSelectedArticleId(articleId);
        setViewMode(mode);
    };
    const readAloud = (text) => {
        const speech = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);

        // Optionally set voice, pitch, and rate
        utterance.pitch = 0.2; // Range: 0 to 2
        utterance.rate = 1.3; // Range: 0.1 to 10
        utterance.volume = 0.8; // Range: 0 to 1

        speech.speak(utterance);
    };

    return (
        <div className="flex flex-col flex-1 ">
            {/* Newspaper and Date Selection */}
            <div className=" flex space-x-6 items-center justify-between">
                <div className="mb-6">
                    <label className="block text-lg font-semibold mb-2">Choose a Newspaper:</label>
                    <div className="relative">
                        <select
                            className="block appearance-none border border-gray-300 rounded-md shadow-sm p-3 w-full text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500"
                            value={selectedPaper}
                            onChange={(e) => setSelectedPaper(e.target.value)}
                            disabled // For now, it only has one option
                        >
                            <option value="The Economic Times">The Economic Times</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-700">
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


                <div className="mb-6">
                    <label className="block text-lg font-semibold mb-2">Select Date:</label>
                    <input
                        type="date"
                        className="border border-gray-300 p-3 rounded-md w-full shadow-sm focus:outline-none focus:ring focus:ring-blue-500 transition duration-150 ease-in-out"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                </div>

            </div>

            {/* Category Selection using Buttons */}
            <div className="mb-6">
                <label className="block text-lg font-medium mb-2">Choose a Category:</label>
                <div className="flex space-x-2 flex-wrap gap-2">
                    <button
                        className={`border border-gray-300 p-2 rounded-md ${selectedCategory === "All Categories" ? 'bg-gray-300' : 'hover:bg-gray-100'}`}
                        onClick={() => setSelectedCategory("All Categories")}
                    >
                        All Categories
                    </button >
                    {Object.keys(categorizedArticles).map((category) => (
                        <button
                            key={category}
                            className={`border border-gray-300 p-2 rounded-md ${selectedCategory === category ? 'bg-gray-300' : 'hover:bg-gray-100'}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Display Selected Newspaper */}
            <div className="bg-white shadow-lg rounded-lg p-4 mb-6 " >
                <h2 className="text-xl font-bold mb-4 ">Newspaper : {selectedPaper}</h2>

                {/* Articles */}
                <div className="space-y-4">
                    {filteredArticles.map((article) => (
                        <div key={article.id} className="bg-gray-50 p-4 rounded-lg shadow"  >
                            <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                            <div className="flex space-x-4 mb-4">
                                <button
                                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                    onClick={() => handleView(article.id, 'full')}
                                >
                                    View Full Article
                                </button>
                                <button
                                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 "
                                    onClick={() => handleView(article.id, 'summary')}
                                >
                                    View AI Summary
                                </button>
                                <button
                                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                                    onClick={() => handleView(article.id, 'highlights')}
                                >
                                    View Key Highlights
                                </button>
                            </div>

                            {/* Display Selected Content for the Current Article */}
                            {selectedArticleId === article.id && (
                                <div className="mt-4">
                                    <div className='flex flex-row gap-3'><h5 className="text-lg font-semibold">{(viewMode == "full") ? "Full Article" : (viewMode == "summary") ? "AI Summary" : "Key Highlights"}</h5>
                                        <button
                                            onClick={() => {
                                                const textToRead = viewMode === 'full'
                                                    ? article.content
                                                    : viewMode === 'summary'
                                                        ? article.summary
                                                        : article.highlights.join(', '); // Use join to create a single string
                                                readAloud(textToRead); // Read the selected text aloud
                                            }} className="text-blue-500 hover:text-blue-700">
                                            📢
                                        </button>
                                    </div>
                                    {viewMode === 'full' && <p>{article.content}</p>}
                                    {viewMode === 'summary' && <p>{article.summary}</p>}
                                    {viewMode === 'highlights' && (
                                        <ul className="list-disc list-inside ml-4 text-gray-700">
                                            {article.highlights.map((highlight, index) => (
                                                <li key={index}>{highlight}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
