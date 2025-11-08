import logo from '../assets/naa-logo.svg'
import { BsBook, BsBuilding, BsCloudSun, BsHouse } from 'react-icons/bs'
import Dropdown from './Dropdown'
import { IoSettingsOutline } from 'react-icons/io5'
import profilePhoto from '../assets/profilePhoto.png'
import { DropdownProvider } from '../context/DropdownContext'

export default function () {
    return (
        <div className="w-1/4 h-screen border border-[#F7F7F7] rounded-2xl flex flex-col items-center justify-between">
            <div className='w-full flex flex-row gap-1 items-center border-b border-b-[#F7F7F7] p-5'>
                <img src={logo} alt='NAA logo' />
                <h3>NAA Control Panel</h3>
            </div>
            <div className='w-full p-5 h-full'>
                <DropdownProvider>
                    <ul>
                        <Dropdown
                            label='NAA Website'
                            icons={{ name: BsHouse }}
                            options={[
                                { name: "Post" },
                                { name: "Media Library" },
                                { name: "System Settings" },
                            ]}
                        />
                        <Dropdown
                            label='Library'
                            icons={{ name: BsBook }}
                            options={[
                                { name: "Post" },
                                { name: "Media Library" },
                                { name: "System Settings" },
                            ]}
                        />
                        <Dropdown
                            label='Meteorology'
                            icons={{ name: BsCloudSun }}
                            options={[
                                { name: "Post" },
                                { name: "Media Library" },
                                { name: "System Settings" },
                            ]}
                        />
                        <Dropdown
                            label='Museum'
                            icons={{ name: BsBuilding }}
                            options={[
                                { name: "Post" },
                                { name: "Media Library" },
                                { name: "System Settings" },
                            ]}
                        />
                    </ul>
                </DropdownProvider>
            </div>
            <div className='w-full p-5'>
                <div className='w-full border border-[#F7F7F7] rounded-2xl p-5 text-[#787486] flex flex-row items-center gap-2 mb-3'>
                    <IoSettingsOutline />
                    <h4>Settings</h4>
                </div>
                <div className='w-full bg-[#243C7B] border rounded-2xl px-5 py-3 flex flex-row items-center gap-2'>
                    <img src={profilePhoto} alt='profile photo' className='rounded-full bg-cover w-12 h-12' />
                    <div className='flex flex-col items-start'>
                        <h4 className='text-white'>Samira kamilova</h4>
                        <p className='text-[#ada9ba] text-[13px]'>Kmlvaaz</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
