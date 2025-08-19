
# Devansh Gupta - Portfolio Website

A modern, responsive portfolio website showcasing projects, blogs, and professional information.

## Project Structure

```
portfolio/
├── .github/workflows/
│   └── static.yml          # GitHub Pages deployment configuration
├── assets/
│   ├── css/                # All stylesheets
│   │   ├── index.css       # Homepage styles
│   │   ├── blogs.css       # Blog page styles
│   │   ├── tech.css        # Tech projects page styles
│   │   └── recruiters.css  # Recruiters page styles
│   ├── js/                 # All JavaScript files
│   │   ├── script.js       # Main JavaScript (navigation, theme toggle)
│   │   ├── blogs.js        # Blog page functionality
│   │   ├── projects.js     # Projects page functionality
│   │   └── recruiters.js   # Recruiters page functionality
│   └── images/             # All images and media files
│       └── project1.jpeg   # Project image
├── index.html              # Homepage
├── blogs.html              # Blog listing page
├── tech-projects.html      # Technical projects showcase
├── for-recruiters.html     # Professional information for recruiters
├── .replit                 # Replit configuration
└── README.md               # This file
```

## Features

- **Responsive Design**: Works on all device sizes
- **Dark/Light Theme**: Toggle between themes with persistence
- **Interactive Navigation**: Smooth scrolling and mobile-friendly menu
- **Project Filtering**: Filter projects by technology/category
- **Scroll Functionality**: Custom scroll containers with progress indicators
- **Professional Layout**: Clean, modern design suitable for job applications

## Pages

1. **Homepage** (`index.html`): Main landing page with introduction and quick navigation
2. **Blogs** (`blogs.html`): Writing showcase with category filtering
3. **Tech Projects** (`tech-projects.html`): Technical project portfolio with filtering
4. **For Recruiters** (`for-recruiters.html`): Professional information, skills, and contact details

## Technologies Used

- HTML5 Semantic markup
- CSS3 with custom properties (CSS variables)
- Vanilla JavaScript (ES6+)
- Font Awesome icons
- CSS Grid and Flexbox for layouts
- CSS animations and transitions

## Getting Started

1. Open any HTML file in a web browser
2. The website is fully static and doesn't require a server for basic functionality
3. For deployment, use the included GitHub Actions workflow or deploy on Replit

## Customization

- Update personal information in HTML files
- Modify CSS custom properties in `:root` for theme colors
- Add new projects/blogs by following the existing card structure
- Customize animations and transitions in CSS files

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript features used
- CSS Grid and Flexbox support required
```
