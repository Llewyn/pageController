<?php

include('connection.php'); 

function connectDB() {
	global $databaseInfo;
	$mysql_link = mysqli_connect($databaseInfo['address'], $databaseInfo['user'], $databaseInfo['password'], $databaseInfo['database']) or die('Could not connect: ' . mysql_error());
	mysqli_set_charset($mysql_link, 'utf8');
	return $mysql_link;
}

function _INPUT( $key, $type, $link, $default="" ) {
	if ( $_SERVER[ 'REQUEST_METHOD' ] == 'GET' ) {
		return sanitize( isset( $_GET[ $key ] ) ? $_GET[ $key ] : $default, $type, $link );
	}
	elseif ( $_SERVER[ 'REQUEST_METHOD' ] == 'POST' ) {
		return sanitize( isset( $_POST[ $key ] ) ? $_POST[ $key ] : $default, $type, $link );
	}
}

function sanitize( $value, $type, $link ) {
	$result = mysqli_real_escape_string( $link, strip_tags( $value ) );
	if ( $type == "int" ) {
		return ( int ) $result;
	}
	elseif ( $type == "bool" ) {
		return ( bool ) $result;
	}
	elseif ( $type == "str" ) {
		return htmlspecialchars( trim( $result ), ENT_NOQUOTES);
	}
}

function generateRandomString($length = 8) {
    $characters = '123456789abcdefghjkmnpqrstuvwxyzABCDEFGHIJKMNPQRSTUVWXYZ';
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $randomString;
}

?>