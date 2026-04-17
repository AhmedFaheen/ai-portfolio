export const resumeOwner = {
  name: "Nalgar Ahmed Faheen",
  title: "Generative AI Engineer | Data Scientist | AI/ML Engineer",
  location: "Bangalore, Karnataka, India",
  email: "ahmedfaheen546@gmail.com",
  phone: "+91 8660489196",
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://linkedin.com/"
};

export const resumeSummary = `
Generative AI, Data Science, and Machine Learning Engineer with hands-on project experience building NLP pipelines,
LLM-integrated applications, and end-to-end ML systems. Experienced in model development, time-series forecasting (LSTM),
feature engineering, and evaluation using Python, Pandas, NumPy, scikit-learn, and TensorFlow. Strong foundation in SQL,
Excel, and Power BI for data analysis and real-world dataset handling. Skilled in translating analytical insights into practical
AI-driven solutions.
`;

export const topSkills = [
  "Generative AI & LLMs",
  "NLP Pipelines & Text Vectorization",
  "Time-Series Forecasting (LSTM)",
  "Machine Learning & Deep Learning",
  "Power BI & Data Analytics",
  "Python, SQL, TensorFlow, scikit-learn"
];

export const achievements = [
  "Secured 2nd Prize in Final Year Project Exhibition for Short-Term Rainfall Prediction Using LSTM.",
  "Selected through campus placement for PySpiders Incubation Internship, Bangalore."
];

export const experienceTimeline = [
  {
    company: "PySpiders – Incubation Internship, Bangalore",
    role: "Data Analyst Intern (Trainee)",
    period: "Jun 2025 – Present",
    details: [
      "Performed data cleaning, analysis, and reporting using SQL, Excel, and Power BI on real-world datasets.",
      "Applied Python, Pandas, NumPy, EDA, Machine Learning, and NLP techniques.",
      "Implemented LLM-based workflows using prompt engineering and transformer models."
    ]
  },
  {
    company: "Golden Bird Education",
    role: "AI & Python Intern",
    period: "Feb 2025 – May 2025",
    details: [
      "Practiced Python programming and basic AI concepts.",
      "Applied introductory Machine Learning fundamentals to simple tasks and datasets."
    ]
  },
  {
    company: "VTU VRIF – Belagavi",
    role: "Entrepreneurship Intern",
    period: "Feb 2025 – May 2025",
    details: [
      "Participated in entrepreneurship and innovation programs under VTU VRIF.",
      "Assisted in idea validation, documentation, and project planning activities.",
      "Gained exposure to problem-solving, teamwork, and structured workflows."
    ]
  },
  {
    company: "Corizo",
    role: "AI Intern",
    period: "Nov 2023 – Jan 2024",
    details: [
      "Strengthened Python fundamentals through hands-on practice.",
      "Gained exposure to core AI and Machine Learning concepts."
    ]
  }
];

export const ragChunks: string[] = [
  resumeSummary,
  "Short-Term Rainfall Prediction Using LSTM: LSTM-based deep learning model for rainfall prediction with multivariate time-series, transfer learning, compared against ARIMA, evaluated with MAE, RMSE, and R².",
  "NLP Pipeline & Text Vectorization Dashboard: Streamlit app with BoW, TF-IDF, Word2Vec, and full NLP preprocessing using NLTK and spaCy.",
  "Indian Car Resale Price Prediction with AI Advisor: End-to-end ML pipeline with Linear Regression (R² ≈ 0.83) and local LLM (Ollama) for explainable AI.",
  "HR Analytics Report: Power BI dashboards over 100k+ HR records using Power Query and DAX.",
  "Internships: PySpiders Data Analyst Intern, Golden Bird Education AI & Python Intern, VTU VRIF Entrepreneurship Intern, Corizo AI Intern.",
  "Skills: Python, SQL, Pandas, NumPy, scikit-learn, TensorFlow, XGBoost, Power BI, Excel, HuggingFace Transformers, Google Gemini API, LangChain, RAG, PySpark, Databricks, Hadoop, AWS, Docker."
];

