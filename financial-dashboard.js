// Function to update personalized greeting based on time of day
function updatePersonalizedGreeting() {
    const hours = new Date().getHours();
    const greeting = hours < 12 ? 'Good morning' : hours < 18 ? 'Good afternoon' : 'Good evening';
    document.getElementById('personalized-greeting').textContent = `${greeting}, Rajnish!`;
}

// Function to fetch and display real-time data
function fetchAndUpdateMetrics() {
    // Fetch and update total savings
    fetchTotalSavings().then(savings => {
        document.getElementById('total-savings').textContent = `₹${savings.toLocaleString()}`;
    });
    // Fetch and update investments
    fetchInvestments().then(investments => {
        document.getElementById('investments').textContent = `₹${investments.toLocaleString()}`;
    });
    // Fetch and update upcoming bills
    fetchUpcomingBills().then(bills => {
        document.getElementById('upcoming-bills').textContent = `₹${bills.toLocaleString()}`;
    });
}

// Call the functions to update the dashboard
document.addEventListener('DOMContentLoaded', function() {
    updatePersonalizedGreeting();
    fetchAndUpdateMetrics();
    // Initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();
});


// Example fetch functions (replace with real data fetching logic)
function fetchTotalSavings() {
    return Promise.resolve(17500); // Placeholder value
}

function fetchInvestments() {
    return Promise.resolve(150000); // Placeholder value
}

function fetchUpcomingBills() {
    return Promise.resolve(82500); // Placeholder value
}



document.addEventListener('DOMContentLoaded', function() {
    // Data for income trend chart (line chart)
    var incomeTrendCtx = document.getElementById('income-trend-chart').getContext('2d');
    var incomeTrendChart = new Chart(incomeTrendCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Income',
                data: [100000, 110000, 105000, 115000, 120000, 125000],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Data for expenses overview (pie chart)
    var expensesPieCtx = document.getElementById('expenses-pie-chart').getContext('2d');
    var expensesPieChart = new Chart(expensesPieCtx, {
        type: 'pie',
        data: {
            labels: ['Tuition Fees', 'Electricity', 'Car Maintenance', 'Clothes', 'Medical', 'Wifi & Mobile', 'Household', 'Trips', 'Stationery', 'House Maintenance'],
            datasets: [{
                label: 'Expenses',
                data: [15000, 3500, 10000, 10000, 5000, 3000, 20000, 5000, 5000, 5000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(199, 199, 199, 0.2)',
                    'rgba(83, 102, 255, 0.2)',
                    'rgba(40, 159, 64, 0.2)',
                    'rgba(210, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(159, 159, 159, 1)',
                    'rgba(83, 102, 255, 1)',
                    'rgba(40, 159, 64, 1)',
                    'rgba(210, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        }
    });
});
