const addBlogBtn = document.getElementById('add-blog-btn');
const closeBlogBtn = document.getElementById('close-blog-btn');
const addBlogSection = document.querySelector('#overlay');
const blogContainer = document.querySelector('#blog-container');
const createBlogBtn = document.querySelector('#create-blog-btn');
const BlogImgUrl = document.querySelector('#post-url');
const BlogTitle = document.querySelector('#blog-title');
const BlogDesc = document.querySelector('#blog-desc');
const BlogContent = document.querySelector('#main-blog');

// Demo blog data                          
const demoBlog = [
    {
        ImgURL: 'https://asset20.ckassets.com/blog/wp-content/uploads/sites/6/2022/08/Prabhudesai.jpg',
        title: 'Arun Prabhudesai',
        desc: `Trak.in Founder Arun Prabhudesai: An Inspirational Journey | Trakin Tech Biography`,
        content: `Arun Prabhudesai is a well-known name in the Indian technology industry. He is the founder of Trak.in, a leading news and analysis website that covers the latest developments in the Indian startup ecosystem. In addition to his work with Trak.in, Arun Prabhudesai has also made significant contributions to the industry through his YouTube channel, Trakin Tech.

        Arun Prabhudesai was born in Pune, India, in 1976. He attended Stella Maris High School for his secondary education, finishing his 12th grade in 1992. Following that, he enrolled in DY Patil University located in Navi Mumbai, to pursue his Bachelor's degree in Computer Science, which he completed in 1996.

        After graduating, Arun began working as the manager of Internet services at Weikfield Mnemonics Info Networks. He held this position until September 2000, gaining valuable experience in the field.
        
        Arun's passion for technology and desire to share his knowledge with others led him to start his career as a YouTuber in 2011 under the name “Trakin Tech.” His channel featured informative videos on topics such as Smartphone & Gadget Reviews, Unboxing Videos, Breaking Tech Stories, and Tech News on a daily basis, making it a go-to source for tech enthusiasts. With his expertise in the field, Arun continues to provide valuable insights into the latest technological advancements.`
    },
    {
        ImgURL: "https://wp-me.com/wp-content/uploads/2016/06/Faisal-Farooqui-founder-of-MouthShut.com_.jpg",
        title: "Faisal Farooqui",
        desc: `Founder of MouthShut.com`,
        content: `Faisal Farooqui is an Indian technology entrepreneur and the founder and CEO of the review and rating platform MouthShut.com.[1]

        In 2002, he founded Zarca Interactive (The parent company of SoGoSurvey and K12Insight), a Virginia-based enterprise survey and feedback company.[2] He is the seed investor in DeHaat, an agri-tech company.[3]
        
        Early life
        Faisal Farooqui was born in Mumbai, Maharashtra.[4] His father owned bakeries in the city.[5] He attended St. Stanislaus High School in Bandra, Mumbai.[6] He received a Bachelor of Science in Information Systems and Finance from State University of New York at Binghamton.[7][4]
        
        Faisal was elected to the University's Faculty Senate Committee and the Student government. He became the technology editor of the campus newspaper, Pipe Dream.[4]
        
        Career
        After finishing his undergraduate studies, he started working at American Management Systems as a telecommunication consultant.[6] He moved to India in 2000 and established MouthShut.com as a platform for reviews of products and services.[6][8] MouthShut popularized the concept of advertising on rickshaws for marketing purposes.[9][10]
        
        In 2001 Faisal started the dial-the-CEO program on MouthShut where consumers could directly call the CEO. The program was later adopted by many businesses for interaction between CEOs and customers directly.[11]
        
        In 2011, he beta-launched Dealface.com which connects consumers with local businesses. This was the first website that provided SMS-based coupons.[12][13][14] Later Dealface was integrated with MouthShut.
        
        He was also the official spokesperson to Indian actor Dilip Kumar.[15] His family has a long-standing relationship with Kumar.[16][17] During the last days of actor Faisal released all his health updates to the media.[18][15][19][20] He received a 2006 Manthan Award for Best Youth website.[21] In several interviews in 2015, he stated that he supports net neutrality.[22][23][24] In a 2017 interview, Farooqui stated his preference for shifting India's time zone by 30 minutes.[25]
        
        Farooqui's biographical memoir of Dilip Kumar titled In The Shadow of a Legend: Dilip Kumar was launched on 7 July 2022, the first death anniversary of Dilip Kumar.[26]`
    },
    {
        ImgURL: 'https://wp-me.com/wp-content/uploads/2016/06/Ashish-Sinha-founder-of-NextBigWhat.jpg',
        title: 'Ashish Sinha',
        desc: 'founder of NextBigWhat',
        content: `Ashish Sinha is blogger #7 on our list of Indian bloggers. Ashish worked before for big brands like Yahoo, and IBM, he started blogging earlier in 2007 with his blog Pluggd.

        Later in 2012, he re-branded his blog as NextBigWhat.com which talks about Tech, Start-ups, and Entrepreneurship Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aut ullam, explicabo pariatur ipsa, libero deserunt corporis eaque labore aliquid in quis, minima expedita voluptatibus eius ex commodi odio fugit velit quas similique iste tenetur. Velit aliquid cum accusantium dolore, dolores necessitatibus quia architecto delectus odit totam maiores cupiditate vitae beatae eligendi soluta veniam magnam, tempora, deserunt molestiae unde commodi. Optio nisi adipisci corporis modi repellat deserunt itaque inventore quasi, sint ratione molestias voluptas magnam suscipit sequi impedit veritatis vel vitae? Omnis consequuntur reiciendis earum at accusamus odit, consequatur vitae deleniti praesentium quisquam quaerat itaque fugiat magnam aspernatur, ipsam laudantium.
        `
    }
];

addBlogBtn.addEventListener('click', () => {
    addBlogSection.classList.add('active-add-blog');
    document.body.style.overflow = 'hidden';
});

closeBlogBtn.addEventListener('click', () => {
    hideAddBlogModal();
});

function showBlog(title, imageUrl, description, content) {
    // Hide the blog container and show the individual blog content
    blogContainer.style.display = 'none';

    const blogContent = document.createElement('section');
    blogContent.id = 'blog-content';
    blogContent.classList.add('flex');

    const headerDiv = document.createElement('header');
    headerDiv.classList.add('flex');

    const leftContentDiv = document.createElement('div');
    leftContentDiv.classList.add('left-content', 'flex');

    const h2 = document.createElement('h2');
    h2.textContent = title;

    const h3 = document.createElement('h3');
    h3.textContent = description;

    leftContentDiv.appendChild(h2);
    leftContentDiv.appendChild(h3);

    const rightContentDiv = document.createElement('div');
    rightContentDiv.classList.add('right-content');

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'blog-image';

    rightContentDiv.appendChild(img);

    headerDiv.appendChild(leftContentDiv);
    headerDiv.appendChild(rightContentDiv);

    const mainContentDiv = document.createElement('div');
    mainContentDiv.classList.add('main-content');

    const p = document.createElement('p');
    p.textContent = content;

    mainContentDiv.appendChild(p);

    blogContent.appendChild(headerDiv);
    blogContent.appendChild(mainContentDiv);

    // Add the blog content to the body
    document.body.appendChild(blogContent);

    // Show the back button and hide the add blog button
    document.getElementById('back-btn').style.display = 'grid';
    document.getElementById('add-blog-btn').style.display = 'none';
}

function hideBlog() {
    // Show the blog container and remove the individual blog content
    blogContainer.style.display = 'flex';
    document.getElementById('blog-content').remove();

    // Show the add blog button and hide the back button
    document.getElementById('add-blog-btn').style.display = 'grid';
    document.getElementById('back-btn').style.display = 'none';
}

function createBlogPostElement(title, imageUrl, description, content) {
    const article = document.createElement('article');
    article.classList.add('blog', 'flex');

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image');

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'blog-image';

    imageDiv.appendChild(img);

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');

    const h1 = document.createElement('h1');
    h1.textContent = title;

    titleDiv.appendChild(h1);

    const descDiv = document.createElement('div');
    descDiv.classList.add('desc');

    const p = document.createElement('p');
    p.textContent = description;

    descDiv.appendChild(p);

    const readMoreBtn = document.createElement('button');
    readMoreBtn.id = 'read-more-btn';
    readMoreBtn.textContent = 'Read More';

    readMoreBtn.addEventListener('click', () => {
        window.scrollTo({top: 0})
        showBlog(title, imageUrl, description, content);
    });

    article.appendChild(imageDiv);
    article.appendChild(titleDiv);
    article.appendChild(descDiv);
    article.appendChild(readMoreBtn);

    return article;
}

function addBlogPost(title, imageUrl, description, content) {
    const blogData = {
        ImgURL: imageUrl,
        title,
        desc: description,
        content,
    };

    const blogPostElement = createBlogPostElement(
        title,
        imageUrl,
        description,
        content
    );

    blogContainer.appendChild(blogPostElement);

    let existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    existingBlogs.push(blogData);
    localStorage.setItem('blogs', JSON.stringify(existingBlogs));
}

function loadBlogPosts() {
    let existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];

    if (existingBlogs.length > 0) {
        blogContainer.innerHTML = '';
        existingBlogs.forEach((blogData) => {
            const blogPostElement = createBlogPostElement(
                blogData.title,
                blogData.ImgURL,
                blogData.desc,
                blogData.content
            );
            blogContainer.appendChild(blogPostElement);
        });
    }
}

function addDemoBlogPosts() {
    for (const blogData of demoBlog) {
        const blogPostElement = createBlogPostElement(
            blogData.title,
            blogData.ImgURL,
            blogData.desc,
            blogData.content
        );
        blogContainer.appendChild(blogPostElement);
    }
}

function handleAddBlogFormSubmit(event) {
    event.preventDefault();

    const title = BlogTitle.value;
    const imageUrl = BlogImgUrl.value;
    const description = BlogDesc.value;
    const content = BlogContent.value;

    if (!title || !imageUrl || !description || !content) {
        alert('Please fill in all fields.');
        return;
    }

    addBlogPost(title, imageUrl, description, content);

    BlogTitle.value = '';
    BlogImgUrl.value = '';
    BlogDesc.value = '';
    BlogContent.value = '';

    hideAddBlogModal();
}

function hideAddBlogModal() {
    addBlogSection.classList.remove('active-add-blog');
    document.body.style.overflow = 'auto';
}

createBlogBtn.addEventListener('click', handleAddBlogFormSubmit);
window.addEventListener('load', loadBlogPosts);
window.addEventListener('load', addDemoBlogPosts);

// Back button functionality
const backButton = document.getElementById('back-btn');
backButton.addEventListener('click', hideBlog);
