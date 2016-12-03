/*  @Author : Suyash Nanda
    @Date : 26 aug 2016
	@Purpose: Program of display random articles one by one on the screen with a digital clock*/

function displayTime() 
{
	var d = new Date();
	//get the current date
    var date = d.getDate();
	//get the current month
    var month = d.getMonth();
	//get the current year
    var year = d.getFullYear();
	//get the current time hours
    var hours = d.getHours();
	//get the current time minutes
    var minutes = d.getMinutes();
	//get the current time seconds
    var seconds = d.getSeconds();
    var mer = "AM";
	h=checkTime(hours);
	m=checkTime(minutes);
	s=checkTime(seconds);  
    // If hours is greater than 12
    if (h > 12)
    {
    	h = h - 12; //set the meridian
        mer = "PM"; 
    }
    if (h === 0)
	{
        h = 12;    
    }
    //printing date and time
    var clock = document.getElementById("date");
    clock.innerHTML = date+ "-"+(month+1)+ "-"+year + "<br/>"  + h + ":" + m + ":" + s + " " + mer + "<br/>";
}
function checkTime(i) 
{
	if (i < 10)
	{
		i = "0" + i;
	}  // add zero in front of numbers < 10
    	return i;
}

//calling the function displayTime
displayTime();
setInterval(displayTime, 1000);

//function for json objects
function jsonData()
{
var article = [
	{
		"author" : "Elisabeth Freeman and Eric Freeman",
		"bookname" : "Head First HTML with CSS and XHTML",
		"datepublished" : "December 2005",
        "publication" : "O'Reilly",	   
	},
    {
		"author" : "Micheal Morrison",
		"bookname" : "Head First JavaScript",
	    "datepublished" : "October 2008",
        "publication" : "O'Reilly",	   
	},
	{
	    "author" : "Ryan Benedetti and Ronan Cranley",
		"bookname" : "Head First JQuery",
	    "datepublished" : "Feb 2011",
	    "publication" : "O'Reilly",
	},
  	{
	    "author" : "Paul Barry",
		"bookname" : "Head First Python ",
	    "datepublished" : "September 2011",
	    "publication" : "O'Reilly",
	}
 ]
//function to print json objects
function display(i)
{ 
	var print = document.getElementById("data");
	print.innerHTML =i+1+")"+"<br>"+"Author: "+article[i].author+"<br>"+"<br>"+"Book name: "+article[i].bookname+"<br>"+"<br>"+"Published Date: "+article[i].datepublished+"<br>"+"<br>"+"Publication: "+article[i].publication+"<br/>";
    if(++i<=article.length) 
    {
		setTimeout(display,3000,i);
       if(i==4)
	   {i=0;
setTimeout(display,3000,i);}

	}
}
   setTimeout(display,3000,0);
}
jsonData();