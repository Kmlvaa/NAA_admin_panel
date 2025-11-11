import { Modal } from "@mantine/core";
import { BsCheckLg } from "react-icons/bs";

interface SuccessfulModalProps {
    opened: boolean;
    onClose: () => void;
}

export default function SuccessfulModal({ opened, onClose }: SuccessfulModalProps) {

    return (
        <Modal
            opened={opened}
            onClose={onClose}
            centered
            size="lg"
            title={null}
            classNames={{
                body: "p-0 relative",
            }}
        >
            <div className="flex flex-col items-center justify-center">
                <div className="bg-[#E7FFE1] text-white p-6 rounded-full">
                    <div className="bg-[#00CE4F] rounded-full p-4">
                        <BsCheckLg size={30}/>
                    </div>
                </div>
                <h2 className="font-semibold text-xl my-5">Added Successfully!</h2>
                <p className="text-center text-[#787486] text-xs">Your news added successfully</p>
                <div className="flex flex-row items-center justify-center gap-2 w-full">
                    <button onClick={onClose}
                        className="w-full mt-6 bg-[#243C7B] text-white rounded-lg py-3 text-sm hover:bg-[#33519f] cursor-pointer transition">
                        Ok
                    </button>
                </div>
            </div>
        </Modal>
    );
}
