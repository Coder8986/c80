Student_names=[];
function submit(){
    var name1 = document.getElementById("name_of_student_1").value;
    var name2 = document.getElementById("name_of_student_2").value;
    var name3 = document.getElementById("name_of_student_3").value;
    var name4 = document.getElementById("name_of_student_4").value;

    Student_names.push(name1);
    Student_names.push(name2);
    Student_names.push(name3);
    Student_names.push(name4);

    console.log(Student_names)
    
    document.getElementById("display_name").innerHTML=Student_names;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block"

}

function sorting(){
    Student_names.sort();
    document.getElementById("display_name").innerHTML=Student_names;
}
