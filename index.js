const fetch = require('node-fetch');

//all
const all = async () => {
	let result = await fetch('https://corona.lmao.ninja/all');
	return result.json();
};

//countries
const countries = async country => {
	let result;
	if (country === undefined) {
		result = await fetch('https://corona.lmao.ninja/countries');
	} else {
		result = await fetch(`https://corona.lmao.ninja/countries/${country}`);
		if (typeof result == 'string') {
			return result;
		}
	}
	return result.json();
};

module.exports = {
	all: all,
	countries: countries
};
