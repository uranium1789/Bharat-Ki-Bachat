// Define a variable to store the chart instance outside the event listener
var investmentChart;

document.getElementById('investmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var amount = parseFloat(document.getElementById('investmentAmount').value);
    var period = parseFloat(document.getElementById('investmentPeriod').value); // Assuming this is in months
    var rate = parseFloat(document.getElementById('rateOfReturn').value);
    var frequency = document.getElementById('investmentFrequency').value;
    var results = calculateCompoundInterest(amount, period, rate, frequency);
    displayResult(results.futureValue);
    updateChart(results.investedAmounts, results.futureValues, period); // Update the chart with new data
});

function calculateCompoundInterest(principal, numberOfMonths, annualRate, frequency) {
    var monthlyRate = annualRate / 12 / 100;
    var investedAmounts = [];
    var futureValues = [];
    var futureValue = 0;
    var totalInvested = 0;
    var compoundFrequency = getCompoundFrequency(frequency);

    for (var month = 1; month <= numberOfMonths; month++) {
        if (month % compoundFrequency === 0) {
            totalInvested += principal;
        }
        futureValue = (futureValue + principal) * (1 + monthlyRate);
        investedAmounts.push(totalInvested);
        futureValues.push(futureValue);
    }
    return { investedAmounts, futureValues, futureValue };
}

function getCompoundFrequency(frequency) {
    switch (frequency) {
        case 'weekly': return 4; // Weekly investments
        case 'monthly': return 1; // Monthly investments
        case 'yearly': return 1/12; // Yearly investments
        default: return 1; // Default to monthly
    }
}

function displayResult(futureValue) {
    document.getElementById('investmentResult').innerHTML = 'Future Value: <strong>₹' + futureValue.toFixed(2) + '</strong>';
}

function updateChart(investedAmounts, futureValues, numberOfMonths) {
    var labels = Array.from({ length: numberOfMonths }, (v, i) => (i + 1) + ' month' + ((i + 1) === 1 ? '' : 's'));

    if (investmentChart) {
        // Update the existing chart's data
        investmentChart.data.labels = labels;
        investmentChart.data.datasets[0].data = investedAmounts;
        investmentChart.data.datasets[1].data = futureValues;
        investmentChart.update();
    } else {
        // Create a new chart instance if it doesn't exist
        var ctx = document.getElementById('investmentChart').getContext('2d');
        investmentChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Total Amount Invested',
                        data: investedAmounts,
                        backgroundColor: 'rgba(255, 206, 86, 0.2)',
                        borderColor: 'rgba(255, 206, 86, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Future Value',
                        data: futureValues,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                interaction: {
                    mode: 'index',
                    intersect: false
                },
                plugins: {
                    tooltip: {
                        enabled: true
                    }
                }
            }
        });
    }
}

// Event listeners for range sliders to update display values
document.getElementById('investmentPeriod').addEventListener('input', function() {
    document.getElementById('periodValue').textContent = this.value + ' months';
});

document.getElementById('rateOfReturn').addEventListener('input', function() {
    document.getElementById('rateValue').textContent = this.value + '%';
});
