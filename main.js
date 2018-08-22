var passed = 0;
var failed = 0;
var $pCount = $('#p_count')
var $fCount = $('#f_count')
var $passedList = $('#passed_test')
var $failedList = $('#failed_test')
var $btn = $('#run')

function makeLi(text){
	return '<li>' + text + '</li>'
}
function addPass(name){
	$pCount.text(++passed)
	$passedList.append(makeLi(name))
}
function addFail(){
	$fCount.text(++failed)
	$failedList.append(makeLi(name+' - '+err))
}
function runTest(name,actual,expected){
	try{
		console.log(name)
		expect(actual).toEqual(expected)
		addPass(name)
	}catch(err){
		addFail(name,err.message)
	}
}

function run(){
	runTest('sum',sum(2,3),5)
	var arr = [1,2,3]
	var total = arr.reduce(sumArray,0)
	runTest('sumArray',total,6)
	runTest('avgArray',avgArray(arr),2)
}

function sum(x,y){
	return x+y
}

function sumArray(total, num){
	return total + num

}
function avgArray(arr){
	return arr.reduce(sumArray, 0)/arr.length
}

$btn.on('click', function(){
	passed = 0
	failed = 0
	$pCount.text(passed)
	$fCount.text(failed)
	$failedList.empty()
	$passedList.empty()
	run()
})