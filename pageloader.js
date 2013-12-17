var args = require('system').args;
var address = '';
args.forEach(function(arg, i) {
    if(i == 1)
    {
       address = arg;
    }
});

var page = require('webpage').create();
page.open(address, function(result) {
	console.log(page.content);
	phantom.exit();
});
