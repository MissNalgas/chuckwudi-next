import { useState } from "react";


export default function AddressEditor () {

    const [ address, setAddress ] = useState("625 St Marks Ave");
    const [ editable, setEditable ] = useState(false);

    const handleAddress = (e) => {
        const value = e.target.value;
        setAddress(value);
    }

    const toggleEdit = () => {
        setEditable(!editable);
    }

    return  <div className="bg-purple-800 p-6 rounded-2xl my-9">
                {editable ?
                    <>
                        <div className="flex justify-between"><input placeholder="address" value={address} onChange={handleAddress}/><button className="text-yellow-300 font-bold" onClick={toggleEdit}>Ok</button></div>
                    </>
                :
                    <>
                        <div className="flex justify-between my-2"><span className="text-gray-100 font-semibold">{address}</span><button className="text-yellow-300 font-bold" onClick={toggleEdit}>Edit</button></div>
                        <div className="flex items-center justify-between my-4">
                            <div className="bg-yellow-100 p-2 rounded-lg">  
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M15 16l-2.414-2.414A2 2 0 0 1 12 12.172V6"/></svg>
                            </div>
                            <span className="text-gray-100 font-semibold">35 min</span>
                            <button className="text-yellow-300 font-bold">Choose time</button>
                        </div>
                    </>
                }
                
            </div>
}