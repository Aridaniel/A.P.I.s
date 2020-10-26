console.log('sadfas')


//Get elements 
const inputtopic = document.getElementById('topicbox')
const inputvalue = document.getElementById('valuebox')
const button = document.getElementById('submitBtn')
const output = document.getElementById('outputlist')
const clearbutton = document.getElementById('clearBtn')



// On submit BTn click function gets value from inputboxes and display in output list
 submitBtn.onclick = function(){

    const topic = inputtopic.value;
    const value = inputvalue.value;


// Needs to fill both input boxes then set in local storage
    if (topic && value){
        localStorage.setItem(topic, value)
        location.reload();
    }

 }

// 
 for (let i = 0; i < localStorage.length; i ++)
 {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key)

    output.innerHTML += ` ${key}=  ${value} <br/>`

}


//On clear btn , its deletes all the local.storage aswell as the list in the browser
 clearbutton.onclick = function(){
    
    localStorage.clear();



    var deletelist = document.getElementById('outputlist')
    deletelist.remove();

} 


