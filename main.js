function getfile(file,callback) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status == "200") {
      callback(xhr.responseText);

    }
  };
  xhr.send(null);
}

getfile("nani.json",function(text){
  var data = JSON.parse(text);
  console.log(data);
  career(data.career);
  Education(data.Education);
  Skills(data.Skills);
}
)
var child2=document.querySelector(".childtwo");
function career(careerInfo) {
  console.log(careerInfo);
  var careerHeading=document.createElement("h3");
  child2.appendChild(careerHeading);
  careerHeading.textContent="Career Objective";
  var careerHr=document.createElement("hr");
  child2.appendChild(careerHr);
  var ch=document.createElement("p");
  ch.textContent=careerInfo.info;
  child2.appendChild(ch);
}
function Education(edu) {
  var eduHeading=document.createElement("h3");
  eduHeading.textContent="Education Qualifications";
  child2.appendChild(eduHeading);
  var careerHr=document.createElement("hr");
  child2.appendChild(careerHr);
  var eduTable=document.createElement("table");
  eduTable.border="1";
  var tr1="<tr><td>DEGREE</td><td>INSTITUTE</td><td>DATA</td></tr>";
  var tr2="";
  for(var i=0;i<edu.length;i++)
  {
     tr2+="<tr><td>"+edu[i].Degree+"</td><td>"+edu[i].Institute+"</td><td>"+edu[i].Data+"</td></tr>";
  }
  eduTable.innerHTML=tr1+tr2;
  child2.appendChild(eduTable);
}
function Skills(skill) {
  var eduHeading=document.createElement("h3");
  eduHeading.textContent="Skills";
  child2.appendChild(eduHeading);
  var careerHr=document.createElement("hr");
  child2.appendChild(careerHr);
  var ul=document.createElement("ul");
  child2.appendChild(ul);
  for (var i = 0; i < skill.length; i++) {
   var li = document.createElement("li");
   li.textContent = skill[i].title+":"+skill[i].content;
   ul.appendChild(li);
  }
}
