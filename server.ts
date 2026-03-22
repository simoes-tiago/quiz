import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs/promises";
import react from '@vitejs/plugin-react';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route to list available quiz groups
  app.get("/api/quiz-groups", async (req, res) => {
    try {
      const questionsDir = path.join(process.cwd(), 'questions');
      const files = await fs.readdir(questionsDir);
      
      const groups = [];
      for (const file of files) {
        const filePath = path.join(questionsDir, file);
        const stats = await fs.stat(filePath);
        if (stats.isFile()) {
          const content = await fs.readFile(filePath, 'utf-8');
          const lines = content.split('\n').filter(line => line.trim());
          const questionCount = lines.filter(line => line.match(/^\d+\./)).length;
          
          groups.push({
            id: file.replace(/\.[^/.]+$/, ""),
            filename: file,
            questionCount: questionCount
          });
        }
      }
      
      res.json(groups);
    } catch (error) {
      console.error("Error listing quiz groups:", error);
      res.status(500).json({ error: "Failed to list quiz groups" });
    }
  });

  // API Route to get quiz from file
  app.post("/api/get-quiz", async (req, res) => {
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
  });

  function parseQuestionsFromMarkdown(content: string) {
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

  // API Route for generating image (disabled for now)
  app.post("/api/generate-image", async (req, res) => {
    res.status(503).json({ error: "Image generation disabled" });
  });

  // Vite middleware for development
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
  });
  app.use(vite.middlewares);

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
