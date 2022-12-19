<template>
	<apexchart type="bar" height="350" :options="chartOptions" :series="series" />
</template>

<script>
	export default {
		data() {
			return {
				series: [
					{
						name: "Actual",
						data: [
							{
								x: "2011",
								y: 1292,
							},
							{
								x: "2012",
								y: 4432,
							},
							{
								x: "2013",
								y: 5423,
							},
							{
								x: "2014",
								y: 6653,
							},
							{
								x: "2015",
								y: 8133,
							},
							{
								x: "2016",
								y: 7132,
							},
							{
								x: "2017",
								y: 7332,
							},
							{
								x: "2018",
								y: 6553,
							},
						],
					},
				],
				chartOptions: {
					chart: {
						height: 350,
						type: "bar",
					},
					plotOptions: {
						bar: {
							columnWidth: "60%",
						},
					},
					colors: ["#8C367D"],
					dataLabels: {
						enabled: false,
					},
					legend: {
						show: true,
						showForSingleSeries: true,
						customLegendItems: ["Today", "Yesterday"],
						markers: {
							fillColors: ["#8C367D", "#775DD0"],
						},
					},
				},
			};
		},
	};
</script>
