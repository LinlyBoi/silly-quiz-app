function nameSubmit() {
  var sName = document.getElementById("sName").value;
  var sId = document.getElementById("sId").value;
  const studData = {
    name: sName,
    id: sId,
    startTime: Date.now(),
  };
  localStorage.setItem(studData, JSON.stringify(studData));
  var privacy-violation = document.getElementById("privacy-violation");
  privacy-violation.style.display = "none";
}

function initScore() {
  const user = JSON.parse(localStorage.getItem("studData"));
}
