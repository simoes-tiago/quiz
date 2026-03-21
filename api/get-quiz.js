const fs = require('fs').promises;
const path = require('path');

function parseQuestionsFromMarkdown(content) {
  const lines = content.split('\n');
  const questions = [];
  
  let currentQuestion = null;
  let questionId = 1;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Match question pattern: "123. Question text"
    const questionMatch = line.match(/^(\d+)\.\s*(.+)$/);
    if (questionMatch) {
      if (currentQuestion) {
        questions.push(currentQuestion);
      }
      
      currentQuestion = {
        id: `q${questionId++}`,
        text: questionMatch[2],
        options: [],
        correctAnswerIndex: -1,
        explanation: ""
      };
      continue;
    }
    
    // Match options: "A) Option text"
    const optionMatch = line.match(/^([A-D])\)\s*(.+)$/);
    if (optionMatch && currentQuestion) {
      currentQuestion.options.push(optionMatch[2]);
      continue;
    }
    
    // Match answer: "Resposta: B"
    const answerMatch = line.match(/^Resposta:\s*([A-D])$/);
    if (answerMatch && currentQuestion) {
      const answerIndex = answerMatch[1].charCodeAt(0) - 65; // A=0, B=1, C=2, D=3
      currentQuestion.correctAnswerIndex = answerIndex;
      continue;
    }
  }
  
  if (currentQuestion) {
    questions.push(currentQuestion);
  }
  
  return questions;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { groupId, questionCount } = req.body;
    
    const filePath = path.join(process.cwd(), 'questions', groupId);
    const content = await fs.readFile(filePath, 'utf-8');
    
    // Parse questions from markdown format
    const questions = parseQuestionsFromMarkdown(content);
    
    // Randomly select questions
    const shuffled = questions.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(questionCount, questions.length));
    
    // Add simple explanations without image prompts
    selected.forEach(question => {
      question.explanation = "Esta questão faz parte do nosso quiz educativo!";
    });
    
    res.json({
      title: `Quiz - ${groupId}`,
      questions: selected
    });
  } catch (error) {
    console.error("Error getting quiz:", error);
    res.status(500).json({ error: "Failed to get quiz" });
  }
};
