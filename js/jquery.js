
var colours = ["#008B8B", "#000099", "#B8860B", "#A9A9A9", "#006400", "#BDB76B", "#8B008B", "#556B2F", "#FF8C00", "#9932CC", "#8B0000", "#E9967A", "#8FBC8F", "#9400D3", "#FF1493", "#00BFFF", "#1E90FF", "#B22222", "#228B22",], 
    idx;

$(function() {
    var div = $('#arch'); 
    var chars = div.text().split('');
    div.html('');     
    for(var i=0; i<chars.length; i++) {
        idx = Math.floor(Math.random() * colours.length);
        var span = $('<span>' + chars[i] + '</span>').css("color", colours[idx]);
        div.append(span);
    }
	
	$("messageMe").focus(){
		
	}
});

$
