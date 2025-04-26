export default function SectionBox({ children }) {
    return (
        <div className="  bg-white shadow lg:w-96 md:w-80 w-80 mx-6 gap-6 border-1 border-gray-300 rounded-xl">
            {children}
        </div>
    )
}