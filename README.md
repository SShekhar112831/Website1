# Mrs. Swati Shekhar - Portfolio Website

A professional portfolio website for Mrs. Swati Shekhar, showcasing her expertise in art education and Hindi tuition services. Built with HTML, CSS, and JavaScript for optimal performance and user experience.

## 🌟 Features

### Core Sections
- **Hero Section** - Eye-catching introduction with call-to-action buttons
- **About Section** - Professional introduction with key statistics
- **Education & Certifications** - Timeline-based education history
- **Experience** - Professional experience cards with icons
- **Skills & Expertise** - Categorized skills with interactive tags
- **Portfolio** - Filterable art gallery by categories
- **Services** - Detailed service offerings with pricing
- **Testimonials** - Student and parent reviews
- **FAQ** - Interactive accordion with common questions
- **Contact** - Contact form and information

### Interactive Features
- ✅ Responsive mobile-first design
- ✅ Smooth scrolling navigation
- ✅ Portfolio filtering by art categories
- ✅ FAQ accordion functionality
- ✅ Contact form with validation
- ✅ Scroll animations and hover effects
- ✅ Mobile hamburger menu
- ✅ Social media integration
- ✅ Modern gradient design
- ✅ Professional typography

## 🚀 Quick Start

1. **Download/Clone** the project files
2. **Open** `index.html` in your web browser
3. **Customize** the content as needed (see customization guide below)
4. **Deploy** to your preferred hosting platform

## 📝 Customization Guide

### 1. Personal Information
Update the following sections in `index.html`:

#### Contact Information
```html
<!-- Update in Contact Section -->
<p>swati.shekhar@email.com</p>
<p>+91 98765 43210</p>
<p>[Your City], [Your State], India</p>
```

#### Social Media Links
```html
<!-- Update href attributes in Contact Section -->
<a href="YOUR_LINKEDIN_URL" class="social-link"><i class="fab fa-linkedin"></i></a>
<a href="YOUR_INSTAGRAM_URL" class="social-link"><i class="fab fa-instagram"></i></a>
<a href="YOUR_FACEBOOK_URL" class="social-link"><i class="fab fa-facebook"></i></a>
<a href="YOUR_WHATSAPP_URL" class="social-link"><i class="fab fa-whatsapp"></i></a>
```

### 2. Education & Certifications
Replace the placeholder content in the Education section:

```html
<div class="timeline-item">
    <div class="timeline-content">
        <h3>Your Degree</h3>
        <p class="institution">Your University</p>
        <p class="year">Year - Year</p>
        <p>Description of your education</p>
    </div>
</div>
```

### 3. Experience
Update the experience cards with your actual work history:

```html
<div class="experience-card">
    <div class="experience-icon">
        <i class="fas fa-palette"></i>
    </div>
    <h3>Your Job Title</h3>
    <p class="duration">Year - Present</p>
    <p>Description of your role and achievements</p>
</div>
```

### 4. Portfolio Images
Replace the placeholder images with actual artwork:

1. **Add your images** to a folder (e.g., `images/`)
2. **Update the portfolio items** in `index.html`:

```html
<div class="portfolio-item" data-category="painting">
    <div class="portfolio-image">
        <img src="images/your-artwork.jpg" alt="Your Artwork Description">
    </div>
    <div class="portfolio-overlay">
        <h3>Your Artwork Title</h3>
        <p>Description of the artwork</p>
    </div>
</div>
```

### 5. Services & Pricing
Update the service cards with your actual offerings:

```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-palette"></i>
    </div>
    <h3>Your Service Name</h3>
    <p>Service description</p>
    <ul class="service-features">
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
    </ul>
    <div class="service-price">
        <span class="price">₹Your Price</span>
        <span class="duration">per session</span>
    </div>
</div>
```

### 6. Testimonials
Replace with actual student/parent testimonials:

```html
<div class="testimonial-card">
    <div class="testimonial-content">
        <p>"Actual testimonial from your student or parent"</p>
    </div>
    <div class="testimonial-author">
        <div class="author-info">
            <h4>Student/Parent Name</h4>
            <p>Class/Relationship</p>
        </div>
    </div>
</div>
```

### 7. Skills
Update the skills section with your actual expertise:

```html
<div class="skill-category">
    <h3>Category Name</h3>
    <div class="skill-items">
        <span class="skill-tag">Your Skill 1</span>
        <span class="skill-tag">Your Skill 2</span>
        <span class="skill-tag">Your Skill 3</span>
    </div>
</div>
```

## 🎨 Design Customization

### Colors
The website uses a purple gradient theme. To change colors, update the CSS variables in `styles.css`:

```css
/* Primary gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* You can change these hex values to your preferred colors */
```

### Fonts
The website uses Google Fonts (Poppins). To change fonts:

1. **Update the Google Fonts link** in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

2. **Update the font-family** in `styles.css`:
```css
body {
    font-family: 'YOUR_FONT', sans-serif;
}
```

## 📱 Mobile Optimization

The website is fully responsive and optimized for:
- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1200px+)

## 🚀 Deployment Options

### 1. GitHub Pages (Free)
1. Create a GitHub repository
2. Upload your files
3. Go to Settings > Pages
4. Select source branch
5. Your site will be available at `https://username.github.io/repository-name`

### 2. Netlify (Free)
1. Drag and drop your project folder to [netlify.com](https://netlify.com)
2. Get instant deployment with custom domain options

### 3. Vercel (Free)
1. Connect your GitHub repository to [vercel.com](https://vercel.com)
2. Automatic deployments on every push

### 4. Traditional Hosting
Upload files to any web hosting service via FTP or file manager.

## 🔧 Advanced Customization

### Adding New Sections
1. **Create the HTML structure** in `index.html`
2. **Add CSS styles** in `styles.css`
3. **Add JavaScript functionality** in `script.js` if needed

### Adding Animations
The website includes scroll-triggered animations. To add more:

```css
.your-element {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
}

.your-element.animate-in {
    opacity: 1;
    transform: translateY(0);
}
```

### SEO Optimization
1. **Update meta tags** in the `<head>` section
2. **Add Open Graph tags** for social media sharing
3. **Optimize images** with descriptive alt text
4. **Add structured data** for better search results

## 📞 Support & Contact

For technical support or customization help:
- 📧 Email: [Your Email]
- 📱 WhatsApp: [Your Number]
- 🌐 Website: [Your Website]

## 📄 License

This project is created for Mrs. Swati Shekhar's portfolio. Feel free to use and modify for your own portfolio website.

## 🙏 Acknowledgments

- **Font Awesome** for icons
- **Google Fonts** for typography
- **Modern CSS Grid & Flexbox** for layout
- **Vanilla JavaScript** for interactivity

---

**Built with ❤️ for showcasing art and education excellence**
