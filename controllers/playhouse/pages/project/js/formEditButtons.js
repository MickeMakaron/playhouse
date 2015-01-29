$(document).ready(function()
{
'use strict';


(function($) 
{	
	function success(data)
	{
		console.log(data);
	
		if(data.success)
			window.location.replace(data.output);
		else
			$('#form-output').html(data.output);
	}
	
	function save()
	{
		var data = $('#project-form').serialize();
		
		console.log(data);
	
		$.ajax(
		{
			type: 'post',
			url: '/ajax/playhouse/project?update',
			data: data,
			dataType: 'json',
			success: success
		}); 
	}
	
	function publish()
	{
		var data = $('#project-form').serialize();
		data += "&published=now()";
		
		$.ajax(
		{
			type: 'post',
			url: '/ajax/playhouse/project?update',
			data: data,
			dataType: 'json',
			success: success
		});
	}
	
	$('#project-form-save').click(save);
	$('#project-form-publish').click(publish);
}) (jQuery);
});

