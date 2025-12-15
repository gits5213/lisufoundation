# Custom Domain Setup Guide for GitHub Pages

## Current Configuration

- **Domain**: `lisufoundationbd.org`
- **GitHub Actions Variable**: `CUSTOM_DOMAIN=true`

## DNS Configuration Required

For GitHub Pages to recognize your custom domain, you need to configure DNS records with your domain registrar.

### Option 1: Apex Domain (Recommended for GitHub Pages)

Add these **A records** in your DNS settings:

```
Type: A
Name: @ (or lisufoundationbd.org)
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @ (or lisufoundationbd.org)
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @ (or lisufoundationbd.org)
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @ (or lisufoundationbd.org)
Value: 185.199.111.153
TTL: 3600
```

### Option 2: CNAME (Alternative)

If your registrar doesn't support A records for apex domains, use CNAME:

```
Type: CNAME
Name: @ (or lisufoundationbd.org)
Value: gits5213.github.io
TTL: 3600
```

**Note**: Some registrars don't allow CNAME for apex domains. In that case, use Option 1 (A records).

### For www Subdomain (Optional)

If you want `www.lisufoundationbd.org` to work:

```
Type: CNAME
Name: www
Value: gits5213.github.io
TTL: 3600
```

## Steps to Configure DNS

1. **Log in to your domain registrar** (where you purchased `lisufoundationbd.org`)

2. **Navigate to DNS Management** (usually under "DNS Settings", "Domain Management", or "Advanced DNS")

3. **Add the A records** listed above (Option 1) or CNAME (Option 2)

4. **Wait for DNS propagation** (can take 24-48 hours, but usually faster)

5. **Verify DNS propagation** using:
   ```bash
   dig lisufoundationbd.org +short
   # Should return the GitHub IP addresses
   ```

## GitHub Pages Configuration

1. **Go to your GitHub repository**: `gits5213/lisufoundation`

2. **Navigate to**: Settings → Pages

3. **Under "Custom domain"**, enter: `lisufoundationbd.org`

4. **Check "Enforce HTTPS"** (after DNS propagates)

5. **Save**

## CNAME File

The deployment workflow automatically creates/updates the `CNAME` file in the `out` directory when `CUSTOM_DOMAIN=true`.

The file should contain:
```
lisufoundationbd.org
```

## Verification Steps

1. **Check DNS propagation**:
   ```bash
   nslookup lisufoundationbd.org
   # or
   dig lisufoundationbd.org
   ```

2. **Check GitHub Pages status**:
   - Go to repository Settings → Pages
   - Look for green checkmark next to custom domain

3. **Test the site**:
   - Visit `https://lisufoundationbd.org`
   - Should redirect to `https://lisufoundationbd.org/en`

## Common Issues

### "InvalidDNSError" or "DNS record could not be retrieved"

**Cause**: DNS records not properly configured or not propagated yet.

**Solutions**:
1. Verify DNS records are correct in your registrar
2. Wait 24-48 hours for full propagation
3. Use `dig` or `nslookup` to verify DNS resolution
4. Ensure you're using the correct GitHub Pages IP addresses

### Site loads but shows 404

**Cause**: CNAME file missing or incorrect basePath configuration.

**Solutions**:
1. Verify `CUSTOM_DOMAIN=true` in GitHub Actions variables
2. Check that workflow creates `out/CNAME` file
3. Verify `basePath` is empty when `CUSTOM_DOMAIN=true`

### HTTPS not working

**Cause**: DNS not fully propagated or GitHub Pages hasn't provisioned SSL yet.

**Solutions**:
1. Wait for DNS to fully propagate
2. Enable "Enforce HTTPS" in GitHub Pages settings
3. Wait for GitHub to provision SSL certificate (can take up to 24 hours)

## Testing Locally

To test with custom domain locally, you can add to `/etc/hosts`:

```
127.0.0.1 lisufoundationbd.org
```

Then access `http://lisufoundationbd.org:3000` (development) or build with `CUSTOM_DOMAIN=true`.

## Current GitHub Pages IP Addresses (2024)

GitHub Pages uses these IP addresses:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

**Important**: Always verify current IP addresses from GitHub Pages documentation as they may change.
