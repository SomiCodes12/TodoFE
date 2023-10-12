import { FaHome } from "react-icons/fa";
import {IoMdCreate} from "react-icons/io"
import { NavLink } from "react-router-dom";

const Sider = () => {
  return (
    <div >
      <div className="w-[350px] h-[calc(100vh-70px)]  p-4 flex items-center flex-col fixed pt-[100px] ">
       <NavLink to="/create">
       <div className="w-[300px] h-[50px]  p-2 flex items-center rounded-md my-4 hover:cursor-pointer border">
          <div className="mr-4">
            <IoMdCreate />
          </div>
          <div>Create Tasks</div>
        </div>
       </NavLink>
      <NavLink to="/my-tasks">
      <div className="w-[300px] h-[50px]  p-2 flex items-center rounded-md my-4 hover:cursor-pointer border">
          <div className="mr-4">
            <FaHome />
          </div>
          <div>My Tasks</div>
        </div>
      </NavLink>
      </div>
    </div>
  );
};

export default Sider;
