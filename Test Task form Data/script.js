

let form = document.querySelector("form");


form.addEventListener("submit", function(a){

    a.preventDefault();

    const data = new FormData(this);


    const tbody = document.getElementById("tBody").insertRow();

    const cell1 = tbody.insertCell();
    const cell2 = tbody.insertCell();
    const cell3 = tbody.insertCell();
    const cell4 = tbody.insertCell();
    const cell5 = tbody.insertCell();
    const cell6 = tbody.insertCell();

  let subject1 = data.get("subject1");
  let subject2 = data.get("subject2");
  let subject3 = data.get("subject3");
  let subject4 = data.get("subject4");
  let subject5 = data.get("subject5");
  let subject6 = data.get("subject6");

  cell1.textContent = subject1;
  cell2.textContent = subject2;
  cell3.textContent = subject3;

debugger
  const percentage = subject2 / subject3 * 100;

const realPercent = percentage.toFixed(2)


  cell4.textContent = realPercent + "%";
//   cell5.textContent = subject5;
//   cell6.textContent = subject6;
    
})