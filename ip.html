<!DOCTYPE html>
<html><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>What's my IP dude!</title>
	<body>
		<div id="tools" class="tools">
			<p>Your IP:</p>
		</div>
		<div id="ip-lookup" class="tools">
			<?php if ($_SERVER["HTTP_X_FORWARDED_FOR"] != "") {
				$IP = $_SERVER["HTTP_X_FORWARDED_FOR"];
				$proxy = $_SERVER["REMOTE_ADDR"];
				$host = @gethostbyaddr($_SERVER["HTTP_X_FORWARDED_FOR"]);
			} else {
				$IP = $_SERVER["REMOTE_ADDR"];
				$host = @gethostbyaddr($_SERVER["REMOTE_ADDR"]);
			} ?>
			<h1><?php echo $IP; ?></h1>
		</div>
		<div id="more" class="tools">
			<p><a id="more-link" title="More information" href="javascript:toggle();">More info</a></p>
		</div>
		<div id="more-info" class="tools">
			<ul>
			<?php
				echo '<li><strong>Remote Port:</strong> <span>'.$_SERVER["REMOTE_PORT"].'</span></li>';
				echo '<li><strong>Request Method:</strong> <span>'.$_SERVER["REQUEST_METHOD"].'</span></li>';
				echo '<li><strong>Server Protocol:</strong> <span>'.$_SERVER["SERVER_PROTOCOL"].'</span></li>';
				echo '<li><strong>Server Host:</strong> <span>'.$host.'</span></li>';
				echo '<li><strong>User Agent:</strong> <span>'.$_SERVER["HTTP_USER_AGENT"].'</span></li>';
				if ($proxy) echo '<li><strong>Proxy: <span>'.($proxy) ? $proxy : ''.'</span></li>';

				$time_start = microtime(true);
				usleep(100);
				$time_end = microtime(true);
				$time = $time_end - $time_start;
			?>
			</ul>
			<p><small>It took <?php echo $time; ?> seconds to share this info.</small></p>
		</div>
	</body>
</html>
