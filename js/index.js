var app = { 
	online:false,   
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
		console.log("bindEvents");
        document.addEventListener('deviceready', this.onDeviceReady, false);
		document.addEventListener("offline", app.onOffline, false);
		document.addEventListener("online", app.onOnline, false);
    },    
    onDeviceReady: function() {
    	indexC.init();
    },
	onOnline:function(){
		console.log("online");
		app.online=true;
		indexC.online()
	},
	onOffline:function(){
		app.online=false;
		indexC.offline()
	}
};