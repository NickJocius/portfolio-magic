const express = require('express');
const axios = require('axios');
const { response } = require('express');
const router = express.Router();

router.get('/:state', (req, res) => {
	// get choice from selection list
	let choice = req.query.state;

	if(choice !== ""){
		// set data url to variables
		let dataInfo = `https://covidtracking.com/api/v1/states/${choice}/info.json`;
		let dataCurrent = `https://covidtracking.com/api/v1/states/${choice}/current.json`;

		// use axios to request from both urls and render the page, passing data and dateParser function
		axios.all([
			axios.get(dataInfo), axios.get(dataCurrent)
		])
		.then(axios.spread((resInfo, resCurrent) => res.render('results', {dataInfo: resInfo.data, dataCurrent: resCurrent.data})))
		// handle errors
		.catch((error) => {
			if(error.response){
				// server responded with status other than 200 range
				console.error(error.response.data);
				console.error(error.response.status);
				console.error(error.response.headers);
				return res.status(500).send("Server Error");
			} else if (error.request) {
				// request was made but no response
				console.error(error.request);
			} else {
				console.error(error.message);
			}
		});
	} else  {
		res.send("Form not submitted properly");;
	}
	

});


module.exports = router;
