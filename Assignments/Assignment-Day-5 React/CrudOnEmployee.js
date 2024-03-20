import { useState } from "react";

function CrudOnEmployee() {
    const [deptsArray, setDeptsArray] = useState([]);

    const [empno, setempno] = useState("");
    const [ename, setename] = useState("");
    const [job, setjob] = useState("");
    const [sal,setsal]=useState("");
    const[deptno,setdeptno]=useState("");


    function getDeptsButton_click() {

        let tempArray = [
    { empno: 10, ename: "John", job: "SDE", sal: "50000", deptno: "1" },
    { empno: 20, ename: "Alice", job: "QA", sal: "60000", deptno: "2" },
    { empno: 30, ename: "Michael", job: "Product Manager", sal: "70000", deptno: "3" },
    { empno: 40, ename: "Emily", job: "Data Analyst", sal: "55000", deptno: "4" },
    { empno: 50, ename: "David", job: "Software Engineer", sal: "80000", deptno: "5" },
    { empno: 60, ename: "Sophia", job: "DevOps Engineer", sal: "75000", deptno: "6" },
    { empno: 70, ename: "Olivia", job: "System Administrator", sal: "70000", deptno: "7" },
    { empno: 80, ename: "James", job: "UI/UX Designer", sal: "65000", deptno: "8" },
    { empno: 90, ename: "Emma", job: "Network Engineer", sal: "72000", deptno: "9" },
    { empno: 100, ename: "William", job: "Database Administrator", sal: "68000", deptno: "10" }
        ];

        setDeptsArray(tempArray);

    }


    function addEmployeeButton_click() {
        let empObj = {};
        empObj.empno = empno;
        empObj.ename = ename;
        empObj.job = job;
        empObj.sal=sal;
        empObj.deptno=deptno;


        let tempArray = [...deptsArray];
        tempArray.push(empObj);
        setDeptsArray(tempArray);

        clearFields();
    }

    function clearFields()
    {
        setempno("");
        setename("");
        setjob("");
        setdeptno("");
        setsal("");
    }


    function  deleteDept_click(dno)
    {
        const confirmDeletion=window.confirm("Do you want to delete this item?")
        if(confirmDeletion){
            let tempArray = [...deptsArray];
       
            let index = tempArray.findIndex(item => item.empno == dno);
            tempArray.splice(index, 1);
    
            setDeptsArray(tempArray);
        }

    }

    function  selectDept_click(dno)
    {
        let deptObj = deptsArray.find(item => item.empno == dno);

        setempno(deptObj.empno);
        setename(deptObj.ename);
        setjob(deptObj.job);
        setsal(deptObj.sal);
        setdeptno(deptObj.deptno)
    }

    function updateDeptButton_click() {
        let tempArray = [...deptsArray];
        
        let index = tempArray.findIndex(item => item.empno === empno);
        tempArray[index].ename = ename ;
        tempArray[index].job = job ;
        tempArray[index].sal=sal;
        tempArray[index].deptno=deptno;

        setDeptsArray(tempArray);
        clearFields();
    }

    let resultArray = deptsArray.map((item, index) => {
        return <tr key={index}>
                        <td>   {item.empno}  </td>
                        <td>   {item.ename}  </td>
                        <td>   {item.job}  </td>
                        <td>   {item.sal}  </td>
                        <td>   {item.deptno}  </td>

                        <td>

                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFycpQ0GWH6o8bdhON7WUCWCtTYU4P9mBlXPpuR40_JB_4fSwSJSD3qQDPM6IRWIWv-A&usqp=CAU" width={40} alt="image" onClick={() => selectDept_click(item.empno)}/><br></br>
                            


                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MLYX-1wZ0B-DDGhCQktMMbztStD-bqb3LIfJyUzuNg&s" width={20} onClick={() => deleteDept_click(item.empno)}/>


                        </td>
                </tr>
    });


    return (<>

        <h3>Employee CRUD Operations</h3>
        <hr />

        <input type="text" placeholder="Employee No" value={empno}   onChange={(e) => setempno(e.target.value)} />
        <input type="text" placeholder="Employee Name" value={ename}   onChange={(e) => setename(e.target.value)} />
        <input type="text" placeholder="job" value={job}  onChange={(e) => setjob(e.target.value)} />
        <input type="text" placeholder="sal" value={sal}  onChange={(e) => setsal(e.target.value)} />
        <input type="text" placeholder="deptno" value={deptno}  onChange={(e) => setdeptno(e.target.value)} />

        <hr />

        <input type="button" onClick={getDeptsButton_click} value="Get Employees" />
        <input type="button" onClick={addEmployeeButton_click} value="Add Employee" />
        <input type="button" onClick={updateDeptButton_click} value="Update Employee" />
        <hr />

        <table border="2" width="500" cellspacing="0" cellpadding="5">
            <tr>
                <th>Employee No</th>
                <th>Employee  Name</th>
                <th>Job</th>
                <th>Salary</th>
                <th>Department No.</th>
                <th>Operations</th>

            </tr>
            {resultArray}
        </table>

    </>);
}

export default CrudOnEmployee;