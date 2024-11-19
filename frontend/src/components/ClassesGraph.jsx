import React from 'react';
import ApexCharts from 'react-apexcharts';

const ClassesGraph = () => {
    const getChartOptions = () => {
        return {
            series: [30, 25, 20, 25], // Adjust the values based on the attendance for each class
            colors: ["#1C64F2", "#16BDCA", "#9061F9", "#FF5733"], // Adjust colors as needed
            chart: {
                height: 420,
                width: "100%",
                type: "pie",
            },
            stroke: {
                colors: ["white"],
                lineCap: "",
            },
            plotOptions: {
                pie: {
                    labels: {
                        show: true,
                    },
                    size: "100%",
                    dataLabels: {
                        offset: -25,
                    },
                },
            },
            labels: ["Cardio", "Yoga", "Zumba", "Boxing"], // Update class labels
            dataLabels: {
                enabled: true,
                style: {
                    fontFamily: "Inter, sans-serif",
                },
            },
            legend: {
                position: "bottom",
                fontFamily: "Inter, sans-serif",
            },
            yaxis: {
                labels: {
                    formatter: function (value) {
                        return value + "%";
                    },
                },
            },
            xaxis: {
                labels: {
                    formatter: function (value) {
                        return value + "%";
                    },
                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
            },
        };
    };

    const chartOptions = getChartOptions();

    return (
        <div className="bg-white p-4 md:p-6 flex flex-col text-center">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Your Appointments</h5>
            <hr className="w-full bg-gray-300 dark:bg-gray-700 my-4" />
            <div className="py-6" id="pie-chart">
                <ApexCharts options={chartOptions} series={chartOptions.series} type="pie" height={320} />
            </div>
        </div>
    );
};

export default ClassesGraph;
