

const input1 = document.getElementById("subject1");
const input2 = document.getElementById("subject2");
const input3 = document.getElementById("subject3");

let form = document.querySelector("form");


form.addEventListener("submit", function (a) {

  a.preventDefault();


  if (input1.value != "") {

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



    switch (true) {
      case realPercent >= 90:
        cell5.textContent = "A+"
        break;

      case realPercent >= 85:
        cell5.textContent = "A"
        break;

      case realPercent >= 70:
        cell5.textContent = "B"
        break;

      case realPercent >= 40:
        cell5.textContent = "C"
        break;

      default:
        cell5.textContent = "Failed"
        break;
    }


  }

  else {
    alert("Please fill.")
  }
})