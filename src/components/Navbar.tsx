import logo from '../assets/naa-logo.svg'
import { BsBook, BsBuilding, BsCloudSun, BsHouse } from 'react-icons/bs'
import Dropdown from './Dropdown'
import { IoSettingsOutline } from 'react-icons/io5'
import profilePhoto from '../assets/profilePhoto.png'
import { DropdownProvider } from '../context/DropdownContext'

export default function () {
    return (
        <div className="w-80 fixed h-screen">
            <div className='w-80 relative border bg-white border-[#F7F7F7] rounded-2xl flex flex-col items-center justify-between max-xl:w-64 max-lg:w-28'>
                <div className='w-full flex flex-row gap-1 items-center justify-center border-b border-b-[#F7F7F7] p-5'>
                    <img src={logo} alt='NAA logo' />
                    <h3 className='max-lg:hidden'>NAA Control Panel</h3>
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
                <div className='w-80 p-5 fixed bottom-0'>
                    <div className='w-full border border-[#F7F7F7] rounded-2xl p-5 text-[#787486] flex flex-row items-center max-lg:justify-center gap-2 mb-3'>
                        <IoSettingsOutline />
                        <h4 className='max-lg:hidden'>Settings</h4>
                    </div>
                    <div className='w-full bg-[#243C7B] border rounded-2xl px-5 py-3 max-lg:p-2 flex flex-row items-center max-lg:justify-center gap-2'>
                        <div className='w-12 h-12 rounded-full'>
                            <img src={profilePhoto} alt='profile photo' className='rounded-full cover w-full h-full' />
                        </div>
                        <div className='flex flex-col items-start max-lg:hidden'>
                            <h4 className='text-white'>Samira kamilova</h4>
                            <p className='text-[#ada9ba] text-[13px]'>Kmlvaaz</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
