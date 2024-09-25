//equal key
let isResult = 0;
function result() {
  try {
    if (isResult == 0) {
      isResult = 1;
      function pow(x, n) {
        return Math.pow(x, n);
      }
      function sqrt(n) {
        return Math.sqrt(n);
      }

      let history = document.getElementById("history").innerHTML;
      let work1 = document.getElementById("work").value;
      let work=work1.replaceAll(' ','');
      let prev = document.getElementById("prev").value;
      let ans = eval(work);

      if (history == "") {
        document.getElementById("prev").value = work;
        history = "\n" + work + "=" + String(ans);
        document.getElementById("history").innerHTML = history;
        document.getElementById("answer").value = ans;
      } else {
        if (prev != work) {
          history = document.getElementById("history").value;
          document.getElementById("prev").value = work;
          history += "\n" + work + "=" + String(ans);
          document.getElementById("history").value = history;
          document.getElementById("answer").value = ans;
        }
      }
    }
    document.getElementById("err").innerHTML = " ";
  } catch (err) {
    console.log("Error Ouucred");
    document.getElementById("err").innerHTML =
      "Error Occured. Please check the expression <br>" + err.message;
  }
}


// Number button on click
let len = document.querySelectorAll(".num").length;
for (let i = 0; i < len; i++) {
  document.querySelectorAll(".num")[i].addEventListener("click", function () {
    if (isResult == 1) {
      document.getElementById("work").value = "";
      isResult = 0;
    }
    let b_val = this.innerHTML;
    let e = document.getElementById("work").value;
    e = e + b_val;
    document.getElementById("work").value = e;
  });
}

// Operator button on click
len = document.querySelectorAll(".opr").length;
let sqrt = 0,
  pow2 = 0;
for (let i = 0; i < len; i++) {
  document.querySelectorAll(".opr")[i].addEventListener("click", function () {
    switch (this.innerHTML) {
      case "X":
        document.getElementById("work").value += "*";
        break;
      case "sqrt":
        document.getElementById("work").value += "sqrt(";
        sqrt = 1;
        break;
      case "x<sup>2</sup>":
        document.getElementById("work").value += "pow(n,2)";
        break;
      case "x<sup>n</sup>":
        document.getElementById("work").value += "pow(n,x)";
        break;
      case "AC":
        document.getElementById("work").value = "";
        break;
      case "BS":
        isResult = 0;
        document.getElementById("work").value = document
          .getElementById("work")
          .value.slice(0, -1);
        break;
      default:
        document.getElementById("work").value += this.innerHTML;
    }
  });
}

// answer on click
document.getElementById("answer").addEventListener("click", function () {
  document.getElementById("work").focus();
});

//When key is pressed
document.getElementById("work").addEventListener("keyup", function (e) {
  ae = e.key.length > 1 ? 0 : e.key.charCodeAt(0);
  console.log(e.key, ae);
  if (e.key == "Enter") {
    e.target.selectionStart = document.getElementById("work").value.length ;

    result();
    isResult = 0;
    document.getElementById("work").value = document
          .getElementById("work")
          .value.slice(0, -1);
    return false;
  } else {
    if ((ae >= 65 && ae <= 90) || (ae >= 97 && ae <= 122)) {
      cpos = e.target.selectionStart;
      if (cpos == document.getElementById("work").value.length) {
        document.getElementById("work").value = document
          .getElementById("work")
          .value.slice(0, -1);
      } else {
        if (cpos == 0) {
          document.getElementById("work").value = document
            .getElementById("work")
            .value.slice(1);
        } else {
          document.getElementById("work").value =
            document.getElementById("work").value.slice(0, cpos - 1) +
            document.getElementById("work").value.slice(cpos);
        }
      }
      e.target.selectionStart = cpos - 1;
      e.target.selectionEnd = cpos - 1;
    }
  }
});