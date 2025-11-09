import { BsPlusLg } from "react-icons/bs";
import { DropdownProvider } from "../context/DropdownContext";
import FilterDropdown from "../components/FilterDropdown";
import PostTable from "../components/PostTable";
import { useEffect, useMemo, useState } from "react";
import { posts } from "../mock/data";

export default function Home() {

  //Filter and Search
  const [typeFilter, setTypeFilter] = useState(() => {
    return localStorage.getItem('typeFilter') || 'All Posts';
  });
  const [statusFilter, setStatusFilter] = useState(() => {
    return localStorage.getItem('statusFilter') || 'All Posts';
  });
  const [search, setSearch] = useState('');

  useEffect(() => {
  localStorage.setItem('typeFilter', typeFilter);
  localStorage.setItem('statusFilter', statusFilter);
}, [typeFilter, statusFilter]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchedType = typeFilter === 'All Posts' || post.type.toLowerCase() === typeFilter.toLowerCase();
      const matchedStatus = statusFilter === 'All Posts' || post.status.toLowerCase() === statusFilter.toLowerCase();
      const matchedSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase());

      return matchedType && matchedStatus && matchedSearch;
    })
  }, [typeFilter, statusFilter, search]);

  return (
    <div className="h-auto">
      <div className="flex flex-row items-center justify-between">
        <div>
          <header className="font-semibold text-xl">News & Announcements</header>
          <p className="text-[#787486]">{posts.length} posts</p>
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
                { name: "All Posts", value: "All Posts" },
                { name: "News", value: "News" },
                { name: "Announcements", value: "Announcement" },
              ]}
              onChange={(val) => setTypeFilter(val)}
            />
            <FilterDropdown
              label='Status'
              options={[
                { name: "All Posts", value: "All Posts" },
                { name: "Active", value: "Active" },
                { name: "InActive", value: "Inactive" },
              ]}
              onChange={(val) => setStatusFilter(val)}
            />
          </ul>
        </DropdownProvider>
        <input placeholder="Search..."
          className="p-3 border border-[#E5E7EB] rounded-xl"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <PostTable filteredPosts={filteredPosts} />
      </div>
    </div>
  )
}
