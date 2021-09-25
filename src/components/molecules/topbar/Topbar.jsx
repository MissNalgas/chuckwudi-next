import SearchBar from "../../atoms/searchBar/SearchBar";

export default function Topbar() {
    return  <div className="flex justify-between md:justify-evenly items-center">
                <svg className="mx-2 md:mx-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 6h14M5 12h14M5 18h14"/></svg>
                <h1 className="mx-5 md:mx-7 text-3xl font-semibold">Chuckwudi</h1>
                <SearchBar className="flex-1 bg-gray-100 p-3 rounded-2xl m-5 mx-20 hidden md:flex"/>
            </div>
}