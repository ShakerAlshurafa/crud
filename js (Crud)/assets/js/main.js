var courseName = document.querySelector("#courseName");
var courseCategory = document.querySelector("#courseCategory");
var coursePrice = document.querySelector("#coursePrice");
var courseDescription = document.querySelector("#courseDescription");
var courseCapacity = document.querySelector("#courseCapacity");
var courses = [];

var inputs = document.querySelectorAll(".inputs");
var addBtn = document.querySelector("#click");
var deleteBtn = document.querySelector("#deleteBtn");

addBtn.addEventListener('click', function(e) {
    e.preventDefault();
    addCourse();
    clearInputs();
});

deleteBtn.addEventListener('click', function(e) {
    e.preventDefault();
    deleteCourse();
});

function deleteCourse(){
    while ( courses.length != 0){
        courses.pop();
    }
    displayCourse();
}

function addCourse() {
    var course = {
        name: courseName.value ,
        category: courseCategory.value ,
        price: coursePrice.value ,
        description: courseDescription.value ,
        capacity: courseCapacity.value ,
    }
    courses.push(course);
    console.log(courses);
    displayCourse();
}
function clearInputs() {
    for(var i= 0 ; i < inputs.length ; i++) {
        inputs[i].value = "";
    }
}

function displayCourse(){
    var data = ``;
    for(var i= 0 ; i < courses.length ; i++) {
        data += `
            <tr>
                <td>${i}</td>
                <td>${courses[i].name}</td>
                <td>${courses[i].category}</td>
                <td>${courses[i].price}</td>
                <td>${courses[i].description}</td>
                <td>${courses[i].capacity}</td>
                <td><button class='btn btn-outline-info'>update</button></td>
                <td><button class='btn btn-outline-danger' onclick="deleteCourse(${i})">delete</button></td>
            </tr>
        `;   
    }
    document.getElementById("data").innerHTML= data;
}

function deleteCourse(id){
    courses.splice(id, 1);
    displayCourse();
}