import React from 'react';
import ApexCharts from 'react-apexcharts';

const DoughNut = () => {
    const getChartOptions = () => {
        return {
            series: [250, 150], // Update series to include both Calories Burned and Resting Calories
            colors: ['#1C64F2', '#16BDCA'], // Update colors as needed
            chart: {
                height: 320,
                width: '100%',
                type: 'donut',
            },
            stroke: {
                colors: ['transparent'],
                lineCap: '',
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontFamily: 'Inter, sans-serif',
                                offsetY: 20,
                            },
                            total: {
                                showAlways: true,
                                show: true,
                                label: 'Calories',
                                fontFamily: 'Inter, sans-serif',
                                formatter: function (w) {
                                    // const sum = w.globals.seriesTotals.reduce((a, b) => {
                                    //     return a + b;
                                    // }, 0);
                                    return w.globals.seriesTotals[0];
                                },
                            },
                            value: {
                                show: true,
                                fontFamily: 'Inter, sans-serif',
                                offsetY: -20,
                                formatter: function (value) {
                                    return value;
                                },
                            },
                        },
                        size: '80%',
                    },
                },
            },
            grid: {
                padding: {
                    top: -2,
                },
            },
            labels: ['Calories Burned', 'Resting Calories'], // Update labels
            dataLabels: {
                enabled: false,
            },
            legend: {
                position: 'bottom',
                fontFamily: 'Inter, sans-serif',
            },
            yaxis: {
                labels: {
                    formatter: function (value) {
                        return value;
                    },
                },
            },
            xaxis: {
                labels: {
                    formatter: function (value) {
                        return value;
                    },
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                },
            },
        };
    };

    return (
    <div className="bg-white p-4 md:p-6 flex flex-col text-center">
      <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Today's Activity</h5>
      <hr className="w-full bg-gray-300 dark:bg-gray-700 my-4" />
      <div className="py-6" id="donut-chart">
        <ApexCharts options={getChartOptions()} series={getChartOptions().series} type="donut" height={320} />
      </div>
    </div>

    );
};

export default DoughNut;
