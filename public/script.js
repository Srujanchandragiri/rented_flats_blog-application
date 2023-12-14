// Sample data for navigation links
const navLinks = [
    { text: 'Home', href: '#' },
    { text: 'About', href: '#about' },
    { text: 'Services', href: '#services' },
    { text: 'Contact', href: '#contact' },
];
 
// Sample data for blog posts
const blogData = [
    {
        title: 'Spacious Apartment',
        date: 'December 1, 2023',
        content: 'one bedroom apartment for rent   one double bed room  open plan Area..',
        image: 'blog-image.jpg',
        link: '#post1',
    },
    {
        title: 'Spacious Apartment',
        date: 'December 5, 2023',
        content: '.one bedroom apartment for rent   one double bed room  open plan Area..',
        image: 'blog-image.jpg',
        link: '#post2',
    },
    // Add more blog data as needed
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
        <p>${post.date}</p>
        <p>${post.content}</p>
        <a href="${post.link}">Read More</a>
    `;

    blogPost.appendChild(image);
    blogPost.appendChild(details);

    return blogPost;
}

// Function to populate the blog container with dynamic content
function populateBlogContainer() {
    const blogContainer = document.getElementById('blogContainer');

    blogData.forEach(post => {
        const blogPost = createBlogPost(post);
        blogContainer.appendChild(blogPost);
    });
}

// Call the functions to create navigation links and populate the blog container
createNavLinks();
populateBlogContainer();
