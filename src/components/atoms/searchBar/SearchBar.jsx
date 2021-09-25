export default function SearchBar({className}) {
    return  <div className={className}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0z"/></svg>
                <input className="bg-transparent focus:outline-none mx-3 w-full" placeholder="Search"/>
            </div>
}