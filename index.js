function nameSubmit() {
  var sName = "Student name: " + document.getElementById("sName").value;
  var sId = "Student ID: " + document.getElementById("sId").value;
  var sInfo = document.getElementById("sInfo");
  sInfo.innerHTML = sName + "<br>" + sId;
  console.log(sInfo);
}

