export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  imagePrompt: string;
}

export interface QuizData {
  title: string;
  questions: Question[];
}

export interface QuizGroup {
  id: string;
  filename: string;
  questionCount: number;
}

export async function getQuizGroups(): Promise<QuizGroup[]> {
  const response = await fetch("/api/quiz-groups");
  
  if (!response.ok) {
    throw new Error("Failed to fetch quiz groups");
  }
  
  return response.json();
}

export async function getQuiz(groupId: string, questionCount: number): Promise<QuizData> {
  const response = await fetch("/api/get-quiz", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ groupId, questionCount }),
  });
  
  if (!response.ok) {
    throw new Error("Failed to get quiz");
  }
  
  return response.json();
}
