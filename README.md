# Group A Hospital Website

A modern, professional, and responsive hospital website built with Next.js, React, and Tailwind CSS for Group A Hospital located in Apomu, Osun State, Nigeria.

## 🏥 Features

- **Modern Design**: Clean, professional healthcare UI with calming colors
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Interactive Components**: Smooth animations and hover effects
- **Google Maps Integration**: Interactive location maps
- **Contact Forms**: Functional appointment booking system
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Accessibility**: WCAG compliant with proper focus states and contrast
- **Fast Performance**: Optimized images and efficient code structure

## 📋 Pages

### Homepage
- Hero section with compelling call-to-action
- Hospital features and highlights
- Services overview with icons
- Location information with embedded map
- Founder information and hospital introduction

### About Us
- Hospital mission and vision
- Complete history timeline
- Core values and principles
- Founder biography with achievements
- Trust-building content and imagery

### Services
- Comprehensive medical services listing
- Detailed service descriptions with features
- Professional medical imagery
- Insurance and payment information
- Emergency care highlights

### Contact
- Interactive appointment booking form
- Complete contact information
- Emergency hotline prominently displayed
- Google Maps integration
- FAQ section
- Social media links

## 🛠 Technologies Used

- **Next.js 15** (App Router)
- **React 18**
- **Tailwind CSS** for styling
- **JavaScript** (ES6+)
- **Google Maps Embed API**
- **Unsplash** for placeholder images

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd group-a-hospital
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
group-a-hospital/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.js          # About page
│   │   ├── contact/
│   │   │   └── page.js          # Contact page
│   │   ├── services/
│   │   │   └── page.js          # Services page
│   │   ├── globals.css          # Global styles
│   │   ├── layout.js            # Root layout
│   │   └── page.js              # Homepage
│   └── components/
│       ├── Footer.js            # Footer component
│       ├── GoogleMap.js         # Google Maps component
│       └── Header.js            # Navigation header
├── public/                      # Static assets
├── package.json
└── README.md
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue (#2563eb) - Trust and professionalism
- **Secondary**: White (#ffffff) - Cleanliness and clarity
- **Accent**: Green (#10b981) - Health and healing
- **Emergency**: Red (#dc2626) - Urgency and attention

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold and responsive
- **Body Text**: Clean and readable with good contrast

### Animations
- Fade-in effects for content
- Hover states on interactive elements
- Smooth transitions throughout
- Loading states for forms

## 🔧 Customization

### Updating Hospital Information
- Edit contact details in `src/components/Footer.js`
- Update hospital information in `src/app/contact/page.js`
- Modify services in `src/app/services/page.js`

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.js` file with your React component
3. Update navigation in `src/components/Header.js`

### Styling Changes
- Modify Tailwind classes directly in components
- Add custom styles to `src/app/globals.css`
- Update color scheme in CSS variables

## 📱 Responsive Design

The website is fully responsive with:
- **Mobile-first approach**
- **Breakpoints**: 
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
- **Touch-friendly navigation**
- **Optimized images for all devices**

## 🌐 SEO Features

- Semantic HTML5 structure
- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data markup
- Clean URLs
- Fast loading times

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- High contrast colors
- Focus indicators

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
# Deploy the `out` folder to your hosting provider
```

## 📞 Contact Information

**Group A Hospital**
- Address: Main Road, Apomu, Osun State, Nigeria
- Emergency: +234 800-000-0000
- General: +234 800-000-0001
- Email: info@groupahospital.com

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Unsplash for beautiful placeholder images
- Google Maps for location services
