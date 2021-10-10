function addData(chart, newLabel, newValue) {
	chart.data.labels.push(newLabel);
	chart.data.datasets.forEach((dataset) => {
		dataset.data.push(newValue);
	});
	chart.update();
}

function removeData(chart) {
	chart.data.labels.pop();
	chart.data.datasets.forEach((dataset) => {
		dataset.data.pop();
	});
	chart.update();
}

function updateValue(chart, label, newValue) {
	const indexNum = chart.data.labels.indexOf(label);

	chart.config.data.datasets[0].data[indexNum] = newValue;
	chart.update();
}

export { addData, removeData, updateValue };
