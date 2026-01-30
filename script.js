function searchResult() {
  var year = document.getElementById("year").value;
  var month = document.getElementById("month").value;
  var type = document.getElementById("type").value;
  var reg = document.getElementById("reg").value;
  var dob = document.getElementById("dob").value;

  if (year === "" || month === "" || type === "" || reg === "" || dob === "") {
    alert("Please fill all details");
    return;
  }

  window.location.href =
    "result.html?year=" + year +
    "&month=" + month +
    "&type=" + type +
    "&reg=" + reg +
    "&dob=" + dob;
}
