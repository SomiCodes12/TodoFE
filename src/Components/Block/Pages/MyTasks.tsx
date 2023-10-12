
import { deleteTask } from "../../../APIs/taskAPI"
import {useState,useEffect} from "react"
import axios from "axios"


const MyTasks = () => {
    const [task , setTask] = useState<any>()

    const viewTask = async () => {
        try {
            return await axios.get(`http://localhost:1122/api/v1/view-tasks`).then((res : any) => {
            setTask(res.data.data)
            // console.log(res);
            
            })
        } catch (error) {
            return(error);
        }
    }

    // console.log(task)

    useEffect(() => {
     viewTask()
    }, [task])

    // const {data:Tasks} = useQuery({
    //     queryKey : ['tasks'],
    //     queryFn :()=> viewTask()
    // })
  return (
    <div>
        <div className="flex w-[calc(100vw-370px)] mt-[40px] h-[calc(100vh-40px)]  p-8 bg-red-500 ">
   <div className="w-[calc(100vw-320px)] h-[calc(100vh-70px)] flex flex-wrap">
   {
        task?.map((props : any) => (
            <div className="w-[270px] h-[100px] border-black bg-gray-300 rounded-md p-4 flex justify-between m-5" key={props._id}>
            <div>
            <div className="text-[25px]">{props.title}</div>
              <div className="font-bold">{props.name}</div>
            </div>
            <button className="w-[80px] h-[40px] flex justify-center items-center bg-purple-600 my-4 rounded-md hover:cursor-pointer"  onClick={()=>{
              deleteTask(props._id)
              // console.log("iam")
            }}>Delete</button>
      </div>
        ))
       }
   </div>
        </div>
    </div>
  )
}

export default MyTasks