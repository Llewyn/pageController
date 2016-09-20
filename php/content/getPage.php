<?php
	// To avoid that page gets cached and user needs to refresh
	header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
	header("Cache-Control: post-check=0, pre-check=0", false);
	header("Pragma: no-cache");

	include("functions.php");
	$link = connectDB();

	$pageTitle = _INPUT('pageTitle', 'str', $link);

	$sql = "SELECT * FROM pages WHERE title_nl = '" . $pageTitle . "'";
	$exe = mysqli_query($link, $sql);
	$pageData = mysqli_fetch_array($exe, MYSQLI_ASSOC);
	echo(json_encode($pageData));

	mysqli_close($link);
?>