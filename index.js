
function getFirstSelector(selector) {
  return document.querySelector(selector);
  
}

function nestedTarget(){
  return document.querySelector('#nested .target'); 

}

function increaseRankBy(n) {
  var rankedItems = document.querySelectorAll("ul.ranked-list li");
	//var rankedItems = parseInt(rankedItems);
	for (let i = 0; i < rankedItems.length; i++){
		rankedItems[i].innerHTML = ((i + n).toString());  // moved [i] from after Items
	}
	return rankedItems;
}

function deepestChild () {
	var current = document.querySelector("#grand-node"); 
	let next = current[0];
 
	if (current.child){					
	  
		for (let i=0; i < current.length; i++){
			next.push(current.child(i));
		}
		current = next.shift()
	} else {
		return current;
	}
}