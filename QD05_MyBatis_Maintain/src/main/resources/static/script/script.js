$(function(){
	
	// 입력 페이지 이동
	$("#insFormBtn").click(function(){
		location.href="/applyForm";
	});
	
	
	// 목록 페이지 이동
	$("#goListBtn").click(()=>{
		location.href="/list";
	});
});