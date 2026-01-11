# Unfinished-Work Website

Official marketing and support website for Unfinished-Work - a social platform for DIY creators. This is a static marketing website that provides information about the app, pricing, features, and support resources.

## 🚀 Features

- **10+ AI Modes**: Daily Coach, Project Critic, Research Assistant, Health Score, Risk Assessment, Timeline Prediction, Priority Matrix, AI Chat, AI Visual Generation, and Voice AI
- **AI Chat**: Conversational AI assistant that remembers your conversations and knows about your projects. Talk naturally to create projects, generate tasks, get feedback, and plan your work.
- **AI Visual Generation**: Generate project logos, banners, thumbnails, and mood boards using DALL-E 3 integration
- **Voice AI**: Voice-to-text AI integration for hands-free project planning
- **Social Feed**: Follow creators and see AI-recommended content from their public posts
- **User Discovery**: Search and follow creators by name, username, or business
- **Public & Private Posts**: Share your work publicly with the community or keep posts private - you control your privacy
- **Social Network**: Build your network of creators, see public project updates, and get inspired by the community
- **Secure Authentication**: Industry-standard authentication for app access
- **Dark Mode**: Automatic theme detection with manual toggle
- **Token-Based Pricing**: Flexible token system - use tokens for AI requests or image generation

## 📱 App Information

- **Platform**: iOS (Android & Web coming soon)
- **Authentication**: Secure authentication (Google, GitHub, Email)
- **Backend**: Firebase (Auth, Firestore, Storage, Functions)
- **AI Integration**: OpenAI API (GPT-4o, GPT-4o-mini, DALL-E 3, Whisper) for personalized insights
- **Pricing**: Token-based system
  - **Free**: 100 tokens/month (100 AI requests), no image generation
  - **Pro**: $9.99/month ($99.99/year) - 800 tokens/month (~100 images OR 800 AI requests)
  - **Pro+**: $19.99/month ($199.99/year) - 1,500 tokens/month (~187 images OR 1,500 AI requests)
  - **Ultra**: $39.99/month ($399.99/year) - 3,000 tokens/month (~375 images OR 3,000 AI requests)
  - **Yearly Plans**: Save 17% on all tiers (Pro: Save $20/year, Pro+: Save $40/year, Ultra: Save $80/year)

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
   git clone https://github.com/chrisbraycodes/unfinished-work-website.git
   cd unfinished-work-website
   ```

2. Start the local server:
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Or using Node.js (if you have http-server installed)
   npx http-server -p 8000
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

## 🎯 Website Features

### Beta Access System
- **Email Integration**: Uses `mailto:` protocol to open user's email client
- **Pre-filled Templates**: Professional email templates for beta requests
- **Form Validation**: Client-side validation for required fields
- **Success Messages**: User-friendly confirmation after form submission

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
├── index.html              # Main homepage with features, pricing, and download
├── privacy.html            # Privacy policy (GDPR/COPPA compliant)
├── support.html            # Support page with troubleshooting and contact forms
├── terms.html              # Terms of service with pricing details
├── styles.css              # Main stylesheet with dark mode support
├── script.js               # JavaScript functionality (modals, forms, dark mode)
├── favicon.svg             # App logo favicon
├── vercel.json             # Vercel deployment configuration
├── package.json            # Node.js dependencies (minimal, static site)
├── package-lock.json       # Dependency lock file
├── .nvmrc                  # Node version specification
├── websearch-optimized.jpg # Open Graph image for social sharing
├── websearch.png           # Social sharing image
└── README.md               # This file
```

### CSS Architecture
- **CSS Variables**: For consistent theming
- **Mobile-First**: Responsive design approach
- **Component-Based**: Modular CSS organization
- **Dark Mode**: Comprehensive dark theme support

### JavaScript Features
- **Modal System**: Beta access and success message modals
- **Form Handling**: Email integration with pre-filled templates and validation
- **Theme Toggle**: Dark/light mode switching with localStorage persistence
- **Responsive Navigation**: Mobile menu with smooth animations
- **FAQ Accordion**: Expandable FAQ sections
- **Smooth Scrolling**: Navigation links with offset for fixed navbar
- **Dynamic Copyright**: Auto-updating copyright year (minimum 2025)
- **Intersection Observer**: Scroll-triggered animations for feature cards

## 📱 App Store Compliance

This website is designed to meet Apple's requirements for App Store approval:

- ✅ **Privacy Policy**: Comprehensive and legally compliant (GDPR, COPPA)
- ✅ **Support Page**: Beta testing guidelines, troubleshooting, and feedback forms
- ✅ **Terms of Service**: Complete terms with accurate pricing and subscription details
- ✅ **Contact Information**: Multiple ways to reach support (email, forms)
- ✅ **Accurate Descriptions**: Features match actual app implementation
- ✅ **Professional Design**: Clean, modern, and trustworthy appearance
- ✅ **Token-Based Pricing**: Clearly explained pricing system with all tiers
- ✅ **AI Features**: Accurate descriptions of AI capabilities without proprietary details

## 🚀 Deployment

### Static Hosting
This is a static website that can be deployed to any static hosting service:

- **Vercel** (Recommended): Git-based deployment with `vercel.json` configuration
  ```bash
  vercel deploy
  ```
- **Netlify**: Drag and drop deployment or Git integration
- **GitHub Pages**: Free hosting for public repositories
- **AWS S3 + CloudFront**: Scalable static hosting
- **Firebase Hosting**: Google's hosting platform

### Vercel Configuration
The `vercel.json` file includes:
- Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)
- Referrer policy settings
- Output directory configuration

### Custom Domain
To use a custom domain (e.g., `unfinishedwork.com`):
1. Update the domain in the HTML meta tags and links
2. Configure DNS settings with your hosting provider
3. Set up SSL certificate for HTTPS (automatic with Vercel/Netlify)

## 📞 Support

For questions about the website or app:
- **Email**: support@unfinished-work.com
- **Privacy Inquiries**: privacy@unfinished-work.com
- **Website**: Visit the support page (`support.html`) for detailed help
- **Beta Access**: Use the beta request form on the homepage
- **Support Hours**: Monday - Friday, 9:00 AM - 6:00 PM PST

## 🔄 Recent Updates

### Current Website State (2025)
- ✅ Updated to reflect current app features (10+ AI modes)
- ✅ Accurate token-based pricing (Free, Pro, Pro+, Ultra)
- ✅ AI Chat descriptions focused on user capabilities
- ✅ Voice AI and AI Visual Generation features documented
- ✅ Removed proprietary implementation details
- ✅ All pricing tiers accurately reflected across all pages
- ✅ Support page includes AI Chat usage instructions
- ✅ Privacy policy updated with AI Chat, Voice AI, and Visual Generation

## 📄 License

© 2025 Unfinished-Work. All rights reserved.

---

**Built for Apple App Store compliance and user onboarding** 🍎✨

---

## 📝 Notes

- This is a **static marketing website** - no backend or database required
- All forms use `mailto:` protocol to open the user's email client (no server-side processing)
- Dark mode preference is stored in localStorage
- The website is optimized for mobile-first responsive design
- All AI feature descriptions focus on user capabilities, not proprietary implementation details
- Pricing information is synchronized across all pages (index, terms, support)
- The website serves as the primary marketing and support resource for the iOS app