import {PiDotsNineBold} from "react-icons/pi"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div>
        <div className="w-full h-[70px] bg-blue-500 flex justify-center items-center fixed">
            <div className="w-[95%] h-full flex justify-between items-center">
            <div className="flex items-center text-white">
                <div className="mr-3 text-[30px]"><PiDotsNineBold/></div>
                <NavLink to="/">
                <div className="text-[25px] font-bold hover:cursor-pointer">Todo</div>
                </NavLink>
            </div>
            <div className="flex items-center">
            <div className="w-[50px] h-[50px] rounded-[50%] border flex justify-center items-center text-white">S</div>
            {/* <div className="font-bold ml-3 hover:cursor-pointer text-white text-[20px]">Logout</div> */}
            </div>
            </div>
        </div>
    </div>
  )
}

export default Header