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

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { groupId, questionCount } = body;
    
    const questionsDir = path.join(process.cwd(), 'questions');
    const filePath = path.join(questionsDir, groupId);
    const content = await fs.readFile(filePath, 'utf-8');
    
    const questions = parseQuestionsFromMarkdown(content);
    
    const shuffled = questions.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(questionCount, questions.length));
    
    selected.forEach(question => {
      question.explanation = "Esta questão faz parte do nosso quiz educativo!";
    });
    
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: `Quiz - ${groupId}`,
        questions: selected
      }),
    };
  } catch (error) {
    console.error("Erro ao obter quiz:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to get quiz", details: error.message }),
    };
  }
};
