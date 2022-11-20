
var database = firebase.database();
var refstr = (localStorage.getItem("usermail")).substring(0,(localStorage.getItem("usermail")).search(".com"));
//console.log(refstr);
var ref = database.ref(refstr);
ref.on('value', (data)=> {
	var scores = data.val();
	var mkeys = Object.keys(scores);
	//console.log(Object.keys(scores[mkeys]));
	
	for(i=0; i<(Object.keys(scores)).length; i++) {
		//console.log(Object.keys(scores[mkeys[i]]));
		var skeys = Object.keys(scores[mkeys[i]]);
		
		
		//$("#mt1body").append("");
		for(j=0; j<skeys.length; j++) {
			//console.log();
			$("#"+mkeys[i]).append("<table class=\"table table-striped\"><thead><tr><th class=\"th-title\">#</th><th class=\"th-title\">Subjects</th><th class=\"th-title\">No. of Question</th><th class=\"th-title\">Marks obtained</th></tr></thead><tbody id=\""+mkeys[i]+"body"+j+"\"></body>");
			
			var d = Object.keys((scores[mkeys[i]])[skeys[j]]);
			
			for(k=0; k<d.length; k++) {
				
				//console.log(((scores[mkeys[i]])[skeys[j]])[d[k]]);
				var c = ((scores[mkeys[i]])[skeys[j]])[d[k]];
				$("#"+mkeys[i]+"body"+j).append("<tr class=\"table-info\"><td class=\"td-title\">"+(k+1)+"</td><td class=\"td-title\">"+d[k]+"</td><td class=\"td-title\">50</td><td class=\"td-title\">"+c+"</td></tr>");
			}
		}  
	}
},
(err)=> {
	console.log(err);
});