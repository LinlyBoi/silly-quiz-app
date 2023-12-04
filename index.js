function nameSubmit() {
  var sName = document.getElementById("sName").value;
  var sId = document.getElementById("sId").value;
  const studData = {
    name: sName,
    id: sId,
    startTime: Date.now(),
  };
  localStorage.setItem(studData, JSON.stringify(studData));
}
