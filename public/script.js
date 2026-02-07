// Decision Tree Data
const questions = [
  {
    id: 1,
    question: "What's the blast radius if this goes wrong?",
    options: [
      { text: "Affects only me", value: "solo", weight: 3 },
      { text: "Affects my team", value: "solo-review", weight: 2 },
      { text: "Affects product or customers", value: "collaborate", weight: 1 }
    ]
  },
  {
    id: 2,
    question: "Do I understand the system context?",
    options: [
      { text: "Yes, I've done similar work before", value: "solo", weight: 3 },
      { text: "Mostly, but some uncertainty", value: "solo-stuck", weight: 2 },
      { text: "No, this is new territory", value: "collaborate", weight: 1 }
    ]
  },
  {
    id: 3,
    question: "How complex is the logic?",
    options: [
      { text: "Simple, straightforward", value: "solo", weight: 3 },
      { text: "Moderate, some conditional behavior", value: "solo-review", weight: 2 },
      { text: "Complex, multiple states and edge cases", value: "collaborate", weight: 1 }
    ]
  },
  {
    id: 4,
    question: "Is this a learning exercise or production work?",
    options: [
      { text: "Learning for myself", value: "solo", weight: 3 },
      { text: "Prototype for discussion", value: "solo-findings", weight: 2 },
      { text: "Production code that ships", value: "collaborate", weight: 1 }
    ]
  },
  {
    id: 5,
    question: "What's the time constraint?",
    options: [
      { text: "Exploring at my own pace", value: "solo", weight: 3 },
      { text: "Need it working this week", value: "solo-stuck", weight: 2 },
      { text: "Needs to ship soon", value: "collaborate", weight: 1 }
    ]
  }
];

// Result definitions
const results = {
  solo: {
    icon: "SOLO",
    title: "Work Solo",
    description: "You can confidently work on this independently. The risk is low, you have the knowledge, and the complexity is manageable.",
    recommendation: "Go ahead and tackle this on your own. Trust your skills and experience."
  },
  "solo-review": {
    icon: "SOLO → REVIEW",
    title: "Solo with Review",
    description: "Start working independently, but get feedback before finalizing. This balances autonomy with risk mitigation.",
    recommendation: "Work on your own, then schedule a review session with a teammate before merging or shipping."
  },
  "solo-stuck": {
    icon: "SOLO → PAIR",
    title: "Start Solo, Pair if Stuck",
    description: "Begin independently to explore and learn, but don't hesitate to bring someone in if you hit blockers.",
    recommendation: "Give yourself a time-box (e.g., 2 hours). If you're stuck, reach out for help rather than spinning."
  },
  "solo-findings": {
    icon: "EXPLORE → DISCUSS",
    title: "Solo, Then Collaborate on Findings",
    description: "Do the exploratory work yourself, then present findings to the team for input before proceeding.",
    recommendation: "Document your learnings and options, then schedule time to discuss with the team."
  },
  collaborate: {
    icon: "COLLABORATE",
    title: "Collaborate Upfront",
    description: "The risk, complexity, or time constraints warrant working with others from the start. This prevents costly rework.",
    recommendation: "Set up a pairing session or design discussion before writing code. Involve stakeholders early."
  },
  mixed: {
    icon: "MIXED",
    title: "Mixed Signals - Consider Your Context",
    description: "Your answers suggest a mix of approaches. Consider which factors are most important for this specific task.",
    recommendation: "Start solo but schedule a checkpoint after making initial progress. Be ready to pivot to collaboration if needed."
  }
};

// State
let currentQuestionIndex = 0;
let answers = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  showScreen('welcomeScreen');
});

// Start the decision tree
function startDecisionTree() {
  currentQuestionIndex = 0;
  answers = [];
  showScreen('questionScreen');
  displayQuestion();
  updateProgress();
}

// Display current question
function displayQuestion() {
  const question = questions[currentQuestionIndex];
  
  document.getElementById('questionNumber').textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  document.getElementById('questionText').textContent = question.question;
  
  const optionsContainer = document.getElementById('optionsContainer');
  optionsContainer.innerHTML = '';
  
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option-btn';
    button.textContent = option.text;
    button.onclick = () => selectOption(option);
    
    // Add animation delay
    button.style.animationDelay = `${index * 0.1}s`;
    
    optionsContainer.appendChild(button);
  });
}

// Handle option selection
function selectOption(option) {
  // Save answer
  answers.push({
    question: questions[currentQuestionIndex].question,
    answer: option.text,
    value: option.value,
    weight: option.weight
  });
  
  // Move to next question or show results
  currentQuestionIndex++;
  
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
    updateProgress();
  } else {
    showResults();
  }
}

// Update progress bar
function updateProgress() {
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  document.getElementById('progressFill').style.width = `${progress}%`;
  document.getElementById('progressText').textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

// Calculate and show results
function showResults() {
  const result = calculateResult();
  
  document.getElementById('resultIcon').textContent = result.icon;
  document.getElementById('resultTitle').textContent = result.title;
  document.getElementById('resultDescription').innerHTML = `
    <p>${result.description}</p>
    <div class="recommendation">
      <strong>Recommendation:</strong> ${result.recommendation}
    </div>
  `;
  
  // Display answers summary
  const summaryContainer = document.getElementById('answersSummary');
  summaryContainer.innerHTML = answers.map((answer, index) => `
    <div class="answer-item">
      <div class="answer-question">Q${index + 1}: ${answer.question}</div>
      <div class="answer-text">${answer.answer}</div>
    </div>
  `).join('');
  
  showScreen('resultsScreen');
  updateProgress();
}

// Calculate result based on answers
function calculateResult() {
  // Count occurrences of each value
  const valueCounts = {};
  let totalWeight = 0;
  
  answers.forEach(answer => {
    const value = answer.value;
    const weight = answer.weight;
    
    if (!valueCounts[value]) {
      valueCounts[value] = { count: 0, weight: 0 };
    }
    valueCounts[value].count++;
    valueCounts[value].weight += weight;
    totalWeight += weight;
  });
  
  // Find the most common value
  let maxCount = 0;
  let resultKey = 'mixed';
  
  Object.keys(valueCounts).forEach(key => {
    if (valueCounts[key].count > maxCount) {
      maxCount = valueCounts[key].count;
      resultKey = key;
    }
  });
  
  // Calculate average weight
  const avgWeight = totalWeight / answers.length;
  
  // Determine result based on dominant answer pattern
  if (maxCount >= 3) {
    // Clear majority
    return results[resultKey] || results.mixed;
  } else if (avgWeight >= 2.5) {
    // High average weight suggests solo work
    return results.solo;
  } else if (avgWeight <= 1.5) {
    // Low average weight suggests collaboration
    return results.collaborate;
  } else {
    // Mixed signals
    return results.mixed;
  }
}

// Screen management
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
}

// Reset the tree
function resetTree() {
  currentQuestionIndex = 0;
  answers = [];
  document.getElementById('progressFill').style.width = '0%';
  document.getElementById('progressText').textContent = 'Question 1 of 5';
  showScreen('welcomeScreen');
}

// Export results
function exportResults() {
  const result = calculateResult();
  const timestamp = new Date().toLocaleString();
  
  let content = `Decision Framework: Solo vs. Collaborate\n`;
  content += `Generated: ${timestamp}\n`;
  content += `${'='.repeat(60)}\n\n`;
  
  content += `RESULT: ${result.title}\n`;
  content += `${'-'.repeat(60)}\n`;
  content += `${result.description}\n\n`;
  content += `Recommendation: ${result.recommendation}\n\n`;
  
  content += `${'='.repeat(60)}\n`;
  content += `YOUR ANSWERS:\n`;
  content += `${'='.repeat(60)}\n\n`;
  
  answers.forEach((answer, index) => {
    content += `Q${index + 1}: ${answer.question}\n`;
    content += `A: ${answer.answer}\n\n`;
  });
  
  content += `${'='.repeat(60)}\n`;
  content += `End of Report\n`;
  
  // Download as text file
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `decision-framework-${Date.now()}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}
