
//In a production build  you would've used Image instead of Img and save all the resources in the same server.

export default function CategoryButton ({icon, name}) {

    return  <button className="group shadow-xl flex-none rounded-full p-2 m-4 hover:bg-yellow-400">
                <div className="bg-white flex justify-center items-center w-20 h-20 rounded-full border-solid border border-gray-300 group-hover:border-4"><img className="w-1/2" src={icon} alt={name}/></div>
                <div className="font-bold w-20 h-20 flex items-center justify-center">{name}</div>
            </button>
}