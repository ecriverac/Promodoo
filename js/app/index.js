var indexC={
	init:function(){		
		indexC.eventos();
	},
	eventos:function(){
		
	},
	online:function(){
		console.log("online");
		$($("#ifrmDoo")).attr("src","http://promodoo.com");
		$($("#ifrmDoo")).show();
	},
	offline:function(){
		
	}
}