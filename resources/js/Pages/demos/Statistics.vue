<template>
    <div class="stats-dashboard">
        <h2>Statistics Dashboard</h2>
        <div class="stats">
            <div class="stat">
                <h3>Sales</h3>
                <p>{{ sales }}</p>
            </div>
            <div class="stat">
                <h3>Expenses</h3>
                <p>{{ expenses }}</p>
            </div>
            <div class="stat">
                <h3>Profit</h3>
                <p>{{ profit }}</p>
            </div>
        </div>
        <div class="charts">
            <div class="chart">
                <h3>Monthly Sales</h3>
                <canvas id="salesChart"></canvas>
            </div>
            <div class="chart">
                <h3>Monthly Expenses</h3>
                <canvas id="expensesChart"></canvas>
            </div>
            <div class="chart">
                <h3>Monthly Profit</h3>
                <canvas id="profitChart"></canvas>
            </div>
            <div class="chart">
                <h3>Customer Growth</h3>
                <canvas id="customerGrowthChart"></canvas>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';

const sales = ref('$50,000');
const expenses = ref('$30,000');
const profit = ref('$20,000');

onMounted(() => {
    const salesCtx = document.getElementById('salesChart').getContext('2d');
    new Chart(salesCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Sales',
                data: [12000, 19000, 3000, 5000, 2000, 30000, 45000],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const expensesCtx = document.getElementById('expensesChart').getContext('2d');
    new Chart(expensesCtx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Expenses',
                data: [8000, 15000, 2000, 4000, 1000, 20000, 25000],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: true,
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const profitCtx = document.getElementById('profitChart').getContext('2d');
    new Chart(profitCtx, {
        type: 'pie',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Profit',
                data: [4000, 4000, 1000, 1000, 1000, 10000, 20000],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                fill: true,
            }]
        },
        options: {
            responsive: true,
        }
    });

    const customerGrowthCtx = document.getElementById('customerGrowthChart').getContext('2d');
    new Chart(customerGrowthCtx, {
        type: 'radar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Customer Growth',
                data: [100, 200, 300, 400, 500, 600, 700],
                borderColor: 'rgba(255, 206, 86, 1)',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                fill: true,
            }]
        },
        options: {
            responsive: true,
        }
    });
});
</script>

<style scoped>
.stats-dashboard {
    padding: 20px;
    border: 1px solid #B4A9C7;
    border-radius: 10px;
    margin-top: 10px;
}
.stats {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
}
.stat {
    text-align: center;
}
.charts {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}
.chart {
    margin-top: 20px;
}
.stats-dashboard h2 {
    font-size: 1.5rem;
    color: white;
    padding-bottom: 1rem;
}
</style>
