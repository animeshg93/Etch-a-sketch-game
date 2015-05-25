
$('document').ready(function(){			
	initialGrid(sizeOfGrid);
});

var initialGrid = function (size) {
	var count=0;
	var col=0;
	if(size > 64) alert("Invalid input");
	else{
		for(count = 0; count < size; count++){
			for(col = 0; col < size; col++)
				$(".container").append('<div class="squares"></div>');
			
		}
		$(".squares").css("height", Math.round(900/size)-2);
		$(".squares").css("width", Math.round(900/size)-2);
	}
};	

var clearGrid = function(){
	$(".squares").remove();
}

var singleClick = function(){
	$(".squares").remove();
	var gridSize = prompt("Please enter a number between 1 and 64");
	initialGrid(gridSize);
		singleEffect();
};

var fadedClick = function(){
	$(".squares").remove();
	var gridSize = prompt("Please enter a number between 1 and 64");
	initialGrid(gridSize);
	fadedEffect();
};

var rgbClick = function(){
	$(".squares").unbind();
	var gridSize = prompt("Please enter a number between 1 and 64");
	initialGrid(gridSize);
	$(".squares").mouseenter(function(){
		$(this).css("background-color", rgbEffect());
	});
};

var singleEffect = function(){
	$(".squares").mouseenter(function(){
		$(this).css("background-color", 'red');
	});
};

var fadedEffect = function(){
	$(".squares").mouseenter(function(){
		$(this).fadeOut(200);
	});
	$(".squares").mouseleave(function(){
		$(this).fadeIn(200);
	});
};

var rgbEffect = function(){
	var colors = ["#F0F8FF", "#00FFFF", "#A52A2A", "#5F9EA0", "#7FFF00", "#FF7F50", "#DC143C", "#00008B", "#008B8B", "#A9A9A9", "#006400", "#8B008B", "#556B2F", "#FF8C00", "#9932CC", "#8B0000", "#E9967A", "#8FBC8F", "#483D8B", "#2F4F4F", "#00CED1", "#9400D3"];
	var rand = colors[Math.floor(Math.random()*colors.length)];
	return rand;
};

