
var x = setTimeout(()=> {
	$("#loader-pre").fadeOut();
	$("#wbody").fadeIn(1500);
},5000);

function isLogged(k) {
		if(localStorage.getItem("usermail")) {
			var database = firebase.database();
			var refstr = (localStorage.getItem("usermail")).substring(0,(localStorage.getItem("usermail")).search(".com"));
			//refstr = "san@gmail";
			var ref = database.ref(refstr+"/"+k);
			ref.on('value', (data)=> {
			var scores = data.val();
			//console.log(Object.keys(scores).length);
			if(!scores || (Object.keys(scores).length)<1 || refstr == "ecet@gmail") {
				//console.log("a");
				if(k == "mt1") 
					window.open("mocktest.html?name=mt1&year=2019&key=3918A6454335A69EA25BD2B9EF5DD8B2","_blank");
				else if(k == "mt2")
					window.open("mocktest.html?name=mt2&year=2018&key=3918A6454335A69EA25BD2B9EF5DD8B2","_blank");
				else if(k == "mt3")
					window.open("mocktest.html?name=mt3&year=2017&key=3918A6454335A69EA25BD2B9EF5DD8B2","_blank");	
				else if(k == "mt4")
					window.open("mocktest2.html?name=mt4&year=2019&key=86F7A8E49FEC936938F6957EC1145E20","_blank");	
				else if(k == "mt5")
					window.open("mocktest2.html?name=mt5&year=2018&key=86F7A8E49FEC936938F6957EC1145E20","_blank");	
				else if(k == "mt6")
					window.open("mocktest2.html?name=mt6&year=2017&key=86F7A8E49FEC936938F6957EC1145E20","_blank");	
				
			}
			else
				alert("You have exceeded maximum attempts");
				
			},
			(err)=> {
				console.log(err);
			});
		}
		else {
			$(".discuss1").click();
			
		}
}