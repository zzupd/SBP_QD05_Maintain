$(function(){
	
	// 입력 페이지 이동
	$("#insFormBtn").click(function(){
		location.href="/applyForm";
	});
	
	
	// 목록 페이지 이동
	$("#goListBtn").click(()=>{
		location.href="/list";
	});
	
	// 상세 내용 보기(=뷰 페이지 이동, MVC 의 view가 아님) 
	$("div.dataRow").click(function(){
		let numParam = $(this).children("span").eq(0).text();
		// alert("numParam : " + numParam);
		location.href="/view?numParam="+ numParam;		
	});

});


