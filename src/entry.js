require("../dist/index.html");
var $ = jQuery = require("jquery");
require('jquery-ui/ui/widgets/sortable');
require('jquery.cookie');


 $(function() {
	jQuery.cookie("dd","test");
	console.log(jQuery.cookie("dd"));
 });






