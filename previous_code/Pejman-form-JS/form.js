//var templates = require('./json.js');
//var $ = require('jquery');
//require('style-loader!css-loader!./form.css');


// Fetching HTML Elements in Variables by ID.
var $createform = $(document.createElement('form')); // Create New Element Form
$createform.attr('action', ''); // Setting Action Attribute on Form
$createform.attr('method', 'post'); // Setting Method Attribute on Form
$('#form').append($createform);

// Create drop down list description
var $x = $(document.createElement('text'));
$x.html('Select post type:');
$('#form').append($x);

// Create drop down list
var $selectType = $(document.createElement('select'));
$selectType.attr('id','selectType');
$('#form').append($selectType);

// Fills options with all JSON types
for (id in templates.types) {
	var opt = document.createElement('option');
	opt.value = templates.types[id].label;
	opt.innerHTML = templates.types[id].label;    
	selectType.append(opt);
}

$('#btn_generate').on('click', generate_code);
$('#btn_reset').on('click', build_form);
$("#btn_copy").click(function(){
	    $("#output").select();
	    document.execCommand('copy');
});
$('#selectType').on('change', build_form);

// Initial build for default selection
build_form();

function build_form() {
	// Clear all previous form elements
	$('#form_content').html('');
	$('#output').val('');

	var elements = templates.types[$('#selectType')[0].selectedIndex].content.elements;

	for (ele in elements){
		var $div = $(document.createElement('div'));
		$div.attr('class', 'div_form');

		// Create description of input box
		var $x = $(document.createElement('div'));
		$x.html(elements[ele].description);
		$div.append($x);

		// Create input box itself
		var $i = $(document.createElement(elements[ele].type));
		$i.attr('placeholder', elements[ele].placeholder);
		$i.attr('class', 'form_input');
		if (elements[ele].value) {
			// For textareas
			$i.text(elements[ele].value); 
			// For input
			$i.val(elements[ele].value);
		}

		$div.append($i);

		$('#form_content').append($div);

		var $linebreak = $(document.createElement('br'));
		$('#form_content').append($linebreak);
	}
}

// Constructs raw reddit code
function generate_code() {
	var html = '',
		elements = templates.types[$('#selectType')[0].selectedIndex].content.elements,
		inputs = $('#form_content :input');

	html = templates.types[$('#selectType')[0].selectedIndex].content.header;
	html += '\n\n';
	html += '---';

	for (ele in elements) {
		if (elements[ele].prefix) html += elements[ele].prefix;
		html += inputs[ele].value;
		if (elements[ele].suffix) html += elements[ele].suffix;
	}

	html += '\n\n---\n\n';
	html += templates.footer;

	$('#output').val(html);
}
