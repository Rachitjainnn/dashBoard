export default function SmallSectionBox({ title ,children }) {
    return (
        <div className="bg-white rounded-xl w-[386px] h-[284px] border-1 border-gray-300">
            <h2 className="text-lg font-semibold">{title}</h2>
            {children}
        </div>
    )
}