import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useDropdownContext } from "../context/DropdownContext";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
    label: string;
    options: { name: string }[]
}

export default function FilterDropdown({ label, options }: Props) {

    const { openDropdown, setOpenDropdown } = useDropdownContext();

    const isOpen = openDropdown === label;

    const toggleDropdown = () => {
        setOpenDropdown(isOpen ? null : label);
    };

    return (
        <div className="relative w-full">
            <motion.button
                onClick={toggleDropdown}
                className="w-full flex items-center justify-between p-2 rounded-xl cursor-pointer border border-[#E5E7EB]"
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <div className='flex flex-row items-center justify-center gap-2'>
                    <h4>{label}</h4>
                </div>
                {isOpen ? <BsChevronUp /> : <BsChevronDown />}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="absolute w-full bg-white border border-[#F7F7F7] rounded-2xl mt-2 overflow-hidden shadow-xs z-20"
                    >
                        <ul
                            className={`p-3 text-[14px] border border-[#F7F7F7] rounded-xl overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            {options.map((option) => {
                                return (
                                    <li key={option.name}>
                                        <div
                                            className="block px-4 py-2 hover:text-blue-500 text-[#787486]"
                                            onClick={() => setOpenDropdown(null)}
                                        >
                                            {option.name}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
