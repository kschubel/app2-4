(function() {
	"use strict";
	var main = function() {   
    };
	
	$(document).ready(main);
}());


function searchCoke(searchValue) {

        $('cokeData').empty();
		var url = 'http://api.cokecce.com/v1/product/search?query=' + searchValue + '&maxRows=100&language=EN&format=json&apiKey=usw3qddmprrcyu8szpknanet&callback=?';
		
         $.getJSON(url, function(cokeCola) {
			var $cokeTable = $('<table>');
			var response = cokeCola.productDetails.products;
            var nameArray = [];
            var $item = $('<tr>');
            var $itemVal = $('<td>').text(response.length+ ' ' +"products");
				$item.append($itemVal);
				$cokeTable.append($item);
		
            $('cokeData').children();
			$('cokeData').removeClass("myTable");
          
            $('cokeData').append('<div class="myTable">');
            $('cokeData').append($cokeTable);
            $('cokeData').append('</div>');
                
		});
	};
