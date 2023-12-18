// Sample data for navigation links
const navLinks = [
    { text: 'Home', href: '/ ' },
    { text: 'About', href: '#about' },
    { text: 'Services', href: '#services' },
    { text: 'Contact', href: '#contact' },
];
 
// Function to create navigation links
function createNavLinks() {
    const navbar = document.getElementById('navbar');
    
    navLinks.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.textContent = link.text;
        navbar.appendChild(anchor);
    });
}

// Function to create a blog post element
function createBlogPost(post) {
    const blogPost = document.createElement('div');
    blogPost.classList.add('blog-post');
    
    
    
    

    const image = document.createElement('img');
    image.src = post.image;
    image.alt = post.title;

    const details = document.createElement('div');
    details.innerHTML = `
        <h2>${post.title}</h2>
        <h3>${post.rent}</h3>
        <p>${post.date}</p>
        <p>${post.content}</p>
        <a href="${post.link}">Read More</a>
    `;

    blogPost.appendChild(image);
    blogPost.appendChild(details);

    return blogPost;
}

// Function to populate the blog container with dynamic content from the server
async function populateBlogContainer() {
    const blogContainer = document.getElementById('blogContainer');

    try {
        const response = await fetch('http://localhost:6000/getUser'); // Change the URL to your server endpoint
        const blogDataFromServer = await response.json();

        blogDataFromServer.forEach(post => {
            const blogPost = createBlogPost(post);
            blogContainer.appendChild(blogPost);
        });
    } catch (error) {
        console.error('Error fetching blog data:', error);
    }
}

// Call the functions to create navigation links and populate the blog container
createNavLinks();
populateBlogContainer();
