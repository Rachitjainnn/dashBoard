'use client';
import React from 'react';
import { useState } from "react";

export default function ChatbotWelcome() {
    const [inputValue, setInputValue] = useState("");
    return (
        <div className="flex flex-col items-center justify-center w-full bg-gray-100 p-4 ">
            {/* Icon */}
            <div>
                <img
                    src="/Logo.png"
                    alt="Logo"
                    className="w-18 h-18 object-contain"
                />
            </div>

            {/* Title */}
            <h1 className="text-4xl font-semibold text-gray-800 my-2 text-center">
                Welcome to the AI Chat Assistant
            </h1>

            {/* Input Box */}
            <div className="w-full max-w-2xl my-6">
                <div className="flex items-center bg-white border-1 border-gray-400 rounded-lg px-4 py-2 shadow-sm">
                    <input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        type="text"
                        placeholder="Ask your question here.."
                        className="flex-grow focus:outline-none bg-transparent placeholder-gray-400"
                    />
                    <button className="text-gray-400 hover:text-gray-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};
