<?php
$dir="components/*";
//正则
/* 
$c="
	/index.php?m=article 
	<div>/index.php?m=notice&a=show&id=1</div>
	?m=article
	/index.php?m=comment&a=my
";
$c=preg_replace("/module\.php\?m=([_\w]+)&a=([_\w]+)[&]/iUs","\\1/\\2?",$c);
$c=preg_replace("/module\.php\?m=([_\w]+)[&]/iUs","\\1/index?",$c);
//index
$c=preg_replace("/index\.php\?m=([_\w]+)&a=([_\w]+)[&]?/is","\\1/\\2?",$c);
$c=preg_replace("/index\.php\?m=([_\w]+)/is","\\1/index?",$c); 
//kong
$c=preg_replace("/\?m=([_\w]+)&a=([_\w]+)[&]?/is","/\\1/\\2?",$c);
$c=preg_replace("/\?m=([_\w]+)/is","/\\1/index?",$c); 
echo $c;
exit;
*/ 
$res=glob($dir);

foreach($res as $rs){
	$files=glob($rs."/*");
	foreach($files as $file){
		$c=file_get_contents($file);
		$c=str_replace("fromapp=wxapp&","",$c);
		$c=str_replace("ajax=1&","",$c);
		
		//module
		$c=preg_replace("/module\.php\?m=([_\w]+)&a=([_\w]+)[&]/is","\\1/\\2?",$c);
		$c=preg_replace("/module\.php\?m=([_\w]+)[&]/is","\\1/index?",$c);
		//index
		$c=preg_replace("/index\.php\?m=([_\w]+)&a=([_\w]+)[&]?/is","\\1/\\2?",$c);
		$c=preg_replace("/index\.php\?m=([_\w]+)/is","\\1/index",$c); 
		//空
		$c=preg_replace("/\?m=([_\w]+)&a=([_\w]+)[&]?/is","/\\1/\\2?",$c);
		$c=preg_replace("/\?m=([_\w]+)/is","/\\1/index?",$c); 
		file_put_contents($file,$c);
		 
	}
}
echo "success";
?>