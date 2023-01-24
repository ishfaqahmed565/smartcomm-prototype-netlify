<template>
	<client-only>
		<apexchart
			type="bar"
			height="350"
			:options="chartOptions"
			:series="series"
		/>
	</client-only>
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
								x: "0",
								y: 3,
							},
							{
								x: "1",
								y: 2.5,
							},
							{
								x: "3",
								y: 6,
							},
							{
								x: "4",
								y: 10,
							},
							{
								x: "5",
								y: 5,
							},
							{
								x: "6",
								y: 9,
							},
							{
								x: "7",
								y: 10,
							},
							{
								x: "8",
								y: 15,
							},
							{
								x: "9",
								y: 3,
							},
							{
								x: "10",
								y: 2.5,
							},
							{
								x: "11",
								y: 6,
							},
							{
								x: "12",
								y: 10,
							},
							{
								x: "13",
								y: 5,
							},
							{
								x: "14",
								y: 9,
							},
							{
								x: "15",
								y: 10,
							},
							{
								x: "16",
								y: 15,
							},
							{
								x: "17",
								y: 3,
							},
							{
								x: "18",
								y: 2.5,
							},
							{
								x: "19",
								y: 6,
							},
							{
								x: "20",
								y: 10,
							},
							{
								x: "21",
								y: 5,
							},
							{
								x: "22",
								y: 9,
							},
							{
								x: "23",
								y: 10,
							},
							{
								x: "24",
								y: 15,
							},
						],
					},
				],
				chartOptions: {
					chart: {
						height: 350,
						type: "bar",
					},

					grid: {
						xaxis: {
							lines: {
								show: false,
							},
						},
						yaxis: {
							lines: {
								show: false,
							},
						},
					},
					title: {
						text: "Hours",
						floating: true,
						offsetY: 327,
						align: "center",
						style: {
							color: "#444",
							fontSize: "13px",
							fontWeight: "500",
						},
					},
					plotOptions: {
						bar: {
							columnWidth: "60%",
						},
					},
					colors: ["#3B2A82"],
					dataLabels: {
						enabled: false,
					},
					legend: {
						show: true,
						showForSingleSeries: true,
						customLegendItems: ["Today", "Yesterday"],
						horizontalAlign: "right",
						markers: {
							fillColors: ["#3B2A82", "gray"],
							style: {
								justifyContent: "end",
								fontSize: "2px !important",
								fontWeight: "100",
							},
						},
					},
				},
			};
		},
	};
</script>
