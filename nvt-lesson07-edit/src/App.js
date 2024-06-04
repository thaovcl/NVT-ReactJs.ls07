import logo from './logo.svg'
import './App.css';
import react, {useEffect, useState} from 'react'
import NvtListTask from './components/NvtListTask';
import NvtTaskAddOrEdit from './components/NvtTaskAddOrEdit';

function App() {
  const nvt_listTasks = [
    // Mock data
    { nvt_taskId:22109,nvt_taskName:"Nguyen Van Thao", nvt_level:"Small" },
    { nvt_taskId:1,nvt_taskName:"Học lập trình frontend", nvt_level:"Small" },
    { nvt_taskId:2, nvt_taskName:"Học lập trình reactjs",nvt_level:"Medium"},
    { nvt_taskId:3, nvt_taskName:"Lập trình với Frontend - Reactjs",nvt_level:"High"},
    { nvt_taskId:4, nvt_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",nvt_level:"Small"},
   ];
   // sử dụng hàm useState để lưu trữ trạng thái dữ liệu
   const [nvtListTasks, setNvtListTasks]= useState(nvt_listTasks);

   
   // hàm xử lý đón dữ liệu sửa
   // luu tru state
   const task = {nvt_taskId:0,nvt_taskName:"NTU", nvt_level:"Small"}
   const [nvtTask, setNvtTask]= useState(task); //dung để render form
   //quản lý trạng thái form khi thêm/ sửa
   const[nvtAddOrEdit, setNvtAddOrEdit] = useState(false); // Them

   const nvtHandleEdit =(param)=>{
    setNvtTask(param);
    setNvtAddOrEdit(true);
   }


   const nvtHandleSubmit = (nvtParam)=>{
    console.log("App:", nvtParam);
    if(nvtAddOrEdit===false){ //khi thêm mới 
    setNvtListTasks(prev=>{
      return{
        ...prev,
        nvtParam
      }
    })
    }else{ // submit khi sua
      console.log("App Edit:", nvtParam); 
       for (let i = 0; i < nvtListTasks.length; i++) {
        if(nvtListTasks[i].nvt_taskId == nvtParam.nvt_taskId){
          console.log("nvtListTasks[]: ", i, nvtParam.nvt_taskId, nvtListTasks[i].nvt_taskId);
          nvtListTasks[i]=nvtParam;
          break;
        }
      }
      // cập nhật lại state (nvtListState)
      setNvtListTasks((prev)=>{
        return[...prev];
      });
    }
  };
  //Hàm xóa
  const nvtHandleDelete=(param)=>{
    let nvtResult = NvtListTasks.filter(x=>x.taskId != param.nvt_taskId);
    setNvtListTasks(nvtResult);
  }
  
  return(
    <div className="container border">
      <h1>Nguyen Van Thao - K22N1</h1>
      <hr/>
      <div>
        {/* Danh sach list task */ }
        < NvtListTask renderNvtListTasks = {nvtListTasks} 
                      onNvtEdit={nvtHandleEdit}/>
      </div>
      <div>
        <NvtTaskAddOrEdit nvtOnSubmit={nvtHandleSubmit}
                          renderNvtAddOrEdit  ={nvtAddOrEdit}
                          renderNvtTask = {nvtTask}/>
      </div>

    </div>
  )
}

export default App;