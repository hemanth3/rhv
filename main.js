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
  let data = JSON.parse(text);
  console.log(data);
  
}
)