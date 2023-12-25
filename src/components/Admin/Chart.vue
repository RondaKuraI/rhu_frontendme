<template>
    <div>
        <v-container>
            <h1>Statistics</h1>
            <v-card elevation="2">
                <v-row>
                    <v-col>
                        <canvas id="myChart"></canvas>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>

  <script>
  import Chart from 'chart.js/auto';
  export default {
    name: 'Chart',
    data: () => ({

    }),
    mounted(){
        console.log('Component mounted');

        const ctx = document.getElementById('myChart');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Paracetamol', 'Ibuprofen', 'Loperamide', 'Mebendazole', 'Cetirizine', 'Stresstabs'],
                datasets: [{
                    label: 'No. of Medicines',
                    data: [1350, 1500, 1500, 1700, 2000, 2500],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)',
                        'rgba(255, 159, 64, 0.7)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
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

        myChart;
    }
  }
  </script>

<style scoped>

</style>