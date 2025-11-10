import { Modal } from "@mantine/core";
import { useState } from "react";
import { BsEraser, BsFilter, BsFilterLeft, BsFilterRight, BsLink45Deg, BsListOl, BsListUl, BsMegaphone, BsNewspaper, BsUpload, BsXLg } from "react-icons/bs";

interface PostModalProps {
    opened: boolean;
    onClose: () => void;
}

export default function PostModal({ opened, onClose }: PostModalProps) {

    const [step, setStep] = useState<1 | 2>(1);


    return (
        <Modal
            opened={opened}
            onClose={onClose}
            withCloseButton={false}
            centered
            size="lg"
            title={null}
            classNames={{
                body: "p-0 relative",
            }}
        >
            {step === 1 && (
                <div>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-row items-center gap-2">
                            <button className="border-[#243C7B] border px-2 text-[#374151] rounded-full flex flex-row gap-1 items-center cursor-pointer">
                                <svg width="16" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g clip-path="url(#AZ_svg__a)">
                                        <path
                                            d="M24 12c0-1.468-.264-2.874-.746-4.174L12 7.304.746 7.826A11.975 11.975 0 0 0 0 12c0 1.468.264 2.874.746 4.174L12 16.696l11.254-.522c.482-1.3.746-2.706.746-4.174Z"
                                            fill="#D80027"
                                        />
                                        <path d="M12 24c5.16 0 9.559-3.257 11.254-7.826H.747C2.443 20.744 6.841 24 12.001 24Z"
                                            fill="#6DA544" />
                                        <path d="M.747 7.825h22.507C21.56 3.255 17.16 0 12.001 0 6.84-.001 2.443 3.256.747 7.825Z"
                                            fill="#338AF3" />
                                        <path
                                            d="M12.26 15.391a3.391 3.391 0 1 1 1.614-6.375 4.174 4.174 0 1 0 0 5.967c-.48.26-1.03.408-1.613.408Z"
                                            fill="#F0F0F0"
                                        />
                                        <path
                                            d="m14.87 9.65.449 1.264 1.21-.576-.575 1.211 1.263.45-1.263.449.575 1.21-1.21-.575-.45 1.263-.449-1.263-1.21.576.575-1.211-1.264-.45 1.264-.449-.576-1.21 1.211.575.45-1.263Z"
                                            fill="#F0F0F0"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="AZ_svg__a">
                                            <path fill="#fff" d="M0 0h24v24H0z" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p>Az</p>
                            </button>
                            <button className="border-[#E5E5E5] border px-2 text-[#374151] rounded-full flex flex-row gap-1 items-center cursor-pointer">
                                <svg width="16" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g clip-path="url(#RU_svg__a)">
                                        <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
                                            fill="#F0F0F0" />
                                        <path
                                            d="M23.254 16.173c.482-1.3.746-2.706.746-4.173 0-1.468-.264-2.874-.746-4.174H.746A11.974 11.974 0 0 0 0 11.999c0 1.468.264 2.874.746 4.174L12 17.217l11.254-1.044Z"
                                            fill="#0052B4"
                                        />
                                        <path d="M12 24c5.16 0 9.559-3.257 11.254-7.827H.747C2.443 20.743 6.841 24 12.001 24Z"
                                            fill="#D80027" />
                                    </g>
                                    <defs>
                                        <clipPath id="RU_svg__a">
                                            <path fill="#fff" d="M0 0h24v24H0z" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p>Ru</p>
                            </button>
                        </div>

                        <button className="text-[#374151] cursor-pointer" onClick={onClose}> <BsXLg /> </button>
                    </div>
                    <div className="p-6 font-sans">

                        {/* Header */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-medium">Create News / Announcement</h2>
                                <span className="text-gray-500 text-sm">1/2</span>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <div className={`w-1/2 h-1 rounded-full ${step === 1 ? 'bg-[#243C7B]' : 'bg-[#E0E7FA]'}`}></div>
                                <div className={`w-1/2 h-1 rounded-full ${step === 2 ? 'bg-[#243C7B]' : 'bg-[#E0E7FA]'}`}></div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="space-y-5">

                            <div>
                                <label className="block text-sm font-medium text-[#374151] mb-1">Title</label>
                                <input
                                    type="text"
                                    placeholder="Enter title"
                                    className="w-full border border-[#F7F7F7] rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#374151]  mb-1">Slug</label>
                                <input
                                    type="text"
                                    placeholder="naa.edu.az/"
                                    className="w-full border border-[#F7F7F7] rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#374151] mb-1">Category</label>
                                <div className="flex gap-3">
                                    <button className="flex flex-row items-center gap-2 px-4 py-2 rounded-full border border-[#1447E6] text-[#1447E6] text-sm hover:bg-[#1447E6] hover:text-white cursor-pointer">
                                        <BsNewspaper />
                                        <p>News</p>
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#1447E6] text-[#1447E6] text-sm hover:bg-[#1447E6] hover:text-white cursor-pointer">
                                        <BsMegaphone />
                                        <p>Announcement</p>
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#374151] mb-1">Cover Image</label>
                                <div className="w-full border border-[#F0F0F0] rounded-lg py-2 text-center text-gray-500 text-sm cursor-pointer hover:bg-gray-50">
                                    Upload Cover Image
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#374151] mb-1">HTML Content</label>
                                <p className="text-[#374151] text-xs mb-3">Use the toolbar to format your text with bold, italic, headers, lists, and more.</p>

                                <div className="border border-[#F0F0F0] rounded-lg overflow-hidden">

                                    <div className="px-3 py-2 border-b text-black border-b-[#F0F0F0] text-xs flex flex-row items-start justify-start gap-3">
                                        <button className="p-1 hover:bg-gray-200 rounded cursor-pointer">
                                            <strong>B</strong>
                                        </button>
                                        <button className="p-1 hover:bg-gray-200 rounded italic cursor-pointer">
                                            I
                                        </button>
                                        <button className="p-1 hover:bg-gray-200 rounded underline cursor-pointer">
                                            U
                                        </button>
                                        <button className="p-1 hover:bg-gray-200 rounded text-sm font-semibold cursor-pointer">
                                            H1
                                        </button>
                                        <button className="p-1 hover:bg-gray-200 rounded text-sm font-semibold cursor-pointer">
                                            H2
                                        </button>
                                        <button className="p-1 hover:bg-gray-200 rounded text-sm font-semibold cursor-pointer">
                                            H3
                                        </button>
                                        <button className="p-1 hover:bg-gray-200 rounded text-xl cursor-pointer">
                                            P
                                        </button>
                                        <button className="p-1 hover:bg-gray-200 rounded text-sm cursor-pointer">
                                            <BsFilterLeft />
                                        </button>
                                        <button className="p-1 hover:bg-gray-200 rounded text-sm cursor-pointer">
                                            <BsFilter />
                                        </button>
                                        <button className="p-1 hover:bg-gray-200 rounded text-sm cursor-pointer">
                                            <BsFilterRight />
                                        </button>
                                        <button className="p-1 hover:bg-gray-200 rounded text-sm cursor-pointer">
                                            <BsListUl />
                                        </button>
                                        <button className="p-1 hover:bg-gray-200 rounded text-sm cursor-pointer">
                                            <BsListOl />
                                        </button>
                                        <button className="p-1 hover:bg-gray-200 rounded cursor-pointer">
                                            <BsLink45Deg />
                                        </button>
                                        <button className="p-1 hover:bg-gray-200 rounded cursor-pointer">
                                            <BsEraser />
                                        </button>
                                    </div>

                                    <div className="h-40 bg-white text-sm text-[#F7F7F7] border-b rounded-lg">
                                        <textarea className="w-full h-full" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button onClick={() => setStep(2)}
                            className="w-full mt-6 bg-[#243C7B] text-white rounded-lg py-3 text-sm hover:bg-[#3D5DB2] cursor-pointer transition">
                            Next
                        </button>
                    </div>
                </div>
            )}
            {step === 2 && (
                <div>
                    <div className="flex justify-between items-center flex-row">
                        <div className="flex flex-row items-center gap-2 ">
                            <button className="border-[#243C7B] border px-2 text-[#374151] rounded-full flex flex-row gap-1 items-center cursor-pointer">
                                <svg width="16" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g clip-path="url(#AZ_svg__a)">
                                        <path
                                            d="M24 12c0-1.468-.264-2.874-.746-4.174L12 7.304.746 7.826A11.975 11.975 0 0 0 0 12c0 1.468.264 2.874.746 4.174L12 16.696l11.254-.522c.482-1.3.746-2.706.746-4.174Z"
                                            fill="#D80027"
                                        />
                                        <path d="M12 24c5.16 0 9.559-3.257 11.254-7.826H.747C2.443 20.744 6.841 24 12.001 24Z"
                                            fill="#6DA544" />
                                        <path d="M.747 7.825h22.507C21.56 3.255 17.16 0 12.001 0 6.84-.001 2.443 3.256.747 7.825Z"
                                            fill="#338AF3" />
                                        <path
                                            d="M12.26 15.391a3.391 3.391 0 1 1 1.614-6.375 4.174 4.174 0 1 0 0 5.967c-.48.26-1.03.408-1.613.408Z"
                                            fill="#F0F0F0"
                                        />
                                        <path
                                            d="m14.87 9.65.449 1.264 1.21-.576-.575 1.211 1.263.45-1.263.449.575 1.21-1.21-.575-.45 1.263-.449-1.263-1.21.576.575-1.211-1.264-.45 1.264-.449-.576-1.21 1.211.575.45-1.263Z"
                                            fill="#F0F0F0"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="AZ_svg__a">
                                            <path fill="#fff" d="M0 0h24v24H0z" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p>Az</p>
                            </button>
                            <button className="border-[#E5E5E5] border px-2 text-[#374151] rounded-full flex flex-row gap-1 items-center cursor-pointer">
                                <svg width="16" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g clip-path="url(#RU_svg__a)">
                                        <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
                                            fill="#F0F0F0" />
                                        <path
                                            d="M23.254 16.173c.482-1.3.746-2.706.746-4.173 0-1.468-.264-2.874-.746-4.174H.746A11.974 11.974 0 0 0 0 11.999c0 1.468.264 2.874.746 4.174L12 17.217l11.254-1.044Z"
                                            fill="#0052B4"
                                        />
                                        <path d="M12 24c5.16 0 9.559-3.257 11.254-7.827H.747C2.443 20.743 6.841 24 12.001 24Z"
                                            fill="#D80027" />
                                    </g>
                                    <defs>
                                        <clipPath id="RU_svg__a">
                                            <path fill="#fff" d="M0 0h24v24H0z" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p>Ru</p>
                            </button>
                        </div>

                        <button className="text-[#374151] cursor-pointer" onClick={onClose}> <BsXLg /> </button>
                    </div>

                    <div className="p-6 font-sans">

                        {/* Header */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-medium">Create News / Announcement</h2>
                                <span className="text-gray-500 text-sm">2/2</span>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <div className={`w-1/2 h-1 rounded-full ${step === 2 ? 'bg-[#243C7B]' : 'bg-[#E0E7FA]'}`}></div>
                                <div className={`w-1/2 h-1 rounded-full ${step === 2 ? 'bg-[#243C7B]' : 'bg-[#E0E7FA]'}`}></div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-[#374151] mb-1">Gallery Images</label>
                            <p className="text-[#374151] text-xs mb-3">JPG/PNG, multiple allowed</p>
                            <div className="w-full border h-60 border-[#F0F0F0] rounded-lg py-2 text-center flex flex-col items-center justify-center text-gray-500 text-sm cursor-pointer hover:bg-gray-50">
                                <BsUpload />
                                <p>Upload an Image</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-2">
                        <button onClick={() => setStep(1)}
                            className="w-full mt-6 bg-[#243C7B] text-white rounded-lg py-3 text-sm hover:bg-[#3D5DB2] cursor-pointer transition">
                            Back
                        </button>
                        <button
                            className="w-full mt-6 bg-[#243C7B] text-white rounded-lg py-3 text-sm hover:bg-[#3D5DB2] cursor-pointer transition">
                            Submit
                        </button>
                    </div>
                </div>
            )}
        </Modal>
    );
}
