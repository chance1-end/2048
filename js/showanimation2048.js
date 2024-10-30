function showNumberWithAnimation(i,j,randNumber) {
	var numberCell = $('#number-cell-'+i+"-"+j);
	
	numberCell.css('background-color',getNumberBackgroundColor(randNumber));
	numberCell.css('color',getNumberColor(randNumber));
	//numberCell.text(randNumber);
	// 清空单元格内容
	//numberCell.empty();

	// 使用背景图片，并缩放
	numberCell.css({
		'background-image': 'url(img/' + randNumber + '.png)', // 根据 randNumber 动态选择图片
		'background-size': 'cover', // 确保图片覆盖单元格
		'background-position': 'center' // 图片居中
	});
	
	numberCell.animate({
		width:cellSideLength,
		height:cellSideLength,
		top:getPosTop(i,j),
		left:getPosLeft(i,j)
	},50);
}

function showMoveAnimation( fromx , fromy , tox , toy ) {
	var numberCell = $('#number-cell-'+fromx+'-'+fromy);
	numberCell.animate({
		top:getPosTop(tox,toy),
		left:getPosLeft(tox,toy)
	},200)
}

function updateScore( score ) {
	$('#score').text(score);
}