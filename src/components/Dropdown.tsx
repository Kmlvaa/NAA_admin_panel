import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useDropdownContext } from "../context/DropdownContext";
import { AnimatePresence, motion } from "framer-motion";
import { useSidebarExpanded } from "../context/NavbarContext";

interface Props {
    label: string;
    icons: { name: React.ElementType }
    options: { name: string, to: string }[]
}

export default function Dropdown({ label, icons, options }: Props) {

    const { openDropdown, setOpenDropdown } = useDropdownContext();
    const location = useLocation();

    const isOpen = openDropdown === label;

    console.log(location.pathname)

    const toggleDropdown = () => {
        setOpenDropdown(isOpen ? null : label);
    };

    const { isExpanded } = useSidebarExpanded();

    return (
        <div className="w-full max-lg:relative">
            <motion.button
                onClick={toggleDropdown}
                className={`w-full flex items-center justify-between max-xs:justify-center p-4 rounded-2xl cursor-pointer ${isOpen ? 'bg-[#243C7B] text-white' : 'text-[#787486]'}`}

                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <div className='flex flex-row items-center justify-center gap-2'>
                    <icons.name size={20} />
                    <h4 className={`${!isExpanded ? 'hidden' : ''}`}>{label}</h4>
                </div>
                <div className={`${!isExpanded ? 'hidden' : ''}`}>
                    {isOpen ? <BsChevronUp /> : <BsChevronDown />}
                </div>
            </motion.button>

            <AnimatePresence>

                <div
                    className={`w-full bg-white border border-[#F7F7F7] rounded-2xl mt-2 overflow-hidden shadow-xs max-lg:absolute max-lg:w-40 z-999 transition-all duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"}`}
                >
                    <ul
                        className={`p-5 text-[14px] border border-[#F7F7F7] rounded-2xl`}
                    >
                        {options.map((option) => {
                            const isOptionActive = option.to === location.pathname;
                            return (
                                <li key={option.name}>
                                    <Link
                                        to={option.to}
                                        className={`block px-4 py-2 hover:text-blue-500 ${isOptionActive ? 'text-[#1447E6] ' : 'text-[#787486]'}`}
                                        onClick={() => setOpenDropdown(null)}
                                    >
                                        {option.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </AnimatePresence>
        </div>
    )
}
