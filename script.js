// Load posts from localStorage when the page loads
window.onload = function () {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    storedPosts.forEach(post => addPostToFeed(post.message, post.id));
  };
  
  // Save new post
  function postMessage() {
    const input = document.querySelector(".post-input");
    const message = input.value.trim();
    if (message === "") return;
  
    const postId = Date.now(); // Unique ID
    const newPost = { message, id: postId };
  
    addPostToFeed(message, postId);
  
    // Save to localStorage
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    existingPosts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(existingPosts));
  
    input.value = "";
  }
  
  // Add a post to the feed with delete + comment section
  function addPostToFeed(message, id) {
    const feed = document.getElementById("feed");
  
    const post = document.createElement("div");
    post.className = "feed-post";
    post.setAttribute("data-id", id);
    post.innerHTML = `
      <strong>You</strong><br>
      <small>Just now</small>
      <p>${message}</p>
      <div class="tags"><span>General</span></div>
      <div class="post-actions">
        ❤️ 0 &nbsp; 💬 0 &nbsp; 🔁 0 &nbsp; 🔖
        <button onclick="deletePost(${id})" style="margin-left: 10px; background:none; border:none; color:red; cursor:pointer;">🗑️ Delete</button>
      </div>
      <div class="comment-section">
        <input type="text" class="comment-input" placeholder="Add a comment..." onkeydown="handleComment(event, this)" />
        <div class="comments"></div>
      </div>
    `;
  
    feed.insertBefore(post, feed.firstChild); // Adds to top of feed
  }
  
  // Delete a post
  function deletePost(id) {
    const postElement = document.querySelector(`.feed-post[data-id="${id}"]`);
    if (postElement) {
      postElement.remove();
  
      let posts = JSON.parse(localStorage.getItem("posts")) || [];
      posts = posts.filter(p => p.id !== id);
      localStorage.setItem("posts", JSON.stringify(posts));
    }
  }
  
  // Handle comment input
  function handleComment(event, input) {
    if (event.key === "Enter") {
      const text = input.value.trim();
      if (text === "") return;
  
      const post = input.closest(".feed-post");
      const commentsBox = post.querySelector(".comments");
  
      const comment = document.createElement("div");
      comment.className = "comment";
      comment.textContent = `🗨️ ${text}`;
      comment.style.marginTop = "5px";
      comment.style.padding = "6px 12px";
      comment.style.background = "#f3f4f6";
      comment.style.borderRadius = "8px";
      comment.style.fontSize = "14px";
      comment.style.color = "#374151";
  
      commentsBox.appendChild(comment);
      input.value = "";
    }
  }
  