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

document.addEventListener('DOMContentLoaded', function() {
    const financialData = [
        { description: 'Income', amount: null, notes: '' },
        { description: 'Monthly Salary', amount: 100000, notes: '' },
        { description: 'Investments', amount: null, notes: 'Monthly contributions' },
        { description: 'PPF Investment', amount: 12500, notes: 'Annual investment of 1,50,000' },
        { description: 'Expenses', amount: null, notes: '' },
        { description: 'Tuition Fees', amount: 15000, notes: '' },
        { description: 'Electricity Bill', amount: 3500, notes: '' },
        { description: 'Car Maintenance', amount: 10000, notes: 'Including petrol' },
        { description: 'Clothes', amount: 10000, notes: 'During festivals' },
        { description: 'Medical Bill', amount: 5000, notes: '' },
        { description: 'Wifi & Mobile Bill', amount: 3000, notes: '' },
        { description: 'Household Expenses', amount: 20000, notes: 'Groceries, grains, etc.' },
        { description: 'Monthly Trips', amount: 5000, notes: '' },
        { description: 'Stationery & Chores', amount: 5000, notes: '' },
        { description: 'House Maintenance', amount: 5000, notes: '' },
        { description: 'Total Expenses', amount: 82500, notes: '' },
        { description: 'Potential Savings', amount: 17500, notes: 'After expenses and investments' }
    ];

    const tableBody = document.getElementById('financial-summary-table').querySelector('tbody');
    financialData.forEach(item => {
        const row = tableBody.insertRow();
        const cellDescription = row.insertCell(0);
        const cellAmount = row.insertCell(1);
        const cellNotes = row.insertCell(2);
        cellDescription.textContent = item.description;
        cellAmount.textContent = item.amount ? `₹${item.amount.toLocaleString()}` : '';
        cellNotes.textContent = item.notes;
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // Data for investment overview chart
    var investmentCtx = document.getElementById('investment-chart').getContext('2d');
    var investmentChart = new Chart(investmentCtx, {
        type: 'bar',
        data: {
            labels: ['Stocks', 'Bonds', 'Real Estate', 'Mutual Funds'],
            datasets: [{
                label: 'Investment Distribution',
                data: [50000, 30000, 20000, 10000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
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

    // Data for investment projection chart
    var projectionCtx = document.getElementById('projection-chart').getContext('2d');
    var projectionChart = new Chart(projectionCtx, {
        type: 'line',
        data: {
            labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4'],
            datasets: [{
                label: 'Projected Growth',
                data: [105000, 115500, 127050, 139755], // Assuming a 10% growth per year
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
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
});


document.addEventListener('DOMContentLoaded', function() {
    // Function to calculate tax based on Indian tax slabs
    function calculateTax(income) {
        let tax = 0;
        if (income <= 250000) {
            tax = 0;
        } else if (income <= 500000) {
            tax += (income - 250000) * 0.05;
        } else if (income <= 750000) {
            tax += 12500 + (income - 500000) * 0.1;
        } else if (income <= 1000000) {
            tax += 37500 + (income - 750000) * 0.15;
        } else if (income <= 1250000) {
            tax += 75000 + (income - 1000000) * 0.2;
        } else if (income <= 1500000) {
            tax += 125000 + (income - 1250000) * 0.25;
        } else {
            tax += 187500 + (income - 1500000) * 0.3;
        }
        return tax;
    }

    // Assuming Rajnish has made investments that save tax
    const grossIncome = 1200000; // Annual gross income
    const investments = 150000; // Amount invested in tax-saving schemes
    const taxableIncome = grossIncome - investments;
    const taxBeforeInvestment = calculateTax(grossIncome);
    const taxAfterInvestment = calculateTax(taxableIncome);

    // Update the tax liability on the dashboard
    document.getElementById('tax-liability').textContent = `₹${taxAfterInvestment.toLocaleString()}`;

    // Data for the tax visualization chart
    const taxData = {
        labels: ['Tax Before Investment', 'Tax After Investment'],
        datasets: [{
            label: 'Tax Liability',
            data: [taxBeforeInvestment, taxAfterInvestment],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
            borderWidth: 1
        }]
    };

    // Configuration for the tax visualization chart
    const taxConfig = {
        type: 'bar',
        data: taxData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    // Render the tax visualization chart
    const taxCtx = document.getElementById('tax-savings-chart').getContext('2d');
    const taxChart = new Chart(taxCtx, taxConfig);
});




