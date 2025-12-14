# GitHub Pages Deployment Guide

This project is configured to deploy to GitHub Pages using GitHub Actions.

## Prerequisites

1. **GitHub Repository Settings:**
   - Go to Settings → Pages
   - Source: Select "GitHub Actions"
   - Save the settings

2. **GitHub Actions Variable:**
   - Go to Settings → Secrets and variables → Actions
   - Under "Variables" tab, add:
     - Name: `CUSTOM_DOMAIN`
     - Value: `true` (if you want to use a custom domain) or leave empty/false

## Custom Domain Setup

If you want to use a custom domain:

1. **Create CNAME file:**
   - Create a file named `CNAME` in the repository root
   - Add your domain name (e.g., `example.com` or `www.example.com`)
   - Commit and push the file

2. **DNS Configuration:**
   - Add a CNAME record in your DNS settings pointing to: `your-username.github.io`
   - Or add A records pointing to GitHub Pages IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

3. **GitHub Pages Settings:**
   - Go to Settings → Pages
   - Under "Custom domain", enter your domain
   - Check "Enforce HTTPS" (recommended)

## Deployment Process

The deployment happens automatically when you push to the `master` branch:

1. GitHub Actions workflow runs
2. Builds the Next.js static site
3. Copies CNAME file (if CUSTOM_DOMAIN variable is set to `true`)
4. Deploys to GitHub Pages

## Manual Deployment

You can also trigger deployment manually:

1. Go to Actions tab in GitHub
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select branch: `master`
5. Click "Run workflow"

## Troubleshooting

### Build Fails
- Check GitHub Actions logs for errors
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Custom Domain Not Working
- Verify CNAME file exists in repository root
- Check DNS settings are correct
- Wait for DNS propagation (can take up to 48 hours)
- Verify CUSTOM_DOMAIN variable is set to `true` in GitHub Actions variables

### Pages Not Updating
- Clear browser cache
- Check GitHub Actions workflow completed successfully
- Verify the `out` directory is being generated correctly
