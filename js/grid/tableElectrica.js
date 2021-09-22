columnDefs = [
	{ field: 'Art N°', width: 120 },
	{ field: 'Modelo', width: 120 },
	{ field: 'Encastre', width: 120 },
	{ field: 'Rango de Torque', width: 270 },
	// { field: 'Velocidad', width: 120 },
	{ field: 'Peso', width: 160 },
];

// specify the data
rowData = [
	{
		'Art N°': '50 084 103',
		Encastre: '3/4 ó 1"',
		Modelo: 'TESM-84',
		// Velocidad: '10 RPM',
		'Rango de Torque': '111-630 Lbs.pie / 150-850 N.m',
		'Peso': '9.8 Kg',
	},
	{
		'Art N°': '50 105 113',
		Encastre: '1"',
		Modelo: 'TESM-105',
		// Velocidad: '5 RPM',
		'Rango de Torque': '206-885 Lbs.pie / 280-1200 N.m',
		'Peso': '10 Kg',
	},
	{
		'Art N°': '50 335 133',
		Encastre: '1-1/2"',
		Modelo: 'TESM-355',
		// Velocidad: '3 RPM',
		'Rango de Torque': '265-2585 Lbs.pie / 360-3500 N.m',
		'Peso': '14.5 Kg',
	},
	{
		'Art N°': '50 505 143',
		Encastre: '1-1/2"',
		Modelo: 'TESM-505',
		// Velocidad: '1.2 RPM',
		'Rango de Torque': '516-3690 Lbs.pie / 700-5000 N.m',
		'Peso': '16.7 Kg',
	},	

	{
		'Art N°': '50 084 300',
		Encastre: '3/4 ó 1"',
		Modelo: 'TESL-84',
		// Velocidad: '1.2 RPM',
		'Rango de Torque': '110-630 Lbs.pie / 150-850 N.m',
		'Peso': '8.2 Kg',
	},	
	{
		'Art N°': '50 104 310',
		Encastre: '1"',
		Modelo: 'TESL-104',
		// Velocidad: '1.2 RPM',
		'Rango de Torque': '206-885 Lbs.pie / 280-1200 N.m',
		'Peso': '8.2 Kg',
	},	
	{
		'Art N°': '50 244 320',
		Encastre: '1"',
		Modelo: 'TESL-244',
		// Velocidad: '1.2 RPM',
		'Rango de Torque': '265-1850 Lbs.pie / 360-2500 N.m',
		'Peso': '9.5 Kg',
	},	
	{
		'Art N°': '50 354 330',
		Encastre: '1-1/2"',
		Modelo: 'TESL-354',
		// Velocidad: '1.2 RPM',
		'Rango de Torque': '265-2590 Lbs.pie / 360-3500 N.m',
		'Peso': '10.4 Kg',
	},
	{
		'Art N°': '50 504 340',
		Encastre: '1-1/2"',
		Modelo: 'TESL-504',
		// Velocidad: '1.2 RPM',
		'Rango de Torque': '516-3690 Lbs.pie / 700-5000 N.m',
		'Peso': '12.6 Kg',
	},	
	{
		'Art N°': '50 604 350',
		Encastre: '1-1/2"',
		Modelo: 'TESL-604',
		// Velocidad: '1.2 RPM',
		'Rango de Torque': '601-4425 Lbs.pie / 816-6000 N.m',
		'Peso': '15.9 Kg',
	},	
	{
		'Art N°': '50 904 360',
		Encastre: '1-1/2"',
		Modelo: 'TESL-904',
		// Velocidad: '1.2 RPM',
		'Rango de Torque': '755-7380 Lbs.pie / 1024-10000 N.m',
		'Peso': '18.9 Kg',
	},	
];

// let the grid know which columns and what data to use
const gridOptions = {
	columnDefs: columnDefs,
	rowData: rowData,
};

// lookup the container we want the Grid to use
const eGridDiv = document.querySelector('#myGrid');

// create the grid passing in the div to use together with the columns & data we want to use
new agGrid.Grid(eGridDiv, gridOptions);
