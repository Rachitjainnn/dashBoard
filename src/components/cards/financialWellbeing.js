import { ArrowUpRight } from 'lucide-react';
import FinancialWellbeingCard from '../items/financialWellbeingCard';

export default function FinancialWellbeing() {
    return (
      <div className="h-full w-full p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between">
            <h2 className="font-semibold">Financial Wellbeing</h2>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div>
              <h1 className="text-4xl font-bold">20</h1>
              <span className="text-sm font-semibold text-gray-600">Total Franchisees</span>
            </div>
            <span className="flex items-center text-sm font-medium text-green-600 bg-white border border-green-600 px-2 py-0.5 rounded-full">
              <ArrowUpRight size={14} className="mr-1" /> 2.1%
            </span>
          </div>
        </div>
  
        <hr className="my-4 text-gray-300" />
  
        <div className="grid grid-cols-2 gap-2 ">
            <FinancialWellbeingCard label="Target" value="$500,000" />
            <FinancialWellbeingCard label="Current" value="$450,000" />
        </div>
      </div>
    );
  }
  