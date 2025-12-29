# Fortys-Safety Website Deployment Guide

## Overview
This guide covers the deployment of the Fortys-Safety website to Vercel with domain configuration.

## Prerequisites
- Vercel account
- Access to fortys-safety.com domain
- Git repository (optional but recommended)

## Deployment Steps

### 1. Deploy to Vercel
```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd fortys-safety
vercel
```

### 2. Configure Domain
1. In Vercel dashboard, go to Project Settings → Domains
2. Add `fortys-safety.com`
3. Follow DNS configuration instructions
4. Update DNS records at domain registrar

### 3. Environment Variables (if needed)
- No environment variables required for current setup
- Future: Add contact form email service, analytics keys

### 4. SSL Certificate
- Vercel automatically provides SSL certificates
- Certificate will be issued automatically after domain verification

## Build Configuration
- **Framework**: Next.js 16.1.1 with App Router
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Node Version**: >=18.0.0 (specified in package.json)

## Performance Features
- Static Site Generation (SSG) for all pages
- Image optimization with Next.js Image component
- Lazy loading for components
- Optimized CSS and JavaScript bundles
- Security headers via middleware

## SEO Configuration
- Comprehensive metadata in layout.tsx
- Sitemap.xml automatically generated
- Robots.txt configured
- Open Graph and Twitter cards
- Structured data ready for schema markup

## Accessibility Features
- WCAG 2.1 AA compliance
- Skip to main content link
- ARIA labels and semantic HTML
- High contrast mode support
- Reduced motion support
- Keyboard navigation

## Post-Deployment Checklist
- [ ] Verify all pages load correctly
- [ ] Test contact form functionality
- [ ] Check mobile responsiveness
- [ ] Validate SSL certificate
- [ ] Test social media links
- [ ] Verify WhatsApp widget
- [ ] Check client logo banner animation
- [ ] Test language switcher (when i18n is fully implemented)
- [ ] Run Lighthouse audit (target: 90+)
- [ ] Test accessibility with screen reader

## Monitoring
- Vercel Analytics for performance monitoring
- Google Search Console for SEO monitoring
- Set up error tracking (optional)

## Maintenance
- Regular dependency updates
- Content updates through code changes
- Monitor Core Web Vitals
- Keep security headers updated

## Contact
For deployment issues or questions, contact:
- Email: info@fortys-safety.com
- Phone: +961 3 123 456
