import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function StepItem({ label, done }) {
    return (
        <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                <span className="text-sm text-gray-700">{label}</span>
            </div>
            <CheckCircleIcon
                className={`w-5 h-5 ${done ? 'text-green-500' : 'text-gray-300'}`}
            />
        </div>
    )
}