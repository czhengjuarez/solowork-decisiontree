# Cloudflare Workers Deployment Guide

## Quick Overview

This project deploys to Cloudflare Workers using GitHub Actions. Every push to `main` automatically deploys your site.

---

## Setup Instructions

### 1. Get Your Cloudflare API Token

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **My Profile** → **API Tokens**
3. Click **Create Token**
4. Use the **Edit Cloudflare Workers** template
5. Configure:
   - **Permissions**: Account → Cloudflare Workers Scripts → Edit
   - **Account Resources**: Include → Your Account
   - **Zone Resources**: All zones (or specific zone)
6. Click **Continue to summary** → **Create Token**
7. **Copy the token** (you won't see it again!)

### 2. Add Token to GitHub

1. Go to your GitHub repo: `https://github.com/czhengjuarez/solowork-decisiontree`
2. Click **Settings** (top menu)
3. In the left sidebar: **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Fill in:
   - **Name**: `CLOUDFLARE_API_TOKEN`
   - **Secret**: Paste your Cloudflare API token
6. Click **Add secret**

### 3. Deploy

That's it! Your site will auto-deploy when you push to `main`.

---

## Deployment Methods

### Method 1: Automatic (GitHub Actions) ✅ Recommended

Every push to `main` triggers deployment:

```bash
git add .
git commit -m "Update site"
git push origin main
```

GitHub Actions will:
1. Install dependencies
2. Deploy to Cloudflare Workers
3. Your site goes live!

**Check deployment status**:
- Go to your repo → **Actions** tab
- See the deployment progress

### Method 2: Manual (Local Deploy)

If you want to deploy from your computer:

```bash
# Install dependencies (first time only)
npm install

# Deploy
npx wrangler deploy
```

You'll need to authenticate with Cloudflare the first time:
```bash
npx wrangler login
```

---

## Project Structure

```
DecisionTreeApp/
├── public/               # Your static files
│   ├── index.html       # Main HTML
│   ├── style.css        # Styles
│   └── script.js        # Decision tree logic
├── src/
│   └── index.js         # Worker script (serves static files)
├── .github/workflows/
│   └── deploy.yml       # Auto-deploy configuration
├── wrangler.toml        # Cloudflare Workers config
├── package.json         # Node dependencies
└── .gitignore           # Git ignore rules
```

---

## Configuration Files

### wrangler.toml

```toml
name = "solowork-decisiontree"
main = "src/index.js"
compatibility_date = "2024-01-01"

[site]
bucket = "./public"
```

**What it does**:
- `name`: Your worker name (appears in Cloudflare dashboard)
- `main`: Entry point for the worker
- `site.bucket`: Where static files are located

**To change worker name**:
Edit `name` in `wrangler.toml`, then commit and push.

### .github/workflows/deploy.yml

```yaml
name: Deploy to Cloudflare Workers

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm install
      - uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
```

**What it does**:
- Triggers on push to `main`
- Installs dependencies
- Deploys using your API token

---

## After Deployment

### Find Your URL

**Option 1: Check GitHub Actions**
1. Go to repo → **Actions** tab
2. Click the latest workflow run
3. Expand the **Deploy to Cloudflare Workers** step
4. Look for: `Published <your-worker-name>`
5. URL format: `https://solowork-decisiontree.<your-subdomain>.workers.dev`

**Option 2: Check Cloudflare Dashboard**
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click **Workers & Pages**
3. Find `solowork-decisiontree`
4. Click it to see the URL

### Custom Domain (Optional)

To use your own domain:

1. In Cloudflare Dashboard → **Workers & Pages**
2. Click your worker: `solowork-decisiontree`
3. Go to **Settings** → **Triggers**
4. Click **Add Custom Domain**
5. Enter: `solowork.yourdomain.com`
6. Click **Add Custom Domain**

Your site will be available at: `https://solowork.yourdomain.com`

---

## Troubleshooting

### Deployment fails with "Authentication error"

**Problem**: GitHub Actions can't access Cloudflare

**Solution**:
1. Verify `CLOUDFLARE_API_TOKEN` secret exists in GitHub
2. Check token has "Edit Cloudflare Workers" permission
3. Token might be expired - create a new one

### Deployment succeeds but site shows 404

**Problem**: Static files not being served

**Solution**:
1. Check `public/` folder contains `index.html`, `style.css`, `script.js`
2. Verify `wrangler.toml` has `bucket = "./public"`
3. Try manual deploy: `npx wrangler deploy`

### "Worker name already taken"

**Problem**: Worker name conflicts with existing worker

**Solution**:
1. Edit `wrangler.toml`
2. Change `name = "solowork-decisiontree"` to something unique
3. Commit and push

### GitHub Actions not running

**Problem**: Workflow not triggering

**Solution**:
1. Check `.github/workflows/deploy.yml` exists
2. Verify you pushed to `main` branch
3. Go to repo **Settings** → **Actions** → **General**
4. Ensure "Allow all actions" is enabled

---

## Making Changes

### Update Content

1. Edit files in `public/` folder:
   - `index.html` - Structure
   - `style.css` - Styling
   - `script.js` - Logic

2. Commit and push:
```bash
git add public/
git commit -m "Update content"
git push origin main
```

3. GitHub Actions will auto-deploy (takes ~1 minute)

### Update Worker Logic

1. Edit `src/index.js` if you need custom worker behavior
2. Commit and push
3. Auto-deploy happens

---

## Costs

**Cloudflare Workers Free Tier**:
- ✅ 100,000 requests/day
- ✅ Unlimited static file hosting
- ✅ Custom domains
- ✅ SSL/TLS included

For most personal projects, **free tier is plenty**.

Paid plan ($5/month):
- 10M requests/month
- More CPU time
- Additional features

---

## Security Notes

### API Token Security

- ✅ **DO**: Store token in GitHub Secrets
- ❌ **DON'T**: Commit token to code
- ❌ **DON'T**: Share token publicly
- ✅ **DO**: Use minimal permissions (Edit Workers only)
- ✅ **DO**: Rotate tokens periodically

### If Token Leaks

1. Go to Cloudflare Dashboard → **API Tokens**
2. Find the token
3. Click **⋯** → **Roll** (generates new token)
4. Update GitHub Secret with new token

---

## Advanced Configuration

### Custom Routes

Add to `wrangler.toml`:

```toml
routes = [
  { pattern = "solowork.example.com/*", zone_name = "example.com" }
]
```

### Environment Variables

Add to `wrangler.toml`:

```toml
[env.production]
vars = { ENVIRONMENT = "production" }

[env.staging]
vars = { ENVIRONMENT = "staging" }
```

Deploy to staging:
```bash
npx wrangler deploy --env staging
```

### Multiple Environments

Create `wrangler.production.toml`:
```toml
name = "solowork-decisiontree-prod"
# ... rest of config
```

Deploy:
```bash
npx wrangler deploy --config wrangler.production.toml
```

---

## Resources

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Wrangler Action](https://github.com/cloudflare/wrangler-action)

---

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Deploy manually
npx wrangler deploy

# Test locally
npx wrangler dev

# View logs
npx wrangler tail

# Check configuration
npx wrangler whoami

# Login to Cloudflare
npx wrangler login

# Delete worker
npx wrangler delete
```

---

## Need Help?

1. Check **Actions** tab in GitHub for deployment logs
2. Check Cloudflare Dashboard → **Workers & Pages** for worker status
3. Run `npx wrangler tail` to see live logs
4. Review this guide's troubleshooting section

---

**Your app is ready to deploy!** Just push to `main` and it'll go live automatically. 🚀
