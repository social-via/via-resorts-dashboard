# Via Resorts Dashboard - Vercel Deployment Guide

## 🚀 Quick Deployment Options

### Option 1: Vercel Web Interface (Recommended)

1. **Go to [vercel.com](https://vercel.com)** and sign in
2. **Click "New Project"**
3. **Import from Git** (if you have a GitHub repo) or **Upload Files**
4. **Upload the following files:**
   - `dashboard-preview.html` (main dashboard)
   - `index.html` (redirect page)
   - `vercel.json` (configuration)
   - `package-vercel.json` (rename to `package.json`)

### Option 2: Vercel CLI (If npm permissions are fixed)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name: via-resorts-dashboard
# - Directory: ./
```

### Option 3: GitHub Integration

1. **Push to GitHub repository**
2. **Connect to Vercel** via GitHub integration
3. **Auto-deploy** on every push

## 📁 Files to Deploy

```
via-resorts-dashboard/
├── dashboard-preview.html    # Main dashboard (554 lines)
├── index.html               # Redirect page
├── vercel.json              # Vercel configuration
├── package-vercel.json      # Package configuration
└── README.md                # Documentation
```

## ⚙️ Vercel Configuration

The `vercel.json` file includes:
- **Static file serving** for the HTML dashboard
- **Route configuration** for clean URLs
- **Cache headers** for optimal performance
- **Redirect rules** from root to dashboard

## 🌐 Expected URLs

After deployment, your dashboard will be available at:
- `https://via-resorts-dashboard.vercel.app/` (main URL)
- `https://via-resorts-dashboard.vercel.app/dashboard` (direct dashboard)
- `https://via-resorts-dashboard.vercel.app/dashboard-preview.html` (direct file)

## 🔧 Environment Variables (Future)

When you add API integrations, you'll need these environment variables in Vercel:

```
VITE_API_BASE_URL=https://your-api-domain.com/api
VITE_GOOGLE_ADS_CUSTOMER_ID=your_customer_id
VITE_GOOGLE_SHEETS_ID=your_sheets_id
```

## 📊 Dashboard Features

✅ **Executive Summary Bar** - Portfolio health, daily revenue, alerts, actions  
✅ **Interactive Tab Navigation** - SEO Intelligence, Website Performance, Ads Management, Action Queue  
✅ **Geographic Sub-tabs** - Bali and Kuta focus  
✅ **Responsive Design** - Works on desktop, tablet, mobile  
✅ **Real-time Timestamp** - Shows current date/time  
✅ **Complete Styling** - Professional gradient design  

## 🎯 Team Sharing

Once deployed, share the Vercel URL with your team:
- **Morning Briefings** - Daily dashboard reviews
- **Mobile Access** - Responsive design for on-the-go decisions
- **Real-time Updates** - Timestamp shows last refresh

## 🔄 Updates

To update the dashboard:
1. **Edit** `dashboard-preview.html`
2. **Redeploy** to Vercel
3. **Automatic updates** if using GitHub integration

## 📱 Mobile Optimization

The dashboard is fully responsive and optimized for:
- **Desktop** - Full feature set with multi-column layouts
- **Tablet** - Optimized grid layouts with touch-friendly interactions  
- **Mobile** - Single-column layout with collapsible sections

## 🎨 Customization

Easy to customize:
- **Colors** - Update CSS variables in the `<style>` section
- **Data** - Modify the HTML content for real data
- **Layout** - Adjust grid and flexbox properties
- **Branding** - Update logos, colors, and styling

## 🚀 Next Steps

1. **Deploy to Vercel** using one of the methods above
2. **Share URL** with your team
3. **Gather feedback** on layout and functionality
4. **Add real data** connections (Google Ads, Analytics, Sheets)
5. **Implement React version** for advanced features

---

**Ready to deploy!** 🎉
