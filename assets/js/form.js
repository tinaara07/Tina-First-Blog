function handleFormSubmit(event) {
    event.preventDefault();
const username = document.getElementById("username");
const title = document.getElementById("title");
const content = document.getElementById("content");
const submit = document.getElementById("submit");


    // Create a new blog post object
    const newPost = {
        username: username.value,
        title: title.value,
        content: content.value,
        submit: submit.value,
    };
console.log(newPost)
//  getting the blog post from local storage

let blogPosts = localStorage.getItem("blogPosts")   
// checking if there were blog posts in localStorage
if (blogPosts) {
    // if there were blog post parse it to an array 
blogPosts = JSON.parse(blogPosts)    
} else {
    // if there is no blog post show empty
blogPosts = []
}

blogPosts.push(newPost);   
 localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
 window.location.href="./blog.html"
}

// Event listener for form submission
const form = document.getElementById("blog-form");
form.addEventListener("submit", handleFormSubmit);