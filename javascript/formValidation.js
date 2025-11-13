//event listener waiting ti b triggered by submit button
document.getElementById("form").addEventListener("submit", recieptFuncCaller);

//function to call other functions and prevent default behaviour of submit button
function recieptFuncCaller(event) {
  //prevents page from refreshing when submit button is clicked
  event.preventDefault();
  //calls the reciept function
  if (validatorFunc() == true) {
    //generate reciept
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let birthday = document.getElementById("birthday").value;
    let email = document.getElementById("email").value;
    let message1 = document.getElementById("message1").value;
    let message = document.getElementById("message").value;
    let report = document.getElementById("report").value;
    //      let tShirtOption = document.getElementById("6").checked;
    let hoodiesOption = document.getElementById("7").checked;
    let vinylOption = document.getElementById("8").checked;
    let compactDisks = document.getElementById("9").checked;
    let otherOption = document.getElementById("10").checked;

    // console.log(calculationFunc ());
    console.log("First name: " + fname);
    console.log("Last name: " + lname);
    console.log("Birthday: " + birthday);
    console.log("Email: " + email);
    if (tShirtOption) {
      console.log("Type of item requested: T-Shirt");
    } else if (hoodiesOption) {
      console.log("Type of item requested: Hoodies");
    }
    if (vinylOption) {
      console.log("Type of item requested: Vinyls");
    } else if (compactDisks) {
      console.log("Type of item requested: CDs");
    }
    if (otherOption) {
      console.log("Type of item requested: Other");
    } else {
    }
    console.log("Other/Specifications: " + message1);
    //checkbox checker t or f
    console.log(
      "Items chosen: " +
        (tShirt.checked ? "T-shirts, " : "") +
        (hooDies.checked ? "Hoodies, " : "") +
        (vinYls.checked ? "Vinyls, " : "") +
        (CompactDisk.checked ? "CDs, " : "") +
        (oTher.checked ? "Other.." : "")
    );
    console.log("Other/Specifications: " + message);
    console.log("Preferred delivery: " + report);
    console.log("The total of your order is: $" + calculationFunc());
  } else {
    return;
  }
}
//function to validate form inputs
function validatorFunc() {
  let firstName = document.getElementById("fname");
  let lastName = document.getElementById("lname");

  //check if first name and last name are empty
  if (firstName.value === "") {
    alert("Missing input. Please try again.");
    firstName.focus();
    return false;
  }

  if (lastName.value === "") {
    alert("Missing input. Please try again.");
    lastName.focus();
    return false;
  }

  return true;
}

// let test = document.getElementById("tShirt").value;
// return test;

//function to calculate total price of selected items
function calculationFunc() {
  //array of items and their values
  const items = [
    document.getElementById("tShirt"),
    document.getElementById("hooDies"),
    document.getElementById("vinYls"),
    document.getElementById("CompactDisk"),
    document.getElementById("oTher"),
  ];
  const value = [
    document.getElementById("tShirt").value,
    document.getElementById("hooDies").value,
    document.getElementById("vinYls").value,
    document.getElementById("CompactDisk").value,
    document.getElementById("oTher").value,
  ];

  //array to hold item prices
  let itemPrice = [0, 0, 0, 0, 0];

  //loop through items to check which are selected and get their prices
  for (let index = 0; index < value.length; index++) {
    if (items[index].checked == true) {
      itemPrice[index] = parseFloat(value[index]);
    }
  }

  //calculate total price
  let total =
    itemPrice[0] + itemPrice[1] + itemPrice[2] + itemPrice[3] + itemPrice[4];

  return total;
  // const shirt = document.getelementbyid("idname").value
  // let test = document.getElementById("tShirt").value;
  // return test;
  // console.log(test);
}
