var names : string[] = ['Jordan', 'Muhammad', 'Gordan'];
var counter : number = 0;

(function() {
	for (let name in names){
counter++;
	}
})();

console.log(counter);