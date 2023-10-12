import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../Components/Block/Pages/HomeScreen";
import Layout from "../Components/Static/Layout";
import Header from "../Components/Static/Header";
import Sider from "../Components/Static/Sider";
import CreateTask from "../Components/Block/Pages/CreateTask";
import MyTasks from "../Components/Block/Pages/MyTasks";

export const MainRoute = createBrowserRouter (
    [
        {
            path : "/",
            element : <Layout/>,
            children : [
                {
                    index : true,
                    element : <HomeScreen/>
                },
                {
                    path : "/header",
                    element : <Header/>
                },
                {
                    path : "/sider",
                    element : <Sider/>
                },
                {
                    path : "/create",
                    element : <CreateTask/>
                },
                {
                    path : "/my-tasks",
                    element : <MyTasks/>
                },
            ]
        }
    ]
)