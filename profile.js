
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('profile-form');
        const popupMessage = document.getElementById('popup-message');
    
        form.addEventListener('submit', function(event) {
            event.preventDefault();
    
            const donorDetails = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                gender: document.getElementById('gender').value,
                phone: document.getElementById('phone').value,
                bloodType: document.getElementById('blood-type').value,
                organs: Array.from(document.querySelectorAll('input[name="organ[]"]:checked')).map(el => el.value),
                donorType: document.getElementById('donor-type').value,
                address: document.getElementById('address').value,
            };
    
            // Store donor details in local storage
            let donors = JSON.parse(localStorage.getItem('donors')) || [];
            donors.push(donorDetails);
            localStorage.setItem('donors', JSON.stringify(donors));
    
            // Show success popup
            popupMessage.classList.add('show');
        });
    
        window.closePopup = function() {
            popupMessage.classList.remove('show');
            window.location.href = 'index.html';
        };
    });
        
    