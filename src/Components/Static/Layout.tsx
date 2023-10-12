import { Outlet } from "react-router-dom"
import Sider from "./Sider"
import Header from "./Header"

const Layout = () => {
  return (
    <div className="w-full h-[100vh]">
        <Header/>
      <div className="flex justify-between bg-green-500">
    <div className="small:hidden">
    <Sider/>
    </div>
        <div className="w-full flex justify-end ">
            <div>
                <Outlet/>
            </div>
        </div>  
      </div>
   
    </div>
  )
}

export default Layout