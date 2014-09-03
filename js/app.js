	  $('#mktForm_335').change( function(){
        var empty = false;
        
        if ($('#FirstName').val() == ''){
                empty = true;
        };
        if ($('#LastName').val() == ''){
                empty = true;
        };
        if ($('#Email').val() == ''){
                empty = true;
        };
        if ($('#Phone').val() == ''){
                empty = true;
        };
        if ($('#Company').val() == ''){
                empty = true;
        };
        if ($("select[name='NumberOfEmployees']").val() == ''){
                empty = true;
        };
        if ($("select[name='Mailing_Country__c']").val() == ''){
                empty = true;
        };
        if ( ($("select[name='Mailing_Country__c']").val() == 'Canada') || ($("select[name='Mailing_Country__c']").val() == 'United States')){
            if ($("select[name='Mailing_State__c']").val() == '') {
                empty = true;
            };
        };
        if ($("select[name='Subject__c']").val() == ''){
                empty = true;
        };

        
        if (empty) {
            $('button[type=submit]').removeClass('button-error').addClass('button-off');
        } else {
	        $('button[type=submit]').removeClass('button-off').addClass('button-error');
	        $('#form-error').hide().slideUp();
        }
        
	  });

      $('#form-error').hide();
      $('#return-link').hide();

	  $('#mktForm_335')
  		.on('invalid', function () {
	        $('#form-error').show();
	        $('button[type=submit]').removeClass('button-error').addClass('button-off');
      		$('#return-link').show();
    		//alert('invalid!');
  		})
  		.on('valid', function () {
	        $('#form-error').hide();
      		$('#return-link').show();
    		formSubmit(document.getElementById('mktForm_335'));
    		//alert('valid!');
  		});      
  		
  	  $("#state-select").hide();

      var stateOptions = {};
      var stateList = $("#Mailing_State__c");
      
  	  $("#Mailing_State__c option").each(function() {

      var optionVal = $(this).attr("value");
      switch(optionVal) {
	      case "Province":
	      case "AB":
	      case "BC":
	      case "MB":
	      case "NB":
	      case "NF":
	      case "NT":
	      case "NS":
	      case "NU":
	      case "ON":
	      case "PE":
	      case "QC":
	      case "SK":
	      case "YT":
	      case  "NL":
	        $(this).attr("rel","Canada");
        	break;
	      case "":
    	    break;

    	  default:
    	    $(this).attr("rel","United States");
      }
      });      
      
  	  $("#Mailing_Country__c").find("option").each(
    	  function( index, option ){
	        if (option.value.length){
        		stateOptions[ option.value ] = stateList.find( "option[ rel = '" + option.value + "' ]");
      		}
   		 }
  	  );
  		
	  var updateStateList = function(countryCode){
        stateList.empty();

        if (countryCode.length && stateOptions[countryCode]){
      		stateList.append( stateOptions[countryCode] );
        	setTimeout(function () {
        		$("#Mailing_State__c option:first").attr("selected",true);
        	}, 50);
    	}
  	  }
  		
  		
  	  $("#Mailing_Country__c").change(function()  {
    	var selected = this.options[this.selectedIndex].value;
		var stateRow = $("#state-select");
		
    	switch(selected) {
      		case "United States":
			  stateList.attr("required","required");
			  stateRow.show().slideDown();
        	  updateStateList( this.value );
      		  $("#Mailing_State__c option:first").attr("value","");
			break;

      		case "Canada":
			  stateList.attr("required","required");
			  stateRow.show().slideDown();
        	  updateStateList( this.value );
      		  $("#Mailing_State__c option:first").attr("value","");
        	break;

			default:
			  stateList.removeAttr("required");
			  stateRow.hide().slideUp();
    	}
  	  });


	    var windowH = $(window).height();
	    var wrapperH = $('#holder').height();
	    var newH = windowH + 50;
	    
	    if(windowH > wrapperH) {                            
	        $('#holder').css({'height':newH+'px'});	        
	    }                                                                               

	    $(window).resize(function(){
		    var windowH = $(window).height();
		    var wrapperH = $('#holder').height();
		    var newH = windowH + 50;
	    
		    if(windowH > wrapperH) {                            
		        $('#holder').css({'height':newH+'px'});
		    }                                                                               

	    })          


