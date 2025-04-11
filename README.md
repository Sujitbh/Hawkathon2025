# Hawkathon2025
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>UniVerse Dashboard</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="sidebar">
    <h2>UniVerse</h2>
    <input type="text" placeholder="Search UniVerse..." />
    <ul>
      <li class="active"><a href="index.html">Dashboard</a></li>
      <li><a href="marketplace.html">Marketplace</a></li>
      <li><a href="studygroups.html">Study Groups</a></li>
      <li><a href="#">Events</a></li>
      <li><a href="#">Messages <strong class="alert">2</strong></a></li>
      <li><a href="#">AI Recommendations</a></li>
      <li><a href="#">Profile</a></li>
    </ul>
    <div class="user-info">
      <strong>Sujit Bhattarai</strong><br />
      University of Louisiana at Monroe, LA
    </div>
  </div>

  <div class="main">
    <div class="layout">
      <div class="content">
        <div class="post-box">
          <input type="text" class="post-input" placeholder="What's on your mind?" />
          <button class="post-button" onclick="postMessage()">Post</button>
        </div>

        <!-- Dynamic + Static Feed Area -->
        <div id="feed">
          <div class="feed-post">
            <strong>Alex Johnson</strong><br />
            <small>Stanford University • Computer Science • 2 hours ago</small>
            <p>
              Just finished my research paper on quantum computing! Anyone
              interested in discussing the implications for cryptography?
            </p>
            <div class="tags">
              <span>Research</span>
              <span>Quantum Computing</span>
              <span>Cryptography</span>
            </div>
            <div class="post-actions">
              ❤️ 24 &nbsp; 💬 8 &nbsp; 🔁 3 &nbsp; 🔖
            </div>
            <div class="comment-section">
              <input type="text" class="comment-input" placeholder="Add a comment..." onkeydown="handleComment(event, this)" />
              <div class="comments"></div>
            </div>
          </div>

          <div class="feed-post">
            <strong>Maria Gonzalez</strong><br />
            <small>Harvard University • Sociology • 1 hour ago</small>
            <p>
              Hosting a study group this weekend to prep for the final exams! Let me know if you’re interested in joining.
            </p>
            <div class="tags">
              <span>Study Group</span>
              <span>Finals</span>
              <span>Sociology</span>
            </div>
            <div class="post-actions">
              ❤️ 15 &nbsp; 💬 5 &nbsp; 🔁 1 &nbsp; 🔖
            </div>
            <div class="comment-section">
              <input type="text" class="comment-input" placeholder="Add a comment..." onkeydown="handleComment(event, this)" />
              <div class="comments"></div>
            </div>
          </div>

          <div class="feed-post">
            <strong>David Lee</strong><br />
            <small>MIT • Electrical Engineering • 3 hours ago</small>
            <p>
              Anyone else going to the campus concert tonight? Let’s meet up and enjoy some good music 🎶
            </p>
            <div class="tags">
              <span>Campus Life</span>
              <span>Events</span>
              <span>Music</span>
            </div>
            <div class="post-actions">
              ❤️ 32 &nbsp; 💬 10 &nbsp; 🔁 6 &nbsp; 🔖
            </div>
            <div class="comment-section">
              <input type="text" class="comment-input" placeholder="Add a comment..." onkeydown="handleComment(event, this)" />
              <div class="comments"></div>
            </div>
          </div>

          <div class="feed-post">
            <strong>Emma Patel</strong><br />
            <small>University of Michigan • Environmental Science • 30 minutes ago</small>
            <p>
              Just launched a petition to protect the Greenbelt near campus. Looking for supporters and awareness!
            </p>
            <div class="tags">
              <span>Environment</span>
              <span>Activism</span>
              <span>Community</span>
            </div>
            <div class="post-actions">
              ❤️ 45 &nbsp; 💬 12 &nbsp; 🔁 8 &nbsp; 🔖
            </div>
            <div class="comment-section">
              <input type="text" class="comment-input" placeholder="Add a comment..." onkeydown="handleComment(event, this)" />
              <div class="comments"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Sidebar with Enhanced Visuals -->
<div class="side-panel">
  <div class="trending">
    <h4>🔥 Trending Topics</h4>
    <ul>
      <li><span class="hashtag">#Final Exams</span> <span class="count">– 245 posts</span></li>
      <li><span class="hashtag">#Campus Concert</span> <span class="count">– 189 posts</span></li>
      <li><span class="hashtag">#Internship Opportunities</span> <span class="count">– 156 posts</span></li>
      <li><span class="hashtag">#Housing</span> <span class="count">– 132 posts</span></li>
      <li><span class="hashtag">#Research Positions</span> <span class="count">– 98 posts</span></li>
    </ul>
    <a href="#" class="see-all" onclick="showAllPosts()">🔗 See all trending topics</a>
  </div>

  <div class="events">
    <h4>📅 Upcoming Events</h4>
    <div class="event-card">
      <h5>🎓 Career Fair</h5>
      <p>
        <strong>Time:</strong> Tomorrow, 10:00 AM<br />
        <strong>Location:</strong> Student Union Building<br />
        <strong>Attending:</strong> <span class="attending">156</span> students
      </p>
      <button onclick="rsvpEvent(this)" class="rsvp-btn">✅ RSVP</button>
    </div>
  </div>
</div>

<script>
  // Live update trending post counts
  setInterval(() => {
    const counts = document.querySelectorAll(".count");
    counts.forEach(count => {
      const match = count.textContent.match(/– (\d+)/);
      if (match) {
        const newCount = parseInt(match[1]) + Math.floor(Math.random() * 3);
        count.textContent = `– ${newCount} posts`;
      }
    });
  }, 5000);

  // Clickable hashtags to filter posts
  document.querySelectorAll(".hashtag").forEach(tag => {
    tag.style.cursor = "pointer";
    tag.addEventListener("click", () => {
      const selected = tag.textContent.toLowerCase();
      document.querySelectorAll(".feed-post").forEach(post => {
        const tags = Array.from(post.querySelectorAll(".tags span")).map(t => t.textContent.toLowerCase());
        post.style.display = tags.includes(selected) ? "block" : "none";
      });
    });
  });

  // Reset filter
  function showAllPosts() {
    document.querySelectorAll(".feed-post").forEach(post => post.style.display = "block");
  }

  // RSVP button logic
  function rsvpEvent(button) {
    const attendingSpan = button.previousElementSibling.querySelector(".attending");
    let count = parseInt(attendingSpan.textContent);
    attendingSpan.textContent = count + 1;
    button.disabled = true;
    button.textContent = "🎉 You're in!";
  }
</script>


  <script src="script.js"></script>
</body>
</html>
