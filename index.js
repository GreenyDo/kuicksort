window.onload = function() {
	var cantainer = document.getElementById("sort-rectange").querySelector("ul");
	var input = document.getElementById("amount");
	var create = document.getElementById("create");
	var start = document.getElementById("start");
	var resert = document.getElementById("resert");
	var listArray = [];
	var count = 0;

	// 快速排序
	var quickSort=function(arr) {　　
		if (arr.length <= 1) {
			return arr;
		}　　
		var pivotIndex = Math.floor(arr.length / 2);　　
		var pivot = arr.splice(pivotIndex, 1)[0];　　
		var left = [];　　
		var right = [];　　
		for (var i = 0; i < arr.length; i++) {　　　　
			if (arr[i] < pivot) {　　　　　　
				left.push(arr[i]);　　　　
			} else {　　　　　　
				right.push(arr[i]);　　　　
			}　　
		}
		return quickSort(left).concat([pivot], quickSort(right));
	}
	// 渲染函数
	function render(node, count) {
		var liWidth = Math.floor((590 - count) / count);
		var a = node.getElementsByTagName("li");
		for (var j = 0; j < count; j++) {
			a[j].style.width = liWidth + "px";
			a[j].style.height = listArray[j] + "px";
		}
	}

	// 创建函数
	create.onclick = function() {
		count = parseInt(input.value);
		listArray = [];
		for (var i = 0; i < count; i++) {
			listArray.push(Math.floor(Math.random() * 360));
		}
		var innerHtml = "";
		for (var i = 0; i < count; i++) {
			innerHtml += "<li></li>"
		}
		cantainer.innerHTML = innerHtml;
		render(cantainer, count);
	}

	// 开始函数
	start.onclick = function() {
		if (listArray == null) {
			alert("请输入一个数字");
			return;
		}
		else{
			listArray = quickSort(listArray);
			render(cantainer,count);
		}

	}

	// 重置函数
	resert.onclick = function() {

	}
	

}