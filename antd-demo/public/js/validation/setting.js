(function($) {
	'use strict'; 
    $("#mycontactform").validate({
		 submitHandler: function() {
            $("#submit").addClass("active");
            $(".status-progress").html("<i class='fa-li fa fa-spinner fa-spin'></i>");
			$.post("contact/email.php", $("#mycontactform").serialize(),  function(response) {
				$('#success').html(response);
                $("#submit").removeClass("active");
                $(".status-progress").html("");
			});
			return false;
		}							 
	});
    $("#validateform").validate({
		 submitHandler: function() {
            $("#submit").addClass("active");
            $(".status-progress").html("<i class='fa-li fa fa-spinner fa-spin'></i>");
			return false;
		}							 
	});
})(jQuery);