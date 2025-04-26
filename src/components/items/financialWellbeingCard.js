export default function FinancialWellbeingCard({label, value}) {
    return (
        <div className="bg-gray-100 p-3 h-20 rounded-lg text-center">
            <div className="text-sm font-semibold text-gray-600">{label}</div>
            <div className="text-xl font-bold">{value}</div>
        </div>
    )
}