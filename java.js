const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");

const dayOtp = document.getElementById("DD");
const monthOtp = document.getElementById("MM");
const yearOtp = document.getElementById("YY");

const form = document.querySelector("form");

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      parent.querySelector("small").innerText = "this field is required.";
      validator = false;
    } else if (monthInp.value > 12) {
        monthInp.parentElement.querySelector("small").innerText = "must be valid month.";
        validator = false;
    } else if (dayInp.value > 31) {
        dayInp.parentElement.querySelector("small").innerText =
          "must be valid day.";
        validator = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
      validator = true;
    }
  });
  return validator;
}

form.addEventListener("submit", handleSubmit);
