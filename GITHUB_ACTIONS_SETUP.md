# GitHub Actions Variables Setup Guide

## Setting Up CUSTOM_DOMAIN Variable

### Step-by-Step Instructions

1. **Go to your GitHub repository**: `https://github.com/gits5213/lisufoundation`

2. **Navigate to Settings**:
   - Click on "Settings" tab (top navigation)

3. **Go to Secrets and variables**:
   - In the left sidebar, click "Secrets and variables"
   - Then click "Actions"

4. **Add Variable (NOT Secret)**:
   - Click on the **"Variables"** tab (NOT "Secrets")
   - Click "New repository variable" button

5. **Configure the Variable**:
   - **Name**: `CUSTOM_DOMAIN`
   - **Value**: `true` (for custom domain) or `false` (for github.io subdomain)
   - Click "Add variable"

## Verification

After adding the variable, verify it's set correctly:

1. Go to: Settings → Secrets and variables → Actions → Variables tab
2. You should see `CUSTOM_DOMAIN` listed with value `true`
3. The workflow will use this variable during deployment

## How It Works

The workflow file (`.github/workflows/deploy.yml`) uses:
```yaml
env:
  CUSTOM_DOMAIN: ${{ vars.CUSTOM_DOMAIN }}
```

This means:
- `vars.CUSTOM_DOMAIN` reads from **Variables** tab
- `secrets.CUSTOM_DOMAIN` would read from **Secrets** tab (NOT what we need)

## Troubleshooting

### Variable Not Working?

1. **Check it's in Variables, not Secrets**:
   - Go to Settings → Secrets and variables → Actions
   - Check the **Variables** tab (not Secrets)
   - Ensure `CUSTOM_DOMAIN` exists there

2. **Check the value**:
   - Value should be exactly `true` (lowercase, no quotes)
   - Not `True`, `TRUE`, or `"true"`

3. **Check workflow syntax**:
   - The workflow uses `vars.CUSTOM_DOMAIN` (correct)
   - If you see `secrets.CUSTOM_DOMAIN`, that's wrong

4. **Verify in workflow run**:
   - Go to Actions tab
   - Click on latest workflow run
   - Check the "Build with Next.js" step
   - Look for environment variables - `CUSTOM_DOMAIN` should be `true`

## Common Mistakes

❌ **Wrong**: Adding as Secret instead of Variable
❌ **Wrong**: Value is `True` or `TRUE` (should be lowercase `true`)
❌ **Wrong**: Value has quotes: `"true"` (should be just `true`)
❌ **Wrong**: Variable name is different: `CUSTOM_DOMAIN_NAME` or `CUSTOMDOMAIN`

✅ **Correct**: Variable name: `CUSTOM_DOMAIN`, Value: `true`, Location: Variables tab
