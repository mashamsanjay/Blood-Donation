// Function to load home page content
function loadHome() {
    document.getElementById("main-content").innerHTML = `
        <section class="hero">
        <div class="info">
        <h2>Welcome to Blood & Organ Donation Hub!</h2>
        <p>We are dedicated to connecting donors with those in need, saving lives and improving health outcomes.
        Every year, millions of people require blood and organs for medical treatments and surgeries. Your donation can make a difference!
        Explore our website to learn more about donation opportunities and how you can get involved.</p>
        <p>Donation is the giving of an organ and tissue to help someone that needs a transplant.
         A transplant can save or transform the life of a person.
         One organ donor can save up to 7 lives and help many more through eye and tissue donation.</p>
         <p>"The gift of life is the most precious gift of all. Donate blood, donate organs, and give someone the chance to live a healthier, happier life."</p>
         <p>"A single act of kindness can save a life. Be a hero, donate blood and organs. Your generosity knows no bounds."</p>
    </div>
    <div class="image">
        <img src="https://webresources.mq.edu.au/thisweek/wp-content/uploads/2022/02/202202-TW-Grateful-Patient-Program-web-704x371.jpg" alt="Blood & Organ Donation" class="home-image">
        <button class="blink-btn" onclick="loadProfile()">Create Profile Here</button>
    </div>
</section>
            
        </section>
    `;
}

// Function to load about page content
function loadAbout() {
    document.getElementById("main-content").innerHTML = `
        <section class="about">
            <h2>About Us</h2>
            <p>We are dedicated to facilitating blood and organ donations to save lives and improve health outcomes.</p>
            <p>In India, millions of people require blood and organs each year. Your donation can make a difference!</p>
            <h2>Our Mission</h2>
            <p>At Blood & Organ Donation Hub, our mission is to save lives and improve health outcomes by facilitating blood and organ donations.</p>

            <h2>Our Vision</h2>
            <p>We envision a world where every individual has access to safe and timely blood and organ donations, ensuring better healthcare and quality of life for all.</p>

            <h2>What We Do</h2>
            <p>We work tirelessly to connect donors with those in need, coordinating blood drives, organ donor registrations, and awareness campaigns across communities.</p>

            <h2>Why Donate?</h2>
            <p>Donating blood and organs is one of the most selfless acts one can perform. Your donation can save lives, alleviate suffering, and provide hope to individuals and families facing medical challenges.</p>

            <h2>Our Impact</h2>
            <p>Since our inception, we have facilitated thousands of blood transfusions and organ transplants, positively impacting countless lives and fostering a culture of giving and compassion.</p>

            <h2>Get Involved</h2>
            <p>Join us in our mission to make a difference! Whether you're interested in becoming a donor, volunteering your time, or supporting our initiatives, there are many ways to get involved and contribute to our cause.</p>

        </section>
    `;
}

// Function to load donate page content and registration form
function loadDonate() {
    // Load the registration form page
    fetch("index2.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("main-content").innerHTML = html;
        });
}

function loadSearch(){
    fetch("search.html")
        .then(response=> response.text())
        .then(html=> {
            document.getElementById("main-content").innerHTML =html;
        });
}
// Get the search button element
const searchBtn = document.getElementById("search-btn");

// Add event listener to the search button
searchBtn.onkeydown("click", function() {
    // Redirect the user to the search donor details page
    window.location.href = "search.html";
});

document.addEventListener("DOMContentLoaded", function() {
    loadCampaigns();
});

function loadCampaigns() {
    fetch("campaigns.html")
    .then(response=> response.text())
    .then(html=> {
        document.getElementById("main-content").innerHTML =html;
    })
}
function loadCampaigns() {
    fetch("campaigns.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("main-content").innerHTML = html;
        setTimeout(function() {
            animatePercentage("percentage1", "circle1", 75, ["#bd4415", "#cebb09"]);
            animatePercentage("percentage2", "circle2", 60, ["#23c59c", "#196f85"]);
            animatePercentage("percentage3", "circle3", 5, ["#ba2d53", "#be08b8"]);
            startCounter(1000);
        }, 300); // Adjust timing to match your animation duration
    });
}
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        animatePercentage("percentage1", "circle1", 75, ["#bd4415", "#cebb09"]);
        animatePercentage("percentage2", "circle2", 60, ["#23c59c", "#196f85"]);
        animatePercentage("percentage3", "circle3", 5, ["#ba2d53", "#be08b8"]);
        startCounter(1000);
    }, 300); // Adjust timing to match your animation duration
});

function animatePercentage(textId, circleId, targetPercentage, colors) {
    let textElem = document.getElementById(textId);
    let circleElem = document.getElementById(circleId);
    let currentPercentage = 0;
    let interval = setInterval(function() {
        if (currentPercentage >= targetPercentage) {
            clearInterval(interval);
        } else {
            currentPercentage++;
            textElem.innerText = currentPercentage + "%";
            circleElem.style.background = `conic-gradient(
                ${colors[0]} 0%,
                ${colors[1]} ${currentPercentage}%,
                #e0e0e0 ${currentPercentage}%,
                #e0e0e0 100%
            )`;
        }
    }, 30);
}

function startCounter(startValue) {
    let counterElement = document.getElementById("counter");
    let currentCount = startValue;
    let targetCount = startValue + 500; // Adjust this to your desired target
    let increment = 1; // Adjust this to control the speed of incrementing

    function updateCounter() {
        if (currentCount < targetCount) {
            currentCount += increment;
            counterElement.innerText = currentCount;
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
}





function loadProfile() {
    fetch("profile.html")
    .then(response=> response.text())
    .then(html=> {
        document.getElementById('main-content').innerHTML = html;
    })
}













// JavaScript code for profile.html, search.html, and admin.html

// Handle profile form submission
function submitForm(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(document.getElementById('profile-form'));
    const donorData = Object.fromEntries(formData.entries());
    donorData.organ = formData.getAll('organ[]');

    // Store donor data in local storage
    let donors = JSON.parse(localStorage.getItem('donors')) || [];
    donors.push(donorData);
    localStorage.setItem('donors', JSON.stringify(donors));

    // Show popup
    document.getElementById('popup-message').classList.add('show');
}

// Close the popup and redirect to the home page
function closePopup() {
    document.getElementById('popup-message').classList.remove('show');
    window.location.href = 'index.html';
}

// Handle donor search
function searchDonors(event) {
    event.preventDefault();

    const formData = new FormData(document.getElementById('search-form'));
    const bloodType = formData.get('blood-type');
    const organs = formData.getAll('organ[]');

    const donors = JSON.parse(localStorage.getItem('donors')) || [];
    let results = donors.filter(donor => {
        return (bloodType === "" || donor['blood-type'] === bloodType) &&
               (organs.length === 0 || organs.some(organ => donor.organ.includes(organ)));
    });

    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (results.length > 0) {
        results.forEach(donor => {
            const donorInfo = `
                <div>
                    <p>Name: ${donor.name}</p>
                    <p>Email: ${donor.email}</p>
                    <p>Gender: ${donor.gender}</p>
                    <p>Phone: ${donor.phone}</p>
                    <p>Blood Type: ${donor['blood-type']}</p>
                    <p>Organs: ${donor.organ.join(', ')}</p>
                    <p>Donor Type: ${donor['donor-type']}</p>
                    <p>Address: ${donor.address}</p>
                </div>
            `;
            resultsContainer.innerHTML += donorInfo;
        });
    } else {
        resultsContainer.innerHTML = '<p>No donors found</p>';
    }
}

// Display all donors in admin page
function loadAdminPage() {
    const donors = JSON.parse(localStorage.getItem('donors')) || [];
    const adminList = document.getElementById('admin-list');

    donors.forEach((donor, index) => {
        const donorInfo = `
            <div>
                <p>Name: ${donor.name}</p>
                <p>Email: ${donor.email}</p>
                <p>Gender: ${donor.gender}</p>
                <p>Phone: ${donor.phone}</p>
                <p>Blood Type: ${donor['blood-type']}</p>
                <p>Organs: ${donor.organ.join(', ')}</p>
                <p>Donor Type: ${donor['donor-type']}</p>
                <p>Address: ${donor.address}</p>
                <button onclick="removeDonor(${index})">Remove Donor</button>
            </div>
        `;
        adminList.innerHTML += donorInfo;
    });
}

// Remove donor from the list
function removeDonor(index) {
    let donors = JSON.parse(localStorage.getItem('donors')) || [];
    donors.splice(index, 1);
    localStorage.setItem('donors', JSON.stringify(donors));
    location.reload(); // Reload the page to reflect changes
}

// Load admin page data when the page is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAdminPage);
} else {
    loadAdminPage();
}








// Ensure the admin button in the main navigation calls loadAdmin()
document.querySelector('.navbar-nav').addEventListener('click', function(e) {
    if (e.target.textContent === 'Admin') {
        e.preventDefault();
        loadAdmin();
    }
});

// Function to load campaigns in campaigns.html


// Function to load campaigns in admin.html



// Function to load contact page content
function loadContact() {
    document.getElementById("main-content").innerHTML = `
        <section class="contact">
            <h2>Contact Us</h2>
            <p>For inquiries or assistance, please contact us at:</p>
            <p>Email: info@donationhub.com</p>
            <p>Phone: +91 1234567890</p>
            <div class="social-icons">
                    <div class="social-icon">
                        <a href="https://instagram.com/akkalashivanireddy?igshid=MzMyNGUyNmU2YQ==">
                            <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-square2-512.png" class="social-icon-img">
                        </a>
                        <a href="https://www.youtube.com/@ShivaniReddy-kg2yn">
                        <img src="https://variety.com/wp-content/uploads/2020/06/youtube-logo.png?w=999" class="social-icon-img">
                        </a>
                        <a href="https://whatsapp.com/channel/0029Va8xYST6LwHtHIWRGl35">
                        <img src="https://clipart.info/images/ccovers/1499955335whatsapp-icon-logo-png.png"class="social-icon-img">
                        </a>
                        <a href="https://t.me/masscoders">
                        <img src="https://w0.peakpx.com/wallpaper/327/366/HD-wallpaper-technology-telegram-logo.jpg" class="social-icon-img">
                        </a>
                        <a href="https://www.linkedin.com/niharrdg">
                        <img src="https://store-images.s-microsoft.com/image/apps.37935.9007199266245907.b029bd80-381a-4869-854f-bac6f359c5c9.91f8693c-c75b-4050-a796-63e1314d18c9?h=464" class="social-icon-img">
                        </a>
                    
                        
                    </div>
        
        </section>
    `;
}
// Function to validate form before submission
function validateForm() {
    var age = document.getElementById("age").value;
    if (age < 18) {
        alert("You are not eligible for donation. Age must be 18 or above.");
        return false;
    }
    return true;
}
window.onload = loadHome;

function validateForm() {
    var donorNumberInput = document.getElementById("Donor Number").value.trim();
    var donorNumberError = document.getElementById("donorNumberError");

    // Check if donor number has exactly 10 digits and starts with 6, 7, 8, or 9
    if (!/^[6-9][0-9]{9}$/.test(donorNumberInput)) {
        donorNumberError.textContent = "Invalid donor number. Donor number must start with 6, 7, 8, or 9 and have exactly 10 digits.";
        return false;
    } else {
        donorNumberError.textContent = ""; // Clear the error message if donor number is valid
        return true;
    }
}
function validateSearchForm() {
    // You can add validation logic for the search form here if needed
    return true; // For now, always return true to allow form submission
}


// Your other JavaScript code goes here
function validateForm() {
    // Display popup message
    var popup = document.getElementById("popup-message");
    popup.style.display = "block";

    // Prevent form submission
    return false;
}

function storeDonorDetails() {
    // Get form data
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var donorNumber = document.getElementById("Donor Number").value;
    var email = document.getElementById("email").value;
    var bloodType = document.getElementById("blood-type").value;
    var organs = [];
    var organCheckboxes = document.querySelectorAll('input[name="organ[]"]:checked');
    organCheckboxes.forEach(function(checkbox) {
        organs.push(checkbox.value);
    });
    var address = document.getElementById("address").value;

    // Store donor details in local storage
    var donorDetails = {
        name: name,
        age: age,
        gender: gender,
        donorNumber: donorNumber,
        email: email,
        bloodType: bloodType,
        organs: organs,
        address: address
    };
    localStorage.setItem("donorDetails", JSON.stringify(donorDetails));
    window.location.href = "details.html";
}



  

