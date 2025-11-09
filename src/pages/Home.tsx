import { BsPlusLg } from "react-icons/bs";
import { DropdownProvider } from "../context/DropdownContext";
import FilterDropdown from "../components/FilterDropdown";
import PostTable from "../components/PostTable";

export default function Home() {
  return (
    <div className="h-auto">
      <div className="flex flex-row items-center justify-between">
        <div>
          <header className="font-semibold text-xl">News & Announcements</header>
          <p className="text-[#787486]">210 posts</p>
        </div>
        <button className="bg-[#243C7B] rounded-3xl px-4 py-2 flex flex-row gap-2 items-center text-white cursor-pointer hover:bg-[#1f3469]">
          <div className="rounded-full bg-[#3D5DB2] w-5 h-5 flex items-center justify-center text-white">
            <BsPlusLg />
          </div>
          <p>Add News or Announcement</p>
        </button>
      </div>
      <div className="flex flex-row items-center gap-5 w-full p-5 border border-[#F7F7F7] mt-5 rounded-2xl"> 
        <DropdownProvider>
          <ul className='flex flex-row gap-5 w-1/2'>
            <FilterDropdown
              label='All Posts'
              options={[
                { name: "All Posts"},
                { name: "News"},
                { name: "Announcements"},
              ]}
            />
             <FilterDropdown
              label='Status'
              options={[
                { name: "IsActive"},
                { name: "InActive"},
              ]}
            />
          </ul>
        </DropdownProvider>
        <input placeholder="Search..." className="p-3 border border-[#E5E7EB] rounded-xl"/>
      </div>
      <div>
        <PostTable />
      </div>
    </div>
  )
}
