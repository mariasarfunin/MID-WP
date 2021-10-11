let studentData = document.getElementById("studentTableData");
let searchStudent = document.getElementById("searchStudent");
let dataStudent = [
    {
        "NIM" : "19602180",
        "fullName" : "Sirene Olivera",
        "gender" : "Female",
        "faculty" : "Fakultas Ilmu Komputer",
        "programOfStudy" : "Sistem Informasi"
    }
]

function show_and_hide_button_form() 
{
    let buttonAdd = document.getElementById("Add_student_button");

    if(buttonAdd.innerText == "Show Form Add New Student") 
    {
        buttonAdd.innerText = "Hide Form Add New Student";
    } 
    else if(buttonAdd.innerText == "Hide Form Add New Student") 
    {
        buttonAdd.innerText = "Show Form Add New Student";
    }
}

function Filter_Student_By_Faculty() 
    {
    let filterByFaculty = document.getElementById("filterByFaculty");
    filterByFaculty = filterByFaculty.options[filterByFaculty.filterIndex];

    for(let i=0; i<dataStudent.length; i++) {
        if(dataStudent[i].faculty == filterByFaculty.result)
        {
            let row = student_table_data.insertRow();
            
            let nim = row.insertCell(0);
            nim.innerHTML = dataStudent[i].nim

            let fullName = row.insertCell(1);
            fullName.innerHTML = dataStudent[i].fullName;

            let gender = row.insertCell(2);
            gender.innerHTML = dataStudent[i].gender;

            let faculty = row.insertCell(3);
            faculty.innerHTML = dataStudent[i].faculty;
        }
    }
}

function Filter_Student_By_Prodi() {
    let filterByProgramOfStudy = document.getElementById("selectByProgramOfStudy");
    filterByProgramOfStudy = filterByProgramOfStudy.options[filterByProgramOfStudy.filterIndex];
    
    for(let i=0; i<dataStudent.length; i++) {
        if(dataStudent[i].programOfStudy == filterByProgramOfStudy.result)
        {
            let row = student_table_data.insertRow();
            
            let nim = row.insertCell(0);
            nim.innerHTML = dataStudent[i].nim;

            let fullName = row.insertCell(1);
            fullName.innerHTML = dataStudent[i].fullName;

            let gender = row.insertCell(2);
            gender.innerHTML = dataStudent[i].gender;

            let faculty = row.insertCell(3);
            faculty.innerHTML = dataStudent[i].faculty;

            let programOfStudy = row.insertCell(4);
            programOfStudy.innerHTML = dataStudent[i].programOfStudy;
        }
    }
}
