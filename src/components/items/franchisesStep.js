export default function FranchisesStep({ label, color, count }) {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${color}`} />
                <span className="text-gray-700">{label}</span>
            </div>
            <span className="font-semibold">{count}</span>
        </div>
    );
}