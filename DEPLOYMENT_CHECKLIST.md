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

### 3. Verify Assets Load Correctly
- ✅ Logo appears in header
- ✅ Logo appears in footer
- ✅ Favicon loads correctly
- ✅ Images load from root paths (not `/lisufoundation/`)

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

## Expected Workflow Output

When deployment succeeds with `CUSTOM_DOMAIN=true`, you should see:

```
Debug CUSTOM_DOMAIN variable
  CUSTOM_DOMAIN variable value: true
  ✅ Custom domain mode enabled

Handle Custom Domain
  Copying CNAME file to out directory
  CNAME file copied: lisufoundationbd.org
```
