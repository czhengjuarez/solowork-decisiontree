# Decision Framework: Solo vs. Collaborate

A self-contained, interactive web app to help you decide whether to work solo or collaborate on a task.

## 🎯 Purpose

This decision tree helps engineers and creators make better decisions about their work approach by asking 5 key questions:

1. **Blast Radius**: What's the impact if this goes wrong?
2. **System Context**: How well do you understand the system?
3. **Complexity**: How complex is the logic?
4. **Purpose**: Is this learning or production work?
5. **Time Constraint**: What's your timeline?

## ✨ Features

- **Interactive Decision Tree**: Answer 5 questions with visual feedback
- **Smart Results**: Algorithm weighs your answers to provide tailored recommendations
- **Progress Tracking**: See where you are in the decision process
- **Results Export**: Download your decision and answers as a text file
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Self-Contained**: Single HTML file with embedded CSS and JavaScript
- **No Dependencies**: No frameworks, no build process, no server needed

## 🚀 Quick Start

### Option 1: Open Directly

1. Double-click `index.html` to open in your browser
2. Start answering questions!

### Option 2: Local Server (Recommended)

```bash
# Using Python 3
cd DecisionTreeApp
python3 -m http.server 8000

# Then open: http://localhost:8000
```

### Option 3: VS Code Live Server

1. Open folder in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

## 📖 How to Use

1. **Start**: Click "Start Decision Tree" on the welcome screen
2. **Answer Questions**: Click your answer to each of the 5 questions
3. **View Results**: See your personalized recommendation
4. **Review Answers**: Check the summary of your responses
5. **Export** (optional): Download your decision as a text file
6. **Start Over**: Click "Start Over" to make another decision

## 🎨 Possible Results

The app can recommend one of these approaches:

### 🚀 Work Solo
You can confidently work independently. Low risk, good knowledge, manageable complexity.

### 👤➡️👥 Solo with Review
Start independently, but get feedback before finalizing. Balance autonomy with risk mitigation.

### 🤔➡️👥 Start Solo, Pair if Stuck
Begin independently, but bring someone in if you hit blockers. Time-boxed exploration.

### 🔬➡️👥 Solo, Then Collaborate on Findings
Do exploratory work yourself, then present findings to the team before proceeding.

### 👥 Collaborate Upfront
Work with others from the start. High risk, complexity, or time constraints warrant immediate collaboration.

### 🤷 Mixed Signals
Your answers suggest multiple approaches. Consider which factors matter most for this task.

## 🛠️ Customization

### Adding New Questions

Edit `script.js` and add to the `questions` array:

```javascript
{
  id: 6,
  question: "Your new question?",
  options: [
    { text: "Option 1", value: "solo", weight: 3 },
    { text: "Option 2", value: "collaborate", weight: 1 }
  ]
}
```

### Modifying Results

Edit the `results` object in `script.js`:

```javascript
results.yourNewResult = {
  icon: "🎯",
  title: "Your Result Title",
  description: "Description of this result...",
  recommendation: "What to do next..."
};
```

### Changing Colors

Edit `style.css` and modify the gradient colors:

```css
background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
```

## 📁 File Structure

```
DecisionTreeApp/
├── index.html          # Main HTML structure
├── style.css           # All styling
├── script.js           # Decision tree logic
└── README.md           # This file
```

## 🎓 Decision Logic

The app uses a weighted scoring system:

- **Weight 3**: Strong solo indicators
- **Weight 2**: Mixed indicators (solo with caveats)
- **Weight 1**: Strong collaboration indicators

Results are determined by:
1. **Majority rule**: If 3+ answers point to the same approach
2. **Average weight**: High average (2.5+) → Solo, Low average (1.5-) → Collaborate
3. **Fallback**: Mixed signals if no clear pattern

## 🌐 Browser Compatibility

Works in all modern browsers:
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

## 💡 Use Cases

- **Before Starting Work**: Should I tackle this alone or ask for help?
- **Team Discussions**: Facilitate conversations about work approaches
- **Onboarding**: Help new team members understand collaboration norms
- **Process Documentation**: Share decision-making framework with team
- **Reflection**: Evaluate past decisions and learn patterns

## 🔒 Privacy

- **100% Local**: All processing happens in your browser
- **No Tracking**: No analytics, no cookies, no data collection
- **No Server**: No data sent anywhere
- **Export Only**: Results only leave your computer if you export them

## 🚢 Deployment Options

### Cloudflare Workers (Recommended)

This project is configured to deploy to Cloudflare Workers automatically via GitHub Actions.

#### Setup:

1. **Get Cloudflare API Token**:
   - Go to Cloudflare Dashboard → My Profile → API Tokens
   - Create token with "Edit Cloudflare Workers" permissions
   - Copy the token

2. **Add to GitHub Secrets**:
   - Go to your repo → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `CLOUDFLARE_API_TOKEN`
   - Value: Paste your API token
   - Click "Add secret"

3. **Deploy**:
   - Push to `main` branch
   - GitHub Actions will automatically deploy
   - Your site will be live at: `https://solowork-decisiontree.<your-subdomain>.workers.dev`

#### Manual Deploy:

```bash
npm install
npx wrangler deploy
```

#### Project Structure:
```
DecisionTreeApp/
├── public/              # Static files (HTML, CSS, JS)
├── src/
│   └── index.js        # Worker script
├── wrangler.toml       # Cloudflare configuration
├── package.json        # Dependencies
└── .github/workflows/
    └── deploy.yml      # Auto-deploy configuration
```

### GitHub Pages
1. Create a GitHub repo
2. Upload these files
3. Enable GitHub Pages in settings
4. Access at: `https://username.github.io/repo-name/`

### Netlify/Vercel
1. Drag and drop the folder
2. Get instant deployment

### Internal Server
Just copy the files to any web server directory.

## 🤝 Contributing

Want to improve the decision tree?

1. Fork or copy the project
2. Make your changes
3. Test thoroughly
4. Share improvements!

### Ideas for Enhancement
- Add more questions
- Create different decision trees (e.g., "Architecture Decisions", "Debugging Strategy")
- Add data visualization of results
- Support multiple languages
- Add keyboard navigation
- Create shareable result links

## 📝 License

Free to use and modify for personal or commercial purposes.

## 🙏 Credits

Based on the "Solo vs. Collaborate" decision framework for engineering work.

## 📞 Support

For questions or issues:
1. Check the code comments
2. Review the decision logic in `script.js`
3. Test in different browsers

---

**Made with ❤️ for better decision-making**

Open `index.html` to get started!
