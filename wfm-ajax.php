<?php
/*
Plugin Name: AJAX FOR WOOCOMMERCE
Description: THE BEST PLUGIN FOR OREDER AJAX
Plugin URI: https://vk.com/edgar_no1
Author: EDGAR
Author URI: https://vk.com/edgar_no1
*/



add_action( 'admin_enqueue_scripts', 'gp_front_page_script' );    
function gp_front_page_script() {
  $current_screen = get_current_screen();
  if( $current_screen->post_type === 'shop_order' && $current_screen->base !== 'post' ) {
	wp_enqueue_script( 'my_custom_script', plugins_url( 'wfm-scripts.js', __FILE__ ), '1.0' );
  }
}




$url_gif = plugins_url( "loader.gif", __FILE__ );

add_action( 'woocommerce_admin_order_preview_end', 'action_function_name_2736' );
function action_function_name_2736(){
	global $url_gif;
	echo '<p style="text-align:center;padding:0 15px"><span id="loader" style="display: none;"><img src="'.$url_gif.'" alt=""></span><span id="res" style="font-weight: 700;color: green; padding: 20px;"></span></p>';
}
