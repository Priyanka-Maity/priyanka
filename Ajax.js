console.log("Ajax ");


let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
     console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    // USE THIS FOR POST REQUEST
    xhr.open('POST', 'https://run.mocky.io/v3/1c1b9e71-7c75-44a9-858e-beb924981eb7', true);
    xhr.getResponseHeader('Content-type', 'application/json');


//     // What to do on progress (optional)
    xhr.onprogress = function(){
        console.log('On progress');
    }


    xhr.onreadystatechange = function () {
        console.log('ready state is ', xhr.readyState);
        
    }

//     // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){

            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
    }

//     // send the request
    params = `{
		"websiteId": "4f8b36d00000000000000007",
		"date": "2019-04-11T00:00:00.000Z",
		"chats": 15,
		"missedChats": 763
	}`;
    xhr.send(params);

    console.log("We are done!");

}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'https://run.mocky.io/v3/1c1b9e71-7c75-44a9-858e-beb924981eb7', true);


//     // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)

            {
                str += `<li> websiteId : ${obj[key].websiteId} </li>`;
                str +=  `<li> date : ${obj[key].date} </li>`;
                str +=  `<li> chats : ${obj[key].chats} </li>`;
                str +=  `<li> missedChats : ${obj[key].missedChats} </li>`;
                
            //   str += `<td>${obj[key].websiteId}</td>`;
            //   str +=`<td>${obj[key].date}</td>`;
            //   str += `<td>${obj[key].chats}</td>`;
             
            }
     
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
//     // send the request
    xhr.send();
//     console.log("We are done fetching employees!");
    
}

