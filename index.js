function nameSubmit() {
  var sName = document.getElementById("sName").value;
  var sId = document.getElementById("sId").value;
  const studData = {
    name: sName,
    id: sId,
    startTime: new Date(),
  };
  localStorage.setItem("studData", JSON.stringify(studData));
  var privacyViolation = document.getElementById("privacyViolation");
  privacyViolation.style.display = "none";
  initQuiz();
}

  //////////////////////////////
  // const sampleQuestion = { //
  //   title: "5x5?",         //
  //   //answers:             //
  // };                       //
  // const sampleAnswer = {   //
  //   text: "answer 1",      //
  //   correct: true,         //
  // };                       //
  //////////////////////////////
function initQuiz() {
  var quizScreen = document.getElementById("quizScreen");
  quizScreen.style.display = "block";
}
function finishQuiz() {
  var quizScreen = document.getElementById("quizScreen");
  quizScreen.style.display = "none";
}
function initScore() {
  finishQuiz();
  const user = JSON.parse(localStorage.getItem("studData"));
  var sInfoName = document.getElementById("sInfoName");
  var sInfoId = document.getElementById("sInfoId");
  var sInfoTime = document.getElementById("sInfoTime");
  sInfoName.innerText = "Student name: " + user.name;
  sInfoId.innerText = "Student ID: " + user.id;
  var time_elapsed = new Date();
  var start_time = new Date(user.startTime);
  console.log(start_time);
  time_elapsed = time_elapsed.getSeconds() - start_time.getSeconds();
  sInfoTime.innerText = "Time elapsed: " + time_elapsed;
  var scoreScreen = document.getElementById("scoreScreen");
  // console.log(user.name);
  // console.log(sInfoId.innerText);
  scoreScreen.style.display = "block";

}

function nextQ() {
}

function prevQ() {
}

function questionSubmit() {

}
