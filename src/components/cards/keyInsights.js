
export default function KeyInsightsCard({ }) {
    return (
        <div className="h-full w-full p-4 ">
            <div className="flex items-start justify-between">
                <h2 className="font-semibold pb-2">Key Insights & Feedback</h2>
            </div>
            <div className="flex items-center justify-between mt-2">
                <div>
                    <h1 className="text-4xl font-bold">10%</h1>
                    <span className="text-sm font-semibold text-gray-600">Sales Growth</span>
                </div>
                <div className="flex">
                 
                    <span className="text-xs mt-1 px-3 py-1 text-blue-600 bg-blue-100 rounded-full">
                        Top Performer
                    </span>
                </div>
            </div>
            <hr className="my-4 text-gray-300 " />

            <div className="bg-gray-100 p-6 rounded-lg">
                <div className="text-sm font-semibold mb-1">Feedback</div>
                <div className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-2 h-2 mt-1 bg-gray-400 rounded-full" />
                    <p>Franchisees are requesting more detailed training materials.</p>
                </div>
            </div>
        </div>

    )
}