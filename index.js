function nameSubmit() {
  var sName = document.getElementById("sName").value;
  var sId = document.getElementById("sId").value;
  const studData = {
    name: sName,
    id: sId,
    startTime: Date.now(),
  };
  const sampleQuestion = {
    title: "5x5?",
    answers:
  }
  const sampleAnswer {
    text: "answer 1",
    correct: true,
  },
  localStorage.setItem(studData, JSON.stringify(studData));
  var privacyViolation = document.getElementById("privacyViolation");
  privacyViolation.style.display = "none";
}

function initScore() {
  const user = JSON.parse(localStorage.getItem("studData"));
}
