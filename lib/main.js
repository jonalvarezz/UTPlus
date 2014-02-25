var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
	include: ["http://app4.utp.edu.co/pe/", "http://app4.utp.edu.co/pe/index.php"],
	contentScriptFile : data.url("content.js")
});