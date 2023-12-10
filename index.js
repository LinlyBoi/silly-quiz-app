console.log(JSON.parse(localStorage.getItem("studData")));
function nameSubmit() {
  var sName = document.getElementById("sName").value;
  var sId = document.getElementById("sId").value;
  const studData = {
    name: sName,
    id: sId,
    startTime: new Date(),
    score: 0,
    startTime: new Date(),
  };
  const startTime = new Date();
  localStorage.setItem("studData", JSON.stringify(studData));
  localStorage.setItem("startTime", JSON.stringify(startTime));
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
  var user = JSON.parse(localStorage.getItem("studData"));
  var past_users = JSON.parse(localStorage.getItem("history"))
  if (past_users == null)
    past_users = []
  past_users.push(user)
  updateTable(user, past_users)
  quizScreen.style.display = "none";
  localStorage.setItem("history", JSON.stringify(past_users))
}

function sortByKey(array, key) {
  return array.sort(function(a, b) {
    var x = a[key];
    var y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}

function updateTable(user, past_users) {
  let tableHead = document.createElement("thead");
  let tableRow = document.createElement("tr");
  let table = document.getElementById("scoreTable");
  let scores = document.getElementById("scoreScreen");
  let cols = Object.keys(user);
  console.log(cols);
  cols.forEach((item) => {
    let tHead = document.createElement("th");
    let tableRow = document.createElement("tr");
    tableHead.innerText = item;
    tableRow.appendChild(tableHead);
  });
  tableHead.appendChild(tableRow);
  table.append(tableRow);

  past_users.forEach((item) => {
    let tableRow = document.createElement("tr");
    let values = Object.values(item);
    values.forEach((element) => {
      let td = document.createElement("td");
      td.innerText = element;
      tableRow.appendChild(td);
    });
    table.appendChild(tableRow);

  })
  table.classList.add("table");
  scores.appendChild(table);
}
function initScore() {
  finishQuiz();

  const user = JSON.parse(localStorage.getItem("studData"));
  var sInfoName = document.getElementById("sInfoName");
  var sInfoId = document.getElementById("sInfoId");
  var sInfoTime = document.getElementById("sInfoTime");
  sInfoName.innerText = "Student name: " + user.name;
  sInfoId.innerText = "Student ID: " + user.id;

  var sInfoTime = document.getElementById("sInfoTime");
  var time_elapsed = new Date();
  var start_time = new Date(JSON.parse(localStorage.getItem("startTime")));
  time_elapsed = time_elapsed.getSeconds() - start_time.getSeconds();
  sInfoTime.innerText = "Time elapsed: " + time_elapsed + " seconds";
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

const sampleQuestion = {
  title: "5x5?",
  answers: [],
};
const sampleAnswer = {
  text: "answer 1",
  correct: false,
};

//Questions
function generateQuestion(n1, n2, a1, a2, a3, a4) {
  var question = JSON.parse(JSON.stringify(sampleQuestion));
  question.answers = [
    JSON.parse(JSON.stringify(sampleAnswer)),
    JSON.parse(JSON.stringify(sampleAnswer)),
    JSON.parse(JSON.stringify(sampleAnswer)),
    JSON.parse(JSON.stringify(sampleAnswer))
  ];
  var answer_values = [a1, a2, a3, a4];
  question.title = n1 + "x" + n2;
  for (let i = 0; i < 4; i++) {
    question.answers[i].text = answer_values[i];
    if (n1 * n2 == answer_values[i])
      question.answers[i].correct = true
  }
  return question;
}
const questions = [
  generateQuestion(2, 1, 2, 1, 3, 21),
  generateQuestion(2, 6, 7, 12, 4, 23),
  generateQuestion(2, 5, 4, 5, 10, 24),
  generateQuestion(3, 7, 2, 7, 14, 21),
  generateQuestion(6, 6, 36, 6, 14, 21),
]
// console.log(questions[0].answers);

function setQ(n) {
  var question = document.getElementById("question")
  question.innerText = questions[n].title;
  var labels = ["ans1", "ans2", "ans3", "ans4",]
  var current_question = JSON.parse(JSON.stringify(questions[n].answers));
  for (let i = 0; i < current_question.length; i++) {
      var q = document.getElementById(labels[i]);
      q.innerText = current_question[i].text;
  }

}
var questionCounter = 0;
setQ(questionCounter);
function nextQ() {
  if (questionCounter < questions.length - 1)
    questionCounter++;
  else
    initScore();
  setQ(questionCounter);
  if (questionCounter < questions.length)
}

function prevQ() {
  questionCounter--;
  setQ(questionCounter);
  if (questionCounter > 0)
    questionCounter--;
  setQ(questionCounter);
}

var past_users = []

function answerCheck(n) {
  const currentQuestion = questions[questionCounter];
  if (currentQuestion.answers[n].correct)
    {
      var user = JSON.parse(localStorage.getItem("studData"));
      user.score += 1;
      localStorage.setItem("studData", JSON.stringify(user));
    }
  nextQ();
}
