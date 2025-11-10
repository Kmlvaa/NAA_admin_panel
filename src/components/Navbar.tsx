import logo from '../assets/naa-logo.svg'
import { BsBook, BsBuilding, BsChevronDoubleLeft, BsCloudSun, BsHouse, BsThreeDotsVertical } from 'react-icons/bs'
import Dropdown from './Dropdown'
import { IoSettingsOutline } from 'react-icons/io5'
import profilePhoto from '../assets/profilePhoto.png'
import { DropdownProvider } from '../context/DropdownContext'
import { motion, AnimatePresence } from 'framer-motion'
import { useSidebarExpanded } from '../context/NavbarContext'
import { useEffect, useRef, useState } from 'react'

export default function () {
    const { isExpanded, toggle } = useSidebarExpanded();

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <motion.div
                animate={{
                    width: isExpanded ? '240px' : '100px',
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                className={`fixed max-sm:hidden h-screen z-50 bg-white ${!isExpanded ? 'w-28 max-sm:w-16' : 'w-80 max-xl:w-60'}`}
            >
                <button
                    onClick={toggle}
                    className="absolute bottom-0 -right-6 bg-[#243C7B] text-white p-2 rounded-full shadow-md hover:bg-[#1a2c5c]"
                >
                    <motion.div
                        animate={{ rotate: !isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <BsChevronDoubleLeft size={18} />
                    </motion.div>
                </button>
                <div className='w-full relative border bg-white border-[#F7F7F7] rounded-2xl flex flex-col items-center justify-between'>
                    <div className={`w-full flex flex-row gap-1 border-b border-b-[#F7F7F7] p-5 ${!isExpanded ? 'justify-center' : 'justify-start'}`}>
                        <img src={logo} alt='NAA logo' />
                        <h3 className={`${!isExpanded ? 'hidden' : ''}`}>NAA Control Panel</h3>
                    </div>
                    <div className='w-full p-5 h-full'>
                        <DropdownProvider>
                            <ul className='flex flex-col gap-2'>
                                <Dropdown
                                    label='NAA Website'
                                    icons={{ name: BsHouse }}
                                    options={[
                                        { name: "Post", to: "/" },
                                        { name: "Media Library", to: "/about" },
                                        { name: "System Settings", to: "/about" },
                                    ]}
                                />
                                <Dropdown
                                    label='Library'
                                    icons={{ name: BsBook }}
                                    options={[
                                        { name: "Post", to: "/x" },
                                        { name: "Media Library", to: "/s" },
                                        { name: "System Settings", to: "/w" },
                                    ]}
                                />
                                <Dropdown
                                    label='Meteorology'
                                    icons={{ name: BsCloudSun }}
                                    options={[
                                        { name: "Post", to: "/d" },
                                        { name: "Media Library", to: "/d" },
                                        { name: "System Settings", to: "/w" },
                                    ]}
                                />
                                <Dropdown
                                    label='Museum'
                                    icons={{ name: BsBuilding }}
                                    options={[
                                        { name: "Post", to: "/e" },
                                        { name: "Media Library", to: "/d" },
                                        { name: "System Settings", to: "/r" },
                                    ]}
                                />
                            </ul>
                        </DropdownProvider>
                    </div>
                    <div className={`p-5 fixed max-sm:relative bottom-0 ${!isExpanded ? 'w-28' : 'w-60'}`}>
                        <div className={`w-full border border-[#F7F7F7] rounded-2xl p-5 text-[#787486] flex flex-row items-center gap-2 mb-3 ${!isExpanded ? 'justify-center' : ''}`}>
                            <IoSettingsOutline size={20} />
                            <h4 className={`${!isExpanded ? 'hidden' : ''}`}>Settings</h4>
                        </div>
                        <div className={`w-full bg-[#243C7B] border rounded-2xl px-5 py-3 flex flex-row items-center gap-2 ${!isExpanded ? 'justify-center p-2' : ''}`}>
                            <div className={`rounded-full ${!isExpanded ? 'w-10 h-10' : 'w-12 h-12'}`}>
                                <img src={profilePhoto} alt='profile photo' className='rounded-full cover w-full h-full' />
                            </div>
                            <div className={`flex flex-col items-start ${!isExpanded ? 'hidden' : ''}`}>
                                <h4 className='text-white text-sm'>Samira kamilova</h4>
                                <p className='text-[#ada9ba] text-[13px]'>Kmlvaaz</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

        {/*Small screens header*/}
            <div className="fixed min-sm:hidden w-full z-50 bg-white p-5 h-20 flex flex-row items-center justify-between border-b border-b-[#eaeaea]">
                {/* Logo */}
                <div>
                    <img src={logo} alt="NAA logo" className="h-8 w-auto" />
                </div>

                {/* Three dots icon */}
                <div className="relative">
                    <div
                        className="p-2 cursor-pointer"
                        onClick={() => setOpen((prev) => !prev)}
                    >
                        <BsThreeDotsVertical size={20} />
                    </div>

                    {/* Dropdown with motion like sidebar */}
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                ref={dropdownRef}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 260, damping: 30 }}
                                className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden"
                            >
                                <ul className="flex flex-col">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </>
    )
}
