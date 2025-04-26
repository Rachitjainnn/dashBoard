
'use client'
import { IoHomeOutline, IoPeopleOutline, IoBarChartOutline, IoSettingsOutline } from "react-icons/io5";
import { GoChecklist, GoUpload, GoStack, GoQuestion } from "react-icons/go";
import { RxTarget } from "react-icons/rx";
import AppSideBarItems from "../items/sideBarItems";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";

export default function AppSideBar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Mobile menu button */}
            <button 
                onClick={() => setOpen(!open)} 
                className="md:hidden fixed top-4 left-4 z-50 bg-[#11455D] text-white p-2 rounded-md"
            >
                <IoMenuOutline size={24} />
            </button>

            <nav 
                className={`
                    flex flex-col bg-[#11455D] w-[248px] h-screen p-4 gap-2
                    fixed top-0 left-0 z-40
                    transform ${open ? 'translate-x-0' : '-translate-x-full'}
                    transition-transform duration-300
                    md:translate-x-0 md:static md:h-screen
                `}
            >
                <div className="flex flex-col gap-2">
                    <AppSideBarItems href='/' label='Home' Icon={IoHomeOutline} />
                    <AppSideBarItems href='/checklist' label='Stages & Checklist' Icon={GoChecklist} />
                    <AppSideBarItems href='/upload' label='Upload Docs' Icon={GoUpload} />
                    <AppSideBarItems href='/vendors' label='Preferred Vendors' Icon={IoPeopleOutline} />
                    <AppSideBarItems href='/tech' label='Tech Stack' Icon={GoStack} />
                    <AppSideBarItems href='/target' label='Target' Icon={RxTarget} />
                    <AppSideBarItems href='/zee' label='Zee Sales Target' Icon={IoBarChartOutline} />
                    <AppSideBarItems href='/settings' label='MAI Settings' Icon={IoSettingsOutline} />
                    <AppSideBarItems href='/questions' label='Pending Questions' Icon={GoQuestion} question={3} />
                </div>
                <div className="flex-grow" />

                <button className="text-sm text-white bg-[#1D5C75] px-4 py-2 rounded-md hover:bg-[#174a61]">
                    Logout
                </button>
            </nav>
        </>
    )
}


