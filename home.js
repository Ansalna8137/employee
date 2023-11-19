
let username=localStorage.getItem('USERNAME');
console.log(username);
head.innerHTML=`Welcome ${username}`

function addEmployee(){
    const Employee={
        id:empid.value,
        name:empname.value,
        add:empadd.value,
        des:empdes.value,
        exp:empexp.value,
        sal:empsal.value
    }

    if(Employee.id==""|| Employee.name==""|| Employee.add==""||Employee.des==""|| Employee.exp==""|| Employee.sal=="")
    {
    alert("please fill all the data")
    }
    else{
        if(Employee.id in localStorage)
        alert("employee already exists")
    else{
        localStorage.setItem(Employee.id,JSON.stringify(Employee))
        alert("employee added successfully")
        document.getElementById("myform").requestFullscreen()
    }
    }
}

function searchemp(){

    let key=emp.value
    if(key in localStorage){
        Employee=JSON.parse(localStorage.getItem(key))
        console.log(Employee);
       result.innerHTML=`<div class="card" style="width: 18rem;">
       <img src="https://blog.vantagecircle.com/content/images/2021/01/Employee-Management-Meaning-Importance-Tips-Tools---More.png" class="card-img-top" alt="...">
       <div class="card-body">
         
       </div>
       <ul class="list-group list-group-flush">
         <li class="list-group-item">Employee id:${Employee.id}</li>
         <li class="list-group-item">Employee Name:${Employee.name}</li>
         <li class="list-group-item">Employee Address:${Employee.add} </li>
         <li class="list-group-item">Employee Designation:${Employee.des}</li>
         <li class="list-group-item">Employee experience:${Employee.exp}</li>
         <li class="list-group-item">Employee Salary:${Employee.sal}</li>
         
         
       </ul>
      
     </div>`
    }
    else{
        alert("id doesnt exist")
        result.innerHTML=""

    }
}





























function logout(){
    window.location='./login.html'
    localStorage.clear()
}
//adding employee

// function addEmply(){
//     const empId = document.getElementById('empId').value
//     const empName = document.getElementById('empName').value
//     const empAdd = document.getElementById('empAdd').value
//     const empDes = document.getElementById('empDes').value
//     const empExp = document.getElementById('empExp').value
//     const empSal = document.getElementById('empSal').value

//     if(empId == "" || empName == "" || empAdd=="" || empDes =="" || empExp=="" || empSal==""){
//         alert('please fill the details')
//     }
//     else{
//         let emp= {
//             Employee_ID: empId,
//             Employee_Name: empName,
//             Employee_Address: empAdd,
//             Employee_Designation: empDes,
//             Employee_Experience: empExp,
//             Employee_Salary: empSal
//         }
//         localStorage.setItem("Employee",JSON.stringify(emp))
//         alert('Employee details added successfully')

//         // let allValues=document.getElementsByTagName("input");
//         // for(i=1;i<=allValues.length;i++){
//         //     allValues[i].value="";
//         // }
//     }
// }





























// function addemp(){

//     let empobj={

//         empId:empId.value,
//         empName:empName.value,
//         empAdd:empAdd.value,
//         empDes:empDes.value,
//         empExp:empExp.value,
//         empSal:empSal.value

//     }
//     console.log(empobj);
//     empId.value='';
//     empName.value='';
//     empAdd.value='';
//     empDes.value='';
//     empExp.value=''; 
//     empSal.value='';

//     localStorage.setItem("emp",JSON.stringify(empobj))
//    alert("Employee Details added successfully ")
// }

// function searchemp(){
//     const emp=JSON.parse(localStorage.getItem('emp'))
//     console.log(emp);
//     if(searchid.value==`${emp.empId}`){

//         display.innerHTML=`<div class="col6">
//         <h1 style="color: blue;">Employee Details</h1>
//         Employee Id :${emp.empId}<br>
//         Employee name:${emp.empName}<br>
//         Employee Address:${emp.empAdd}<br>
//         Employee Designation:${emp.empDes}<br>
//         Employee Experience:${emp.empExp}<br>
//         Employee Salary:${emp.empSal}<br>
        
//     </div>`
//     }
//     else{
//         alert("enter a valid id")
//        searchid.value='';
//         }
// }
// function searchemp() {
//     const empobj = JSON.parse(localStorage.getItem('EMPLOYEE'));

//     if (searchid.value === empobj.empid) {
//         display.innerHTML = `<div class="col6">
//             <h1 style="color: blue;">Employee Details</h1>
//             Employee Id: ${empobj.empid}<br>
//             Employee Name: ${empobj.empname}<br>
//             Employee Address: ${empobj.empadd}<br>
//             Employee Designation: ${empobj.empdes}<br>
//             Employee Experience: ${empobj.empex}<br>
//             Employee Salary: ${empobj.empsal}<br>
//         </div>`;
//     } else {
//         alert("Enter a valid ID");
//         searchid.value = '';
//     }
// }
