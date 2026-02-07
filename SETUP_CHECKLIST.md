# Cloudflare Workers Deployment Checklist

## ✅ Setup Steps (Do Once)

### 1. Get Cloudflare API Token
- [ ] Go to: https://dash.cloudflare.com/profile/api-tokens
- [ ] Click **Create Token**
- [ ] Use **Edit Cloudflare Workers** template
- [ ] Copy the token (save it temporarily)

### 2. Add Token to GitHub
- [ ] Go to: https://github.com/czhengjuarez/solowork-decisiontree/settings/secrets/actions
- [ ] Click **New repository secret**
- [ ] Name: `CLOUDFLARE_API_TOKEN`
- [ ] Value: Paste your token
- [ ] Click **Add secret**

### 3. Trigger Deployment
- [ ] Go to: https://github.com/czhengjuarez/solowork-decisiontree/actions
- [ ] Click **Deploy to Cloudflare Workers** workflow
- [ ] Click **Run workflow** → **Run workflow**
- [ ] Wait for deployment to complete (~1 minute)

### 4. Find Your URL
- [ ] In the Actions tab, click the completed workflow run
- [ ] Look for the deployment URL in the logs
- [ ] Format: `https://solowork-decisiontree.<your-subdomain>.workers.dev`

---

## 🎯 Quick Links

| Resource | URL |
|----------|-----|
| GitHub Repo | https://github.com/czhengjuarez/solowork-decisiontree |
| GitHub Actions | https://github.com/czhengjuarez/solowork-decisiontree/actions |
| Cloudflare Dashboard | https://dash.cloudflare.com/workers |
| API Tokens | https://dash.cloudflare.com/profile/api-tokens |
| Repository Secrets | https://github.com/czhengjuarez/solowork-decisiontree/settings/secrets/actions |

---

## 📝 After Setup

Once configured, deployment is automatic:

```bash
# Make changes to your app
edit public/index.html

# Commit and push
git add .
git commit -m "Update app"
git push origin main

# Auto-deploys in ~1 minute
```

---

## 🔍 Verify Deployment

After setup completes:

1. **Check GitHub Actions**:
   - Green checkmark ✅ = Success
   - Red X ❌ = Failed (check logs)

2. **Check Cloudflare Dashboard**:
   - Go to Workers & Pages
   - Find `solowork-decisiontree`
   - Should show "Active"

3. **Test Your Site**:
   - Visit the worker URL
   - Should see your decision tree app

---

## 🚨 Troubleshooting

### Deployment fails with "401 Unauthorized"
- ❌ API token not added or incorrect
- ✅ Re-add `CLOUDFLARE_API_TOKEN` secret in GitHub

### Deployment succeeds but 404 on site
- ❌ Static files not in `public/` folder
- ✅ Check `public/index.html` exists

### GitHub Actions not running
- ❌ Actions might be disabled
- ✅ Go to Settings → Actions → General → Enable

---

## 📚 Documentation

- `DEPLOYMENT.md` - Full deployment guide
- `README.md` - Project overview
- `.github/workflows/deploy.yml` - Auto-deploy config
- `wrangler.toml` - Worker configuration

---

**Status**: Ready to deploy! Just complete the checklist above. 🚀
