var sizeOfGrid = prompt("Please enter a number between 1 and 16");
		var count=0;
		var col=0;
		$('document').ready(function(){			
			var table = document.getElementById('table')
			for(count = 1; count <= sizeOfGrid; count++){
				var row = table.insertRow(0);
				for(col = 0; col < sizeOfGrid; col++){
					var cell = row.insertCell(0);
					cell.innerHTML = '<div id=block' +col+' class="grids"></div>';
					$('#block'+col).height(Math.round(960/sizeOfGrid) - 2);
					$('#block'+col).width(Math.round(960/sizeOfGrid) - 2);
				}
			}
		})	