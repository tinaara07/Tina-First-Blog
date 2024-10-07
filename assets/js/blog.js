const blogPosts = document.getElementById("blogPosts"); 

function displayInput() {
  const input = JSON.parse(localStorage.getItem("blogPosts")) || []; // return as empty arrey  input is the data that user will input
  const blogInput = document.querySelector("main"); //blogInput is everything that is in the main HTML tag
 console.log(input)
  if (input.length > 0) {
    //counting if the length of the input is greater than 0
    blogInput.innerHTML = "";
    input.forEach((inputs) => {
      // parameter any inputs
      const blog = document.createElement("article"); // blog is an article in the HTML
      blog.classList.add("article");

      const title = document.createElement("div");
      title.classList.add("articleTitle");
      title.textContent = inputs.title;
      console.log(inputs.title)
      // whatever the user inputed as the title will be displayed on div
      blog.appendChild(title); // the title will be attached to blog

      const content = document.createElement("div");
      content.classList.add("articleContent");
      content.textContent = inputs.content;
      blog.appendChild(content);

      const username = document.createElement("div");
      username.classList.add("articleAuthor");
      username.textContent = inputs.username;
      blog.appendChild(username);

      blogInput.appendChild(blog); // attaching blog HTML to bloginput
    });
  } else {
    blogInput.innerHTML = "<p> Please complete the blog </p>";
  }
}
displayInput(); // call the function to make the logic work