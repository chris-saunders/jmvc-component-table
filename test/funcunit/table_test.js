steal("funcunit", function(){
	module("table test", { 
		setup: function(){
			S.open("//table/table.html");
		}
	});
	
	test("Copy Test", function(){
		equals(S("h1").text(), "Welcome to JavaScriptMVC 3.2!","welcome text");
	});
})