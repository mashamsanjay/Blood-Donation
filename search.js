import { getDocs } from "./appwrite.mjs";
function searchDonors() {
     const bloodType = document.getElementById('search-blood-type').value.trim();
     const organType = document.getElementById('search-organ-type').value.trim();
     const resultsTable = document.getElementById('results-table');
     const resultsTableBody = document.getElementById('results-table-body');
     const errorMessage = document.getElementById('error-message');

     resultsTable.style.display = 'none';
     resultsTableBody.innerHTML = '';
     errorMessage.style.display = 'none';
     errorMessage.textContent = '';

     // const donors = JSON.parse(localStorage.getItem('donors')) || [];
     const donors = getDocs();
     const filteredDonors = donors.filter(donor => {
         return (bloodType === '' || donor.bloodType === bloodType) &&
                (organType === '' || donor.organsDonated.toLowerCase().includes(organType.toLowerCase()));
     });

     if (donors.length > 0) {
         donors.forEach(donor => {
             resultsTableBody.innerHTML += `
                 <tr>
                     <td>${donor.Name}</td>
                     <td>${donor.Email}</td>
                     <td>${donor.Gender}</td>
                     <td>${donor.BloodType}</td>
                     <td>${donor.Organ}</td>
                     <td>${donor.BloodType}</td>
                     <td>${donor.Address}</td>
                 </tr>
             `;
         });
         resultsTable.style.display = 'table';
     } else {
         errorMessage.textContent = 'No donors found matching the search criteria.';
         errorMessage.style.display = 'block';
     }
 }