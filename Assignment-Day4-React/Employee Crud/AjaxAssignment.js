import {useState} from "react"
import { employeeDataServiceObj } from "./data.serviceAssignment"

function AjaxAssignment(){

    const[empArray,setEmpArray]=useState([]);
    const[empno,setEmpno]=useState("");
    const[ename,setEname]=useState("");
    const[job,setJob]=useState("");
    const[sal,setSal]=useState("");
    const[deptno,setDeptno]=useState("");

    function getEmpsButton_click(){
        employeeDataServiceObj.getAllEmployees().then((resData)=>{
            setEmpArray(resData.data);
        });
    }

    function addEmpButton_click(){
        let empObj={};
        empObj.empno=empno;
        empObj.ename=ename;
        empObj.job=job;
        empObj.sal=sal;
        empObj.deptno=deptno;

        employeeDataServiceObj.addEmp(empObj).then((resData)=>{
            alert("new emp added to server");
            getEmpsButton_click();
            clearFields();
        })
    }



    function clearFields() {
        setEmpno("");
        setEname("");
        setJob("");
        setSal("");
        setEmpno("");
    }


    function deleteEmp_click(eno) {
        employeeDataServiceObj.deleteEmp(eno).then((resData) => {
            alert("Emp details are deleted from Server");
            getEmpsButton_click(); // get the latest data from server            
        });

    }

    function selectEmp_click(eno) {

        employeeDataServiceObj.getEmpById(eno).then((resData) => {
            let empObj = resData.data;
            setEmpno(empObj.empno);
            setEname(empObj.ename);
            setJob(empObj.job);
            setSal(empObj.sal);
            setDeptno(empObj.deptno);
        });
    }

    function updateEmpButton_click() {
        let empObj = {};
        empObj.empno=empno;
        empObj.ename=ename;
        empObj.job=job;
        empObj.sal=sal;
        empObj.deptno=deptno;

        employeeDataServiceObj.updateEmp(empObj).then((resData) => {
            alert("emp details are updated in Server");
            getEmpsButton_click(); // get the latest data from server
            clearFields();
        });
    }

    let resultArray = empArray.map((item, index) => {
        return <tr key={index}>
            <td>   {item.empno}  </td>
            <td>   {item.ename}  </td>
            <td>   {item.job}  </td>
            <td>   {item.sal}  </td>
            <td>   {item.deptno}  </td>

            <td>
                <a onClick={() => selectEmp_click(item.empno)} href="javascript:void(0);">Select</a> |
                <a onClick={() => deleteEmp_click(item.empno)} href="javascript:void(0);">Delete</a>
            </td>
        </tr>
    });

    return(
    
    <>
    
    <h3>Crud Operations</h3>
        <hr />

        <input type="text" placeholder="Emoloyee number" value={empno} onChange={(e) => setEmpno(e.target.value)} />
        <input type="text" placeholder="Employee name" value={ename} onChange={(e) => setEname(e.target.value)} />
        <input type="text" placeholder="Employee Job" value={job} onChange={(e) => setJob(e.target.value)} /><br></br>
        <input type="text" placeholder="Employee Salary" value={sal} onChange={(e) => setSal(e.target.value)} />
        <input type="text" placeholder="Department Number" value={deptno} onChange={(e) => setDeptno(e.target.value)} />

        <hr />

        <input type="button" onClick={getEmpsButton_click} value="Get Employees" />
        <input type="button" onClick={addEmpButton_click} value="Add Employee" />
        <input type="button" onClick={updateEmpButton_click} value="Update Employee" />
        <hr />

        <table border="2" width="500" cellspacing="2" cellpadding="5">
            <tr>
                <th>Employee number</th>
                <th>Employee Name</th>
                <th>Employee Job</th>
                <th>Employee Salary</th>
                <th>Employee Department</th>
                <th>Operations</th>

            </tr>
            {resultArray}
        </table>
    
    
    </>)



    
}

export default AjaxAssignment;