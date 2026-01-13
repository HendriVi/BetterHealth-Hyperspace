# Simple Guide: Getting Your Website on GitHub

## Step 1: Install GitHub Desktop (Easiest Way)

1. **Download GitHub Desktop:**
   - Go to: https://desktop.github.com/
   - Click "Download for Windows"
   - Install it (just click Next, Next, Install)

2. **Sign in to GitHub:**
   - Open GitHub Desktop
   - Sign in with your GitHub account (or create one at github.com if you don't have one)

## Step 2: Create a New Repository on GitHub

### Option A: Create on GitHub Website First (Recommended)

1. **Go to GitHub.com and sign in**

2. **Click the "+" icon** (top right) → **"New repository"**

3. **Fill in the form:**
   - **Repository name:** `betterhealth-website` (or any name you like)
   - **Description:** (optional) "BetterHealth website"
   - **Make it Public** (so GitHub Pages works for free)
   - **DO NOT** check "Initialize with README" (we already have files)
   - Click **"Create repository"**

4. **Copy the repository URL** (you'll see it on the next page, looks like: `https://github.com/yourusername/betterhealth-website`)

### Option B: Create in GitHub Desktop

1. Open GitHub Desktop
2. Click **"File"** → **"New repository"**
3. Fill in:
   - **Name:** `betterhealth-website`
   - **Local path:** (leave as default or choose a folder)
   - **Make it Public**
   - Click **"Create repository"**

## Step 3: Add Your Files to GitHub

### If you created the repository on GitHub website:

1. **In GitHub Desktop:**
   - Click **"File"** → **"Add Local Repository"**
   - Click **"Choose"** and navigate to: `C:\Users\H.Vieli\Downloads\BetterHealth-Hyperspace-Updated-With-Workflow`
   - Click **"Add repository"**

2. **Publish to GitHub:**
   - Click **"Publish repository"** button (top right)
   - Make sure it's **Public**
   - Click **"Publish repository"**

### If you created the repository in GitHub Desktop:

1. **Copy your files:**
   - Copy ALL files from: `C:\Users\H.Vieli\Downloads\BetterHealth-Hyperspace-Updated-With-Workflow`
   - Paste them into the repository folder (GitHub Desktop will show you the folder path)

2. **Commit your files:**
   - In GitHub Desktop, you'll see all your files listed
   - At the bottom, type a message like: "Initial website upload"
   - Click **"Commit to main"**

3. **Publish:**
   - Click **"Publish repository"** button
   - Make sure it's **Public**
   - Click **"Publish"**

## Step 4: Enable GitHub Pages

1. **On GitHub.com:**
   - Go to your repository page
   - Click **"Settings"** (top menu)
   - Scroll down to **"Pages"** (left sidebar)

2. **Configure Pages:**
   - Under **"Source"**, select: **"GitHub Actions"**
   - (The workflow file we created will handle the rest automatically!)

3. **Save and wait:**
   - GitHub will automatically deploy your site
   - This takes 1-2 minutes
   - You'll see a green checkmark when it's done

## Step 5: Find Your Website URL

1. **Go back to Settings → Pages**
2. **You'll see your website URL** at the top, like:
   ```
   https://yourusername.github.io/betterhealth-website/
   ```
3. **Click the link** to see your live website! 🎉

## Step 6: Making Updates (When You Change Files)

1. **Edit your files** (HTML, etc.) on your computer
2. **Open GitHub Desktop**
3. **You'll see your changes** listed
4. **Type a message** like "Updated homepage"
5. **Click "Commit to main"**
6. **Click "Push origin"** (top right)
7. **Wait 1-2 minutes** - GitHub will automatically update your website!

---

## Troubleshooting

**"GitHub Desktop won't let me publish"**
- Make sure you're signed in
- Make sure the repository name doesn't already exist on your account

**"GitHub Pages shows 404 error"**
- Wait a few minutes (deployment takes time)
- Check Settings → Pages → make sure "GitHub Actions" is selected
- Go to "Actions" tab to see if deployment is running

**"I can't find the Pages settings"**
- Make sure you're on the repository page (not your profile)
- Make sure the repository is Public (not Private)

**"The website doesn't update"**
- Make sure you clicked "Push origin" in GitHub Desktop
- Check the "Actions" tab to see if deployment is running
- Wait 1-2 minutes for changes to appear

---

## Quick Reference

- **Repository:** Where your code lives on GitHub
- **Commit:** Saving your changes
- **Push:** Uploading your changes to GitHub
- **GitHub Pages:** Free website hosting from GitHub
- **Actions:** Automatic deployment (happens in background)

---

**Need help?** The GitHub Desktop app has a "Help" menu with tutorials!
