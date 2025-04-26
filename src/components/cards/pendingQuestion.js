import React from 'react';
import QuestionsItem from '../items/questionItem';


export default function PendingQuestions() {
    // Sample data for questions
    const questionUser = [{
        id: '@phoenix',
        name: 'Phoenix Baker',
        lastSeen: '2min',
        profilePicture: 'https://randomuser.me/api/portraits/men/32.jpg',
        question: 'What are the requirements for opening a new stores?',
    },
    {
        id: '@koray',
        name: 'Koray Okumus',
        lastSeen: '4hr',
        profilePicture: 'https://randomuser.me/api/portraits/men/75.jpg',
        question: 'How do I manage inventory effectively?',
    }]


    return (
        <div className="max-w-md bg-white p-4 rounded-2xl ">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Pending Questions</h2>
                <div className="bg-[#2FBDFF] text-white text-m font-semibold py-0.5 px-3 rounded-md">
                    {questionUser.length}
                </div>
            </div>
            {/* Questions List */}
            {questionUser.map((user, index) => (
                <div key={index}>
                    <hr className="my-1 text-gray-300" />

                    <QuestionsItem key={index} questionUser={user} />
                </div>
            ))}
        </div>
    );
};


