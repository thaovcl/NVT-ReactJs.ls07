import React, { useEffect, useState } from 'react'

export default function NvtListTask({renderNvtListTasks, onNvtEdit}) {
    console.log("List:", renderNvtListTasks);

    const [nvtList, setNvtList]= useState(renderNvtListTasks);
    useEffect(()=>{
        setNvtList(renderNvtListTasks)
    },[renderNvtListTasks])

    //hàm sử lý dữ liệu khi edit 
    const nvtHandleEdit=(param)=>{
        console.log("Edit:", param);
    }

    //render data
    let nvtElementTask = nvtList.map((task, index)=>{
        return(
            <>
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{task.nvt_taskId}</td>
                <td>{task.nvt_taskName}</td>
                <td>{task.nvt_level}</td>
                <td>
                    <button className='btn btn-success'
                        onClick={()=>nvtHandleEdit(task)}>
                        Edit</button>
                    <button className='btn btn-danger'>Remove</button>
                    
                </td>
            </tr>
            </>
        )
    })


  return (
    <div>
        <h2>Danh sách các nhiệm vụ</h2>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>STT</th>
                <th>Task Id</th>
                <th>Task Name</th>
                <th>Task Level</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {nvtElementTask}
        </tbody>
      </table>
    </div>
  )
}