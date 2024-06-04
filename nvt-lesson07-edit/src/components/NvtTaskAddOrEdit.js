import React, { useEffect, useState } from 'react'

export default function NvtTaskAddOrEdit({nvtOnSubmit, renderNvtTask, renderNvtAddOrEdit}) {
    console.log("NvtTaskAddOrEdit:", renderNvtTask, renderNvtAddOrEdit);
    //Đối tượng task
    const nvtTaskobj ={
        nvt_taskId:0,
        nvt_taskName:"",
        nvt_level:""
    }
    //const [nvtTask, setnvtTask]=useState(nvtTaskobj);

    const [nvtTask, setnvtTask]=useState(renderNvtTask);
    useEffect(()=>{
        setnvtTask(renderNvtTask);
    },[renderNvtTask]);
    console.log("State:", nvtTask);
    //Hàm xử lí thay đổi trên điều khiển
    const nvtHandleChange = (nvtEvent) => {
        const name = nvtEvent.target.name;
        const value = nvtEvent.target.value;
        setnvtTask(prev=>{
            return{
               ...prev,
                [name]:value
            }
           
        })
        
    }
   const nvtHandleSubmit = (nvtEvent) => {
    nvtEvent.preventDefault();
    nvtOnSubmit(nvtTask);
   } 

   const nvtTitle = renderNvtAddOrEdit==true?"Thêm mới task":"sửa task";
  return (
    <div>
      <h2> {nvtTitle}</h2>
      <form>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Task ID</span>
            <input type="text" 
                name='nvt_taskId' value={nvtTask.nvt_taskId} onChange={nvtHandleChange}
                className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div class="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">Task ID</span>
            <input type="text" 
                name='nvt_taskName' value={nvtTask.nvt_taskName} onChange={nvtHandleChange}
                className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">Task Level</span>
            <select name='nvt_level' value={nvtTask.nvt_level} onChange={nvtHandleChange} className="form-control"
            aria-describedby="basic-addon">
                <option value={'Small'}>Small</option>
                <option value={'Medium'}>Medium</option>
                <option value={'High'}>High</option>
              
            </select>
        </div>
        <button onClick={nvtHandleSubmit} className='btn btn-primary'>Ghi lại</button>
      </form>
    </div>
  )
   }