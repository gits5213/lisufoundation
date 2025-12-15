# GitHub Pages Deployment Guide

This project is configured to deploy to GitHub Pages using GitHub Actions.

## Prerequisites

1. **GitHub Repository Settings:**
   - Go to Settings → Pages
   - Source: Select "GitHub Actions"
   - Save the settings

2. **GitHub Actions Variable (IMPORTANT - Use Variables, NOT Secrets):**
   - Go to Settings → Secrets and variables → Actions
   - Click on "Variables" tab (NOT "Secrets" tab)
   - Click "New repository variable"
   - Name: `CUSTOM_DOMAIN`
   - Value: `true` (if you want to use a custom domain) or `false`/leave empty
   - Click "Add variable"
   
   **⚠️ Important**: This MUST be set as a **Variable**, not a **Secret**. The workflow uses `vars.CUSTOM_DOMAIN`, not `secrets.CUSTOM_DOMAIN`.

## Custom Domain Setup

If you want to use a custom domain:

1. **Create CNAME file:**
   - Create a file named `CNAME` in the repository root
   - Add your domain name: `lisufoundationbd.org`
   - Commit and push the file

2. **DNS Configuration:**
   - Add a CNAME record in your DNS settings pointing to: `gits5213.github.io`
   - Or add A records pointing to GitHub Pages IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

3. **GitHub Pages Settings:**
   - Go to Settings → Pages
   - Under "Custom domain", enter: `lisufoundationbd.org`
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

### 404 Errors After Deployment

**If using Custom Domain (CUSTOM_DOMAIN=true):**
1. Ensure `CNAME` file exists in repository root with your domain
2. Verify GitHub Pages Settings → Custom domain is set correctly
3. Check DNS configuration points to GitHub Pages
4. Access site via your custom domain (not github.io subdomain)
5. The `404.html` file will redirect to `/en` automatically

**If NOT using Custom Domain:**
1. Set `CUSTOM_DOMAIN` variable to `false` or remove it
2. Access site at: `https://gits5213.github.io/lisufoundation/en`
3. All routes must include `/lisufoundation` prefix
4. The `404.html` file will redirect to `/lisufoundation/en` automatically
5. **Important**: All navigation links now use next-intl's Link component which automatically handles basePath

### Nothing Works After Deployment

If the entire site shows 404 errors:
1. **Check GitHub Actions workflow**: Ensure the build completed successfully
2. **Verify basePath**: Check that `CUSTOM_DOMAIN` variable matches your deployment type
3. **Check asset paths**: All assets should include `/lisufoundation` prefix if not using custom domain
4. **Clear browser cache**: Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
5. **Verify routing**: Ensure you're accessing the correct URL:
   - Custom domain: `https://lisufoundationbd.org/en`
   - Subdomain: `https://gits5213.github.io/lisufoundation/en`
6. **Check 404.html**: The file should be in `out/404.html` after build
7. **Check index.html**: The file should redirect to the correct locale path

### Images Not Showing

**For Custom Domain:**
- Images should work automatically with basePath=''
- Verify images are in `public/` directory
- Check browser console for 404 errors on image paths

**For GitHub Pages Subdomain:**
- Ensure CUSTOM_DOMAIN is set to `false`
- Images will be served from `/lisufoundation/logo.png` etc.
- Check that basePath is set to `/lisufoundation` in build output
