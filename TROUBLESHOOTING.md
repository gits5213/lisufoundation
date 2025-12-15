# Troubleshooting Guide

## MODULE_NOT_FOUND Errors

If you encounter `MODULE_NOT_FOUND` errors or webpack chunk loading issues, follow these steps:

### Quick Fix (Recommended)
```bash
npm run dev:clean
```
This will clean cache and restart the dev server automatically.

### Manual Quick Fix
```bash
npm run clean
npm run dev
```

### Complete Clean (if quick fix doesn't work)
```bash
npm run clean:all
```

### Nuclear Option (Complete Reset)
```bash
npm run reset
```
This removes everything including node_modules and package-lock.json, then reinstalls.

### Manual Steps
1. Stop the development server (Ctrl+C)
2. Delete cache directories:
   ```bash
   rm -rf .next node_modules/.cache
   ```
3. Clear npm cache:
   ```bash
   npm cache clean --force
   ```
4. Reinstall dependencies (if needed):
   ```bash
   rm -rf node_modules
   npm install
   ```
5. Restart the development server:
   ```bash
   npm run dev
   ```

## Common Issues

### Webpack Runtime Errors
- **Cause**: Corrupted webpack chunks or cache
- **Solution**: Run `npm run clean` and restart dev server

### Module Resolution Errors
- **Cause**: Missing dependencies or incorrect imports
- **Solution**: Check imports and run `npm install`

### Build Errors
- **Cause**: TypeScript errors or missing types
- **Solution**: Run `npm run build` to see detailed error messages

## Prevention

1. Always stop the dev server properly (Ctrl+C) before closing terminal
2. Don't manually delete files in `.next` directory while server is running
3. Keep dependencies up to date: `npm update`
4. Use `npm run clean` before committing if you've had build issues
