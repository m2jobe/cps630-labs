var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));


// GET /static/style.css etc.
app.use('/static', express.static(__dirname + '/public'));
///
/// Use pug as templating engine. Pug is renamed jade.
///
app.set('view engine', 'pug');

app.get('/', function(req, res) {

	res.render('index');

});

app.get('/stormzy', function(req, res) {

	var content = {
		'video':"http://www.youtube.com/embed/dFOErVWlsxg?autoplay=0&origin=http://example.com",
		'text':"After garnering attention on the UK underground music scene via his Wicked Skengman series of freestyles over classic grime beats,[6][13] Stormzy released his debut EP Dreamers Disease independently in July 2014.[14] On 22 October, Stormzy won Best Grime Act at the MOBO awards. Later that month he became the first unsigned rapper to appear on Later with Jools Holland performing the song from Dreamers Disease.[6]"

	}
	res.render('stormzy', {"content": content});


});

app.get('/about', function(req, res) {


	res.render('about');

});

app.listen(8080, function () {
    console.log('app listening on port', 8080);
});
