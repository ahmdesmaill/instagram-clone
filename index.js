const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const postTemplate = `<article class="post">
        <header class="post-header">
          <img
            class="avatar"
            src="{{ avatar }}"
            alt="{{ name }} profile avatar"
          />
          <div class="post-meta">
            <p class="name">{{ name }}</p>
            <p class="location">{{ location }}</p>
          </div>
        </header>

        <figure class="post-media">
          <img src="{{ post }}" alt="" />
          <figcaption class="sr-only">
            Image posted by {{ name }}
          </figcaption>
        </figure>

        <div class="post-body">
          <div class="actions" role="group" aria-label="Post actions">
            <button class="icon-btn" aria-label="Like">
              <img src="images/icon-heart.png" alt="" aria-hidden="true" />
            </button>
            <button class="icon-btn" aria-label="Comment">
              <img src="images/icon-comment.png" alt="" aria-hidden="true" />
            </button>
            <button class="icon-btn" aria-label="Share">
              <img src="images/icon-dm.png" alt="" aria-hidden="true" />
            </button>
          </div>

          <p class="likes"><span class="text-bold">{{ likes }} likes</span></p>
          <p class="caption">
            <span class="text-bold">{{ username }}</span> {{ comment }}
          </p>
        </div>
      </article>
`;

function convertLikesToLocaleFormat() {
  for (const post of posts) {
    post.likes = post.likes.toLocaleString();
  }
}

function renderPosts() {
  let allPostsHTMLString = "";
  const mainElement = document.querySelector("main");
  for (const post of posts) {
    let newPost = postTemplate;
    for (const [key, value] of Object.entries(post)) {
      newPost = newPost.replaceAll(`{{ ${key} }}`, value);
    }
    allPostsHTMLString += newPost;
  }

  mainElement.innerHTML = allPostsHTMLString;
}
convertLikesToLocaleFormat();
renderPosts();
