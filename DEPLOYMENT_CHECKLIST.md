# Deployment Verification Checklist

## Pre-Deployment Checklist

✅ **GitHub Actions Variable Set**:
- [ ] Go to: Settings → Secrets and variables → Actions → **Variables** tab
- [ ] Verify `CUSTOM_DOMAIN` exists with value `true`
- [ ] NOT in Secrets tab (must be in Variables tab)

✅ **CNAME File**:
- [ ] File exists in repository root: `CNAME`
- [ ] Contains: `lisufoundationbd.org`
- [ ] No extra spaces or newlines

✅ **DNS Configuration**:
- [ ] A records added at domain registrar (4 IP addresses)
- [ ] DNS propagated (check with `dig lisufoundationbd.org`)
- [ ] GitHub Pages can verify DNS (Settings → Pages → Custom domain)

## During Deployment

1. **Check GitHub Actions Workflow**:
   - Go to: Actions tab → Latest workflow run
   - Look for "Debug CUSTOM_DOMAIN variable" step
   - Should show: `✅ Custom domain mode enabled`
   - Check "Handle Custom Domain" step runs
   - Verify CNAME file is copied to `out/CNAME`

2. **Verify Build Output**:
   - Check "Build with Next.js" step completes successfully
   - Verify `out` directory contains:
     - `CNAME` file with `lisufoundationbd.org`
     - `index.html` file (redirects to `/en`)
     - `404.html` file
     - All locale directories (`en/`, `bn/`)

## Post-Deployment Verification

### 1. Check GitHub Pages Settings
- Go to: Settings → Pages
- Custom domain should show: `lisufoundationbd.org`
- Status should be: ✅ Verified (green checkmark)
- HTTPS should be enabled (after DNS verification)

### 2. Test Website URLs

**Custom Domain (should work)**:
- ✅ `https://lisufoundationbd.org` → redirects to `/en`
- ✅ `https://lisufoundationbd.org/en` → English homepage
- ✅ `https://lisufoundationbd.org/bn` → Bengali homepage
- ✅ `https://lisufoundationbd.org/en/about` → About page
- ✅ All pages accessible without `/lisufoundation` prefix

**GitHub Pages Subdomain (should NOT be used)**:
- ❌ `https://gits5213.github.io/lisufoundation` → May not work correctly with custom domain

### 3. Verify Assets Load Correctly
- ✅ Logo appears in header
- ✅ Logo appears in footer
- ✅ Favicon loads correctly
- ✅ Images load from root paths (not `/lisufoundation/`)

### 4. Check Browser Console
- Open browser DevTools (F12)
- Check Console tab for errors
- Check Network tab for 404s
- All assets should load from root (`/lisulogo.png`, not `/lisufoundation/lisulogo.png`)

## Troubleshooting

### If Custom Domain Not Working:

1. **Check DNS**:
   ```bash
   dig lisufoundationbd.org +short
   # Should return GitHub IP addresses
   ```

2. **Check GitHub Pages Settings**:
   - Custom domain field should show `lisufoundationbd.org`
   - If showing error, wait for DNS propagation

3. **Check Workflow Logs**:
   - Look for "Debug CUSTOM_DOMAIN variable" step
   - Verify it shows `✅ Custom domain mode enabled`
   - If shows `ℹ️ Using GitHub Pages subdomain mode`, variable is not set correctly

4. **Verify CNAME File**:
   - Check workflow logs for "Handle Custom Domain" step
   - Should show: `CNAME file copied: lisufoundationbd.org`
   - Verify `out/CNAME` exists in artifact

### If Site Shows 404:

1. **Check basePath**:
   - With `CUSTOM_DOMAIN=true`, basePath should be empty (`''`)
   - Check `next.config.mjs` build output

2. **Check index.html**:
   - Should redirect to `/en` (not `/lisufoundation/en`)
   - Verify in workflow logs

3. **Check 404.html**:
   - Should handle custom domain paths correctly
   - Should redirect to `/en` for root access

## Expected Workflow Output

When deployment succeeds with `CUSTOM_DOMAIN=true`, you should see:

```
Debug CUSTOM_DOMAIN variable
  CUSTOM_DOMAIN variable value: true
  ✅ Custom domain mode enabled

Build with Next.js
  ✓ Compiled successfully
  ✓ Generating static pages (36/36)

Handle Custom Domain
  Copying CNAME file to out directory
  CNAME file copied: lisufoundationbd.org

Create index.html redirect
  🔧 Creating index.html redirect for custom domain (redirects to /en)
  ✅ index.html created
```

## Next Steps After Deployment

1. Wait for GitHub Pages to verify DNS (can take 5 minutes to 24 hours)
2. Once verified, enable "Enforce HTTPS" in Settings → Pages
3. Test all pages on custom domain
4. Update any external links to use `lisufoundationbd.org`
