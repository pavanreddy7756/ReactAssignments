import React from "react";
import pfp from './pfp.png';

function App() {
    // let empno = 1;
    // let ename = "Pavan";
    // let job = "Intern";
    // let salary = 25000;
    // let dept = "DAS";
    
    // let courseArray=["html", "css"]
    // let resultArray=courseArray.map(item=><li>{item}</li>)

    let empObj={empno:10256,ename:"scott",job:"manager"};

    var empsArray=[
        {"empno":6589,"ename":"SRIRAM","job":"MANAGER","sal":3200,"deptno":30},
        {"empno":7369,"ename":"SMITH","job":"CLERK","sal":800,"deptno":20},
        {"empno":7499,"ename":"ALLEN","job":"SALESMAN","sal":1600,"deptno":30},
        {"empno":6589,"ename":"SRIRAM","job":"MANAGER","sal":3200,"deptno":30},
        {"empno":7369,"ename":"SMITH","job":"CLERK","sal":800,"deptno":20},
        {"empno":7499,"ename":"ALLEN","job":"SALESMAN","sal":1600,"deptno":30},
        {"empno":6589,"ename":"SRIRAM","job":"MANAGER","sal":3200,"deptno":30},
        {"empno":7369,"ename":"SMITH","job":"CLERK","sal":800,"deptno":20},
        {"empno":7499,"ename":"ALLEN","job":"SALESMAN","sal":1600,"deptno":30}
]
    let resultArray=empsArray.map(item=> 
    <tr>
        <td>{item.empno}</td>
        <td>{item.ename}</td>
        <td>{item.job}</td>
        <td>{item.sal}</td>
        <td>{item.deptno}</td>
    </tr>)


  
    return (
      <>
      
      {/* <img src={pfp} style={{width:100}}/>
        <table border={1}>
          <tr>
            <th>Employee Number</th>
            <td>{empno}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{ename}</td>
          </tr>
          <tr>
            <th>Job</th>
            <td>{job}</td>
          </tr>
          <tr>
            <th>Salary</th>
            <td>{salary}</td>
          </tr>
          <tr>
            <th>Department Number</th>
            <td>{dept}</td>
          </tr>
        </table> */}


{/*         
        <hr/>
        <ul>
            {resultArray}
        </ul> */}
{/* 
        Employee Name: {empObj.ename}<br/>
        Employee Id:{empObj.empno} */}


        <table>
            <th>
                EmployeeID
            </th>
            <th>
                EmployeeName
            </th>
            <th>
                EmployeeRole
            </th>
            <th>
                EmployeeSalary
            </th>
            <th>
                EmployeeDept
            </th>
        {resultArray}
           
        </table>
        

        

      </>
    );
  }
  
export default App;
