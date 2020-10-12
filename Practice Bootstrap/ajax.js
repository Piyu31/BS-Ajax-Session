console.log("Ajax learning!");


let fetchbtn =  document.getElementById("fetchbtn");
fetchbtn.addEventListener("click", buttonClickHandler)




function buttonClickHandler() {
	console.log("You have clicked the fetchbtn");
	// instantiate an xhr object

	var xhr = new XMLHttpRequest();

	// open the object
	// use thid for get request
	//xhr.open("GET","https://jsonplaceholder.typicode.com/todos/1", true);

	// use this for post request
	xhr.open("POST","http://dummy.restapiexample.com/api/v1/create", true);
	xhr.getResponseHeader("Content-type", "application/json");//response header to send form's data in url


	//what to do on progress(optional)
	xhr.onprogress = function() {
		console.log("On Progress");
		// body...
	}

	xhr.onreadystatechange = function() {
		console.log("ready state is", xhr.readyState)


	}

	//what to do when response is ready
	xhr.onload = function() {
		 if (this.status == 200){
		console.log(this.responseText)
		 }
		 else
		 {
		 	console.error("Some error")
		 }
	}
	//send request
	para = {"name":"ruby","salary":"86475","age":"26"};
	xhr.send(para);
	console.log("We are done");

}

let  popBtn =  document.getElementById("popBtn");
 popBtn.addEventListener("click", popHandler)

function popHandler(){
	console.log("You have clicked the popHandler");
	// instantiate an xhr object

	var xhr = new XMLHttpRequest();

	// open the object
	 //use thid for get request
	xhr.open("GET","http://dummy.restapiexample.com/api/v1/employees", true);

	// use this for post request
	//xhr.open("POST","http://dummy.restapiexample.com/api/v1/create", true);
	//xhr.getResponseHeader("Content-type", "application/json");//response header to send form's data in url


	

	//what to do when response is ready
	xhr.onload = function() {
		 if (this.status == 200){

		 	let obj = JSON.parse(this.responseText);
		 	console.log(obj);
		 	let list = document.getElementById("list");
		 	str="";
		 	for (key in obj){

		 		str += '<li>${obj[key].employee_name}</li>';
		 	}
		 	list.innerHTML = str;
		 }

		 else
		 {
		 	console.error("Some error")
		 }
	}
	//send request
	xhr.send();
	console.log("We are fetching employee details!");


}

