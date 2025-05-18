const SearchBar = ()=> {
    return (
        <div className="w-full sm:max-w-[30rem]">
            <input
                type="text"
                className="text-content w-full rounded-lg bg-transparent py-[1.125rem] pl-[4.625rem] pr-3 text-sm shadow-lg"
                placeholder="Search for a country..."
                // value={search}
                // onChange={(e) => setSearch(e.target.value)}
                aria-label="Search for a country"
            />
        {/* <SearchIcon className="text-content absolute left-[1.9375rem] top-[49%] -translate-y-1/2 transform" /> */}
      </div>
    )
}

export default SearchBar;