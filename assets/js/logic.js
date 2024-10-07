let nightmode = localStorage.getItem("nightmode");
const themeSwitch = document.getElementById("theme-switch");

const enableNightmode =() => {
    console.log("running the nightmode function")
    document.body.classList.add('nightmode')
    localStorage.setItem('nightmode', 'active')
}

const disableNightmode = () => {
    console.log("day mode function")
    document.body.classList.remove('nightmode')
    localStorage.setItem('nightmode', null)
}

if(nightmode === "active") enableNightmode()

themeSwitch.addEventListener("click", () =>{
    console.log("clicked")
    nightmode=localStorage.getItem('nightmode')
    console.log(nightmode)
    if(nightmode !== "active") {
        console.log("Night mode is turned on")
        enableNightmode()
    } else { disableNightmode()
        console.log("Day mode activated")
    } 
})
// function readLocalStorage() { //creating the arrey in the local storage
//     let blogPosts = localStorage.getItem("blogPosts");
//     if (blogPosts) {
//         return JSON.parse(blogPosts)
//     }   return [];
//     }
    
    
//      //   return []; // empty arrey retun
    
    
//     function writeLocalStorage(userInput) { //writing the user inputs in the arrey 
//     let blogPosts = readLocalStorage()  //call  stored data
//     blogPosts.push(userInput)  // modify the stored data
//     localStorage.setItem('blogPosts', JSON.stringify(blogPosts))
//     }


// local storage
function getData() {
 const blogPosts = localStorage.getItem("blogPosts")   
if (blogPosts) {
return JSON.parse(blogPosts)    
} else {
    return []
}
}

function pushData(userInput) {
 const blogPosts = getData()
 blogPosts.push(userInput)   
 localStorage.setItem("blogPosts", JSON.stringify(blogPosts))
}