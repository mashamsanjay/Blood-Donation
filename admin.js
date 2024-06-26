function loadAdmin() {
    fetch('admin.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('main').innerHTML = data;
            initializeAdminPage();
        });
}
let campaigns = [
    { name: "Blood Donation Camp", date: "2024-06-01", location: "City Hospital", description: "A blood donation camp." },
    { name: "Organ Donation Awareness", date: "2024-07-15", location: "Community Center", description: "Awareness about organ donation." }
];

function displayCampaigns() {
    const campaignTableBody = document.getElementById('campaign-table-body');
    campaignTableBody.innerHTML = '';
    campaigns.forEach((campaign, index) => {
        campaignTableBody.innerHTML += `
            <tr>
                <td>${campaign.name}</td>
                <td>${campaign.date}</td>
                <td>${campaign.location}</td>
                <td>${campaign.description}</td>
                <td><button onclick="deleteCampaign(${index})">Delete</button></td>
            </tr>
        `;
    });
}

function deleteCampaign(index) {
    campaigns.splice(index, 1);
    displayCampaigns();
    syncCampaigns();
}

function syncCampaigns() {
    localStorage.setItem('campaigns', JSON.stringify(campaigns));
}

function loadAdminCampaigns() {
    const storedCampaigns = localStorage.getItem('campaigns');
    if (storedCampaigns) {
        campaigns = JSON.parse(storedCampaigns);
    }
    displayCampaigns();
}

function showAddCampaignForm() {
    document.getElementById('add-campaign-form').style.display = 'block';
}

function addCampaign() {
    const name = document.getElementById('campaign-name').value;
    const date = document.getElementById('campaign-date').value;
    const location = document.getElementById('campaign-location').value;
    const description = document.getElementById('campaign-description').value;

    campaigns.push({ name, date, location, description });
    displayCampaigns();
    syncCampaigns();
    document.getElementById('add-campaign-form').style.display = 'none';
}

// Load campaigns when the page is ready
document.addEventListener('DOMContentLoaded', loadAdminCampaigns);