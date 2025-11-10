import { Modal } from "@mantine/core";
import { BsTrash3 } from "react-icons/bs";

interface DeleteModalProps {
    openDelete: boolean;
    onClose: () => void;
}

export default function DeleteModal({ openDelete, onClose }: DeleteModalProps) {

    return (
        <Modal
            opened={openDelete}
            onClose={onClose}
            centered
            size="lg"
            title={null}
            classNames={{
                body: "p-0 relative",
            }}
        >
            <div className="flex flex-col items-center justify-center">
                <div className="bg-[#FDEEEE] text-[#D82C2C] p-8 rounded-full">
                    <BsTrash3 size={25}/>
                </div>
                <h2 className="font-semibold text-xl my-5">Delete Post</h2>
                <p className="text-center text-[#787486]">Are you sure you want to delete the post -
                    <span className="font-semibold text-[#4B505A] italic">Milli Aviasiya Akademiyasının təşkilatçılığı ilə hazırlanan “Research and Updates on the Use of Artificial Intelligence in Drone Technology” kitabı Springer Nature nəşriyyatında dərc olunub?</span>
                </p>
                <div className="flex flex-row items-center justify-center gap-2 w-full">
                    <button onClick={onClose}
                        className="w-full mt-6 bg-white border-[#F7F7F7] text-black rounded-lg py-3 text-sm hover:bg-[#FDEEEE] cursor-pointer transition">
                        No
                    </button>
                    <button
                        className="w-full mt-6 bg-[#D82C2C] text-white rounded-lg py-3 text-sm hover:bg-[#dc4242] cursor-pointer transition">
                        Yes
                    </button>
                </div>
            </div>
        </Modal>
    );
}
