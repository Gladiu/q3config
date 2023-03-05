function loadJSON(callback) {   

  var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
  xobj.open('GET', 'data.json', false); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
          // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
          callback(xobj.responseText);
        }
  };
  xobj.send(null);  
}

var tableData = null;
  loadJSON(function(response) {
   // Parse JSON string into object
     var data = JSON.parse(response);
     tableData = data.map(value => {
      return (
        `<tr>
           <td>${value.Country}</td>
           <td>${value.Name}</td>
           <td>${value.Config}</td>
           <td>${value.Hud}</td>
           <td>${value.ImagePreview}</td>
           <td>${value.LastUpdate}</td>
        </tr>`
      );
    }).join('');
  });


const tableBody = document.querySelector("#tableBody");
tableBody.innerHTML = tableData;