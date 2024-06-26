import { setDoc } from "./appwrite.mjs";

function storeDonorDetails() {
     // Get form data
     var name = document.getElementById("name").value;
     var age = document.getElementById("age").value;
     var gender = document.getElementById("gender").value;
     var donorNumber = document.getElementById("Donor-Number").value; // Corrected ID
     var email = document.getElementById("email").value;
     var bloodType = document.getElementById("blood-type").value;
     var organs = [];
     var organCheckboxes = document.querySelectorAll('input[name="organ[]"]:checked');
     organCheckboxes.forEach(function(checkbox) {
         organs.push(checkbox.value);
     });
     var address = document.getElementById("address").value;
   
     // Store donor details in local storage
     const data = {
          Name: name,
          Gender: gender,
          Age: age,
          DonorNumber: donorNumber,
          Email: email,
          BloodType: bloodType,
          Organ: organs,
          Address: address,
      }
     localStorage.setItem("donorDetails", JSON.stringify(donorDetails));
     console.log("Storing donor details...");
     // Redirect to details.html
     window.location.href = "details.html";
     setDoc(data);
 }