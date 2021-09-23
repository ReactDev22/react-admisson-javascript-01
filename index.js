const name=document.getElementById("name");
const course=document.getElementById("course");
const email=document.getElementById("email");
const btn=document.querySelector('.btn');
const confarmDetail=document.getElementById("confarmDetail");

 btn.addEventListener("click",function(e){
     e.preventDefault();
     if(name.value==''&&course.value==''&&email.value==''){
         alert('Please fill up the form')
     }
     else{
         const newRow=document.createElement('tr');
        //  creating coloum
         const newName=document.createElement('th');
       newName.innerHTML=name.value;
        newRow.appendChild(newName)

        const newCourse=document.createElement('th');
       newCourse.innerHTML=course.value;
        newRow.appendChild(newCourse)

        const newEmail=document.createElement('th');
       newEmail.innerHTML=email.value;
        newRow.appendChild(newEmail);

        confarmDetail.appendChild(newRow)

     }
 })
