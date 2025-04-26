import Link from "next/link"
import { usePathname } from "next/navigation";
export default function AppSideBarItems({ href, label, Icon, question }) {
    const path = usePathname();
    const isActive = path === href;

    return (
        <Link
        href={href}
        className={`flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-150
        ${isActive ? "bg-[#1D5C75] text-white" : "text-[#B0BEC5] hover:text-white hover:bg-[#1d5c7580]"}`
        }>
            <Icon
                className={`w-5 h-5${isActive ? " text-blue-500" : "text-gray-200"}`}
            />
            <div className="flex items-center justify-between w-full">
                <span 
                className={`text-sm font-medium ${isActive ? "text-blue-500" : "text-gray-200"}`}>
                    {label}
                </span>
                {question && (
                    <span
                    className="ml-auto bg-[#E3F2FD] text-[#11455D] rounded-full text-xs px-2 py-[1px] font-semibold">
                        {question}
                    </span>
                )}
            </div>
        </Link>
    )
}



