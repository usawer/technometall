# TODO: Fix Deployment Issues for Technometall Website

## 1. Install EmailJS for Contact Form
- Add @emailjs/browser to package.json dependencies
- Run npm install

## 2. Update Contact.jsx to Use EmailJS
- Replace fetch API call with EmailJS sendForm
- Configure EmailJS service, template, and public key
- Update form submission logic and error handling

## 3. Verify Asset Paths
- Check all imported assets (images, models) for correct paths
- Ensure Vite base path '/technometall/' is handled properly

## 4. Test Build and Deployment
- Run npm run build
- Check for any build errors
- Deploy to GitHub Pages using npm run deploy

## 5. Verify Functionality
- Test contact form on deployed site
- Ensure all assets load correctly
- Check navigation and responsiveness
