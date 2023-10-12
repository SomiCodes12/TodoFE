import { BiTask } from "react-icons/bi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { createNewTask } from "../../../APIs/taskAPI";
import Swal from "sweetalert2"

const createTask = () => {

  const schema = yup.object({
    task: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    
  } = useForm({
    resolver : yupResolver(schema)
  });

  const onhandleSubmit = handleSubmit((res) => {
    createNewTask({
        title:res.task
    }).then(() => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "A mail has been sent to your email",
            showConfirmButton: false,
            timer: 1500,
          })
    })
    console.log(res);
    
  })

  return (
    <div>
      <div className="flex w-[calc(100vw-350px)] h-[calc(100vh-70px)] p-6 flex-col bg-gray-200 pt-[100px] small:w-full">
        <div className="flex">
          <div className="mr-4 text-[30px]">
            <BiTask />
          </div>
          <div className="text-[20px]">Tasks Panel</div>
        </div>

        <div className="w-full h-[80px]  flex items-center justify-between shadow-md my-6 bg-white px-3">
         
            <input
              type="checkbox"
              className="w-[30px] h-[30px] rounded-[50%] border bg-blue-500 outline-none border-none"
           />
         
          <form onSubmit={onhandleSubmit} className="w-[calc(100%-60px)] flex items-center pr-3 justify-between">
          <input
            type="text"
            className="h-[80px] border w-[calc(100%-120px)] outline-none border-none"
            placeholder="Add Tasks Here"
          {...register("task")}/>
          <button className="w-[60px] h-[35px] rounded border flex justify-center items-center border-gray-500" type="submit">Add</button>
           </form>
        </div>
      </div>
    </div>
  );
};

export default createTask;
