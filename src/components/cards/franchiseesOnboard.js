import { ArrowUpRight } from 'lucide-react';
import FranchisesStep from '../items/franchisesStep';
export default function FranchiseesOnboard() {
    return (
        <div className="p-4">
            <div className="flex items-start justify-between mb-4">
                <h2 className="font-semibold">Total Franchisees Onboard</h2>

            </div>


            <div className="flex items-center mt-2 text-2xl font-bold">
                <div className="flex items-center gap-2">
                    <h1 className='text-4xl'>14</h1>
                    <span className="flex items-center text-sm font-medium text-green-600 bg-white border border-green-600 px-2 py-0.5 rounded-full">
                        <ArrowUpRight size={14} className="mr-1" /> 7.4%
                    </span>
                </div>
                <div className="flex items-center space-x-[-5px] ml-auto">
                    {[...Array(5)].map((_, i) => (
                        <img
                            key={i}
                            src={`https://randomuser.me/api/portraits/men/${i + 10}.jpg`}
                            className="w-6 h-6 rounded-full border-2 border-white"
                        />
                    ))}
                    <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full border text-gray-600">+7</span>
                </div>
            </div>

            <div className="flex gap-1 mt-4 py-4 mb-2">
                <div className="h-4 rounded bg-sky-900 w-2/6" />
                <div className="h-4 rounded bg-sky-500 w-1/6" />
                <div className="h-4 rounded bg-sky-300 w-3/6" />
            </div>

            <div className="space-y-3 text-m">
                <FranchisesStep label="Stage 1 (Initial Inquiry)" color="bg-sky-900" count="02" />
                <FranchisesStep label="Stage 2 (Document Submission)" color="bg-sky-500" count="07" />
                <FranchisesStep label="Stage 3 ((Training))" color="bg-sky-300" count="05" />
            </div>
        </div>
    );
}

