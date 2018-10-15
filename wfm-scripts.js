jQuery(document).ready(function($){



	$('.order-preview').on( "click", function() {

		var ordstat_text = $(this).parents('.type-shop_order').find('.order-status').text();
		var ordstat = $(this).parents('.type-shop_order').find('.order-status').html();
		var ordstat_col_1 = $(this).parents('.type-shop_order').find('mark').css("background-color");
		var ordstat_col_2 = $(this).parents('.type-shop_order').find('mark').css("color");

		function startPolling()
		{
		var handle = window.setInterval(function(){

		var element = $(".wp-admin");
		if (element.css("overflow") == "hidden") {


		$(".wc-backbone-modal-content .order-status" ).html(ordstat);
		$(".wc-backbone-modal-content .order-status" ).css({"background-color": ordstat_col_1,"color": ordstat_col_2});

		if(ordstat_text == "Completed"){
			$(".processing").hide();
			$(".complete").hide();
		}
		if(ordstat_text == "Processing"){
			$(".processing").hide();
		}


				$('.wc-action-button-complete').on( "click", function() {


							$.ajax({
								type: "POST",
								data: {

									//security: wfmajax,
									//action: 'wfm_action'

								},
								url: $(this).attr('href'),
								beforeSend: function(){
									//$('#res').empty();
									$('#loader').fadeIn();
								},
								success: function(res){
									$('#loader').fadeOut(300, function(){
										$('#res').text("STATUS SHANGE TO COMPLATE");
									});
									$(".wc-action-button-complete").hide("fast");

									var suffix = $(".wc-backbone-modal-header h1").text().match(/\d+/);
									$("#post-"+suffix[0]+" .order-status").css({"background": "#c8d7e1","color": "#2e4453"});
									$("#post-"+suffix[0]+" .order-status").html("<span>Completed</span>");

									$('.modal-close').trigger('click');

								},
								error: function(){
									$('#res').text("ERROR PLS UPDATE PAGE");
								}
							});
					return false;
				});

				$('.wc-action-button-processing').on( "click", function() {


							$.ajax({
								type: "POST",
								data: {

									//security: wfmajax,
									//action: 'wfm_action'

								},
								url: $(this).attr('href'),
								beforeSend: function(){
									//$('#res').empty();
									$('#loader').fadeIn();
								},
								success: function(res){
									$('#loader').fadeOut(300, function(){
										$('#res').text("STATUS SHANGE TO PROCESSING");
									});
									$(".wc-action-button-processing").hide("fast");

									var suffix = $(".wc-backbone-modal-header h1").text().match(/\d+/);
									$("#post-"+suffix[0]+" .order-status").css({"background": "#c6e1c6","color": "#5b841b"});
									$("#post-"+suffix[0]+" .order-status").html("<span>Processing</span>");

									$('.modal-close').trigger('click');
								},
								error: function(){
									$('#res').text("ERROR PLS UPDATE PAGE");
								}
							});
					return false;
				});


		window.clearInterval(handle);
		}

		}, 100);
		}

		startPolling();



	});
});
