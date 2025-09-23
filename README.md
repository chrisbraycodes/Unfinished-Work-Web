# Unfinished Work Website

Official marketing and support website for Unfinished Work - an AI-powered social platform for creators.

## 🚀 Features

- **7 AI Modes**: Daily Coach, Project Critic, Research Assistant, Health Score, Risk Analysis, Timeline Prediction, and Priority Matrix
- **Social Feed**: Follow creators and see AI-recommended content
- **User Discovery**: Search and follow creators by name, username, or business
- **Face ID Security**: Biometric authentication for app access
- **Dark Mode**: Automatic theme detection with manual toggle
- **Subscription System**: Free (5 AI interactions), Pro ($14.99/month), Yearly ($139.99/year), Lifetime ($399.99)

## 📱 App Information

- **Platform**: iOS (Android & Web coming soon)
- **Authentication**: Face ID/Touch ID
- **Backend**: Firebase (Auth, Firestore, Storage, Functions)
- **AI Integration**: OpenAI API for personalized insights
- **Pricing**: Free tier with 5 AI interactions/month, Pro for unlimited access

## 🌐 Website Pages

- **Homepage** (`index.html`) - Main marketing page with features, pricing, and beta access
- **Privacy Policy** (`privacy.html`) - Comprehensive privacy policy for App Store compliance
- **Support Page** (`support.html`) - Beta testing guidelines, troubleshooting, and contact forms
- **Terms of Service** (`terms.html`) - Legal terms and conditions

## 🛠️ Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS variables for theming
- **Icons**: SVG icons and emoji
- **Responsive**: Mobile-first design with iPhone 16 Pro optimization
- **Server**: Python HTTP server for local development

## 🚀 Quick Start

### Prerequisites
- Python 3.x
- Modern web browser

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/unfinished-work-website.git
   cd unfinished-work-website
   ```

2. Start the local server:
   ```bash
   python3 -m http.server 8000
   ```

3. Open your browser and visit:
   ```
   http://localhost:8000
   ```

## 📱 Mobile Testing

To test on mobile devices on the same network:
1. Find your computer's IP address
2. Visit `http://[YOUR_IP]:8000` on your mobile device
3. Test responsive design and touch interactions

## 🎯 Key Features

### Beta Access System
- **Email Integration**: Uses `mailto:` protocol to open user's email client
- **Pre-filled Templates**: Professional email templates for beta requests
- **Form Validation**: Client-side validation for required fields

### Dark Mode
- **Automatic Detection**: Uses `prefers-color-scheme` media query
- **Manual Toggle**: User can override system preference
- **Persistent Storage**: Remembers user's choice with localStorage

### Responsive Design
- **Mobile-First**: Optimized for iPhone 16 Pro and other mobile devices
- **Flexible Grid**: CSS Grid and Flexbox for responsive layouts
- **Touch-Friendly**: Large touch targets and smooth interactions

## 📄 Legal Compliance

### Privacy Policy
- **GDPR Compliant**: Covers data collection, usage, and user rights
- **COPPA Compliant**: Age verification and children's privacy protection
- **App Store Ready**: Meets Apple's privacy requirements for beta approval

### Support Page
- **Beta Testing Guidelines**: Clear instructions for TestFlight users
- **Troubleshooting**: Common issues and solutions
- **Contact Forms**: Multiple ways to get help
- **Feedback System**: Beta feedback collection with detailed forms

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#4facfe to #00f2fe)
- **Secondary**: Dark theme support
- **Accent**: Gold for premium features (#FFD700)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Fluid typography with clamp() functions

### Components
- **Cards**: Consistent card design for features and pricing
- **Buttons**: Primary, secondary, and CTA button styles
- **Forms**: Styled form inputs with validation states
- **Modals**: Beta access and success message modals

## 🔧 Development

### File Structure
```
├── index.html          # Main homepage
├── privacy.html        # Privacy policy
├── support.html        # Support page
├── terms.html          # Terms of service
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
├── favicon.svg         # App logo favicon
└── README.md           # This file
```

### CSS Architecture
- **CSS Variables**: For consistent theming
- **Mobile-First**: Responsive design approach
- **Component-Based**: Modular CSS organization
- **Dark Mode**: Comprehensive dark theme support

### JavaScript Features
- **Modal System**: Beta access and success modals
- **Form Handling**: Email integration and validation
- **Theme Toggle**: Dark/light mode switching
- **Responsive Navigation**: Mobile menu functionality
- **Dynamic Copyright**: Auto-updating copyright year

## 📱 App Store Compliance

This website is designed to meet Apple's requirements for beta app approval:

- ✅ **Privacy Policy**: Comprehensive and legally compliant
- ✅ **Support Page**: Beta testing guidelines and feedback forms
- ✅ **Contact Information**: Multiple ways to reach support
- ✅ **Accurate Descriptions**: Features match actual app implementation
- ✅ **Professional Design**: Clean, modern, and trustworthy appearance

## 🚀 Deployment

### Static Hosting
This is a static website that can be deployed to any static hosting service:

- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting for public repositories
- **AWS S3**: Scalable static hosting
- **Firebase Hosting**: Google's hosting platform

### Custom Domain
To use a custom domain (e.g., `unfinishedwork.com`):
1. Update the domain in the HTML files
2. Configure DNS settings with your hosting provider
3. Set up SSL certificate for HTTPS

## 📞 Support

For questions about the website or app:
- **Email**: support@unfinishedwork.com
- **Website**: Visit the support page for detailed help
- **Beta Access**: Use the beta request form on the homepage

## 📄 License

© 2025 Unfinished Work. All rights reserved.

---

**Built for Apple App Store compliance and user onboarding** 🍎✨