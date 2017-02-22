function getTriangleArea(a, h) {
	var a;
	var h;
	if (a && h > 0) {
		return(a*h/2);
	}
}

console.log(getTriangleArea(10, 6));

var triangle2Area = getTriangleArea(10, 20);
var triangle3Area = getTriangleArea(1, 4);
var triangle4Area = getTriangleArea(3, 99);

console.log('Zmienna triangle2area przechowuje wartość: ' + triangle2Area);
console.log('Zmienna triangle3area przechowuje wartość: ' + triangle3Area);
console.log('Zmienna triangle4area przechowuje wartość: ' + triangle4Area);