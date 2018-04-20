	
var map; var districtNum; var schoolAr; 
	function initMap(){
		map = new google.maps.Map(document.getElementById('map'),{
			center: {lat: 40.730610, lng: -73.935242},
			zoom: 11		
		});
		map.data.loadGeoJson("https://data.cityofnewyork.us/api/geospatial/r8nu-ymqj?method=export&format=GeoJSON",{idPropertyName: 'school_dist'}); 
		map.data.setStyle({
			fillColor: 'green'
		})
		map.data.addListener('click', function(event) {			
			map.data.overrideStyle(event.feature, {fillColor: 'red'});
   			event.feature.fillColor = 'red';
   			 display(event.feature.f)
   			 
   			//call a function called display
   			//pass the event.feature.f
		});
		map.data.addListener('dblclick', function(event) {
			//debugger; 
			//console.log(event);
			if(event.feature.fillColor = 'red'){
				map.data.overrideStyle(event.feature, {fillColor: 'green'});
   				clear(); 
			}
		});

	}

if(districtNum != 0){
//Google Map Javascript API
//AIzaSyBhTM-i9acM2-ZsQFpwlwjzZ1Wi2kHal-c
var schoolDistrict = new Array();  
var schoolArea = new Array(); 

var search = function(){
	var input =$(".search").val(); 
	//debugger; 
	$.ajax({
		url:  'https://data.cityofnewyork.us/resource/cuae-wd7h.json',
		method:'GET'
		/*data: {
			"$limit": 5000,
			"$$app_token": "Hrya0hbIp8CLYY4A5cIvVD0ut";
		}*/
	}).done(function(data){
		//debugger;
		//alert("Retrieved records from the dataset");
		//console.log(data); 
		for(var i = 0; i < data.length; i++){
			schoolDistrict[i] = data[i].school_dist;
			schoolArea[i] = data[i].shape_area; 
		}


	}); 
}

var display = function(info){
	//debugger;
	var wrap = $(".wrapper"); 
	wrap.empty(); 
	wrap.append("School District = " + info.school_dist); 
	wrap.append("      School Area = " + info.shape_area); 
}
var clear = function(){
	//debugger;
	var wrap = $(".wrapper"); 
	wrap.empty();  
}

//debugger; 
search(); 


}

//function display
/*function display(info) {
	
   			debugger;
   			//var information = 
   			//var text = $("<p>"School District = " + districtNum + "   SchoolArea = "+	schoolAr"</p>); 

   			
}*/
//target the wrapper
//clear it
//append html to the wrapper, with district number, area and etc.


//$(document).ready(function(){
//	$(".go").click(search); 
//}); 


