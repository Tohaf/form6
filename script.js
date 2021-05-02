var selectedRow = null

var head = document.getElementById("d");
var space = document.getElementById("space");
space.innerHTML = "NO ENTRIES";


function onFormSubmit(){
	var head = document.getElementById("d");
	var space = document.getElementById("space");
	var displayHead = head.style.display;

	if(displayHead == "none"){
		head.style.display = "table-row";
		
	}else{
		head.style.display = "table-row";		
	}  
	space.innerHTML = " ";
	var formData = readFormData();
	if (selectedRow == null)
	    insertNewRecord(formData);
	    else
	    	updateRecord(formData);	    	 
	 
    resetForm();
    
}


function readFormData(){
	var formData = {};
	formData["firstName"] = document.getElementById("firstName").value;
	formData["lastName"] = document.getElementById("lastName").value;
	formData["email"] = document.getElementById("email").value;
	formData["gender"] = document.getElementById("gender").value;
	formData["cb"] = document.getElementById("cb");
	return formData;
}

function insertNewRecord(data){
	var table = document.getElementById("head").getElementsByTagName("tbody")[0];
	var cb = document.getElementById("cb");
	var newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.firstName;
	cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.lastName;
	cell3 = newRow.insertCell(2);
	cell3.innerHTML = data.email;
	cell4 = newRow.insertCell(3);
	cell4.innerHTML = data.gender;
	cell5 = newRow.insertCell(4);
	cell5 = checker();
    cell6 = newRow.insertCell(5);
	cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;

    function checker(){
		if(cb.checked){
			cell5.innerHTML = ("yes");
		}	
		else{
			cell5.innerHTML = ("NO");
		}
		return checker;
		
	}
	var checkin = checker();
                   
}

function resetForm(){
	document.getElementById("firstName").value = "";
	document.getElementById("lastName").value = "";
	document.getElementById("email").value = "";
	document.getElementById("gender").value = "";
	document.getElementById("cb").value = "unchecked";
	selectedRow = null;
	
}


function onEdit(td){
	selectedRow = td.parentElement.parentElement;
    document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
   	document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
	document.getElementById("email").value = selectedRow.cells[2].innerHTML;
	document.getElementById("gender").value = selectedRow.cells[3].innerHTML;
	document.getElementById("cb").value = checker();
	
	function checker(){
		if(cb.checked){
			selectedRow.cells[4].innerHTML= "yes"
		}
		else{
			selectedRow.cells[4].innerHTML= "NO"
		}
	}
	

}

function updateRecord(formData){
	selectedRow.cells[0].innerHTML = formData.firstName;
	selectedRow.cells[1].innerHTML = formData.lastName;
	selectedRow.cells[2].innerHTML = formData.email;
	selectedRow.cells[3].innerHTML = formData.gender;
	selectedRow.cells[4] = checker();
    function checker(){
	    if(cb.checked){
		    selectedRow.cells[4].innerHTML = "yes";
	    }
	    else{
		    selectedRow.cells[4].innerHTML = "NO";
	    }
}

	
} 
function onDelete(td){
	row = td.parentElement.parentElement;
	document.getElementById("head").deleteRow(row.rowIndex);
	resetForm();
}

