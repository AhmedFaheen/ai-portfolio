export const RESUME_OWNER = {
  name: "Nalgar Ahmed Faheen",
  headline: "Generative AI Engineer | Data Scientist | AI/ML Engineer",
  location: "Bangalore, Karnataka, India",
  email: "ahmedfaheen546@gmail.com",
  phone: "+91 8660489196"
};

export const RESUME_LINKS = {
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "#",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "#"
};

export const RESUME_SUMMARY = `
Generative AI, Data Science, and Machine Learning Engineer with hands-on experience building NLP pipelines,
LLM-integrated applications, and end-to-end ML systems. Experienced in model development, time-series
forecasting (LSTM), feature engineering, and evaluation using Python, Pandas, NumPy, scikit-learn, and TensorFlow.
Strong foundation in SQL, Excel, and Power BI for data analysis and real-world dataset handling. Skilled in translating
analytical insights into practical AI-driven solutions.
`;

export const RESUME_SKILLS = {
  coreRoles: [
    "GenAI Engineer",
    "Data Scientist",
    "AI/ML Engineer",
    "Data Analyst"
  ],
  programming: ["Python", "SQL"],
  ml: [
    "Supervised Learning",
    "Unsupervised Learning",
    "Regression",
    "Classification",
    "Clustering",
    "Neural Networks (ANN, RNN, LSTM, GRU)"
  ],
  frameworks: ["scikit-learn", "XGBoost", "TensorFlow", "Keras"],
  genai: [
    "Google Gemini API",
    "HuggingFace Transformers",
    "Prompt Engineering",
    "LangChain",
    "Retrieval-Augmented Generation (RAG)"
  ],
  nlp: [
    "Tokenization",
    "Normalization",
    "Stemming",
    "Lemmatization",
    "NER",
    "POS Tagging",
    "BoW",
    "TF-IDF",
    "Word2Vec"
  ],
  analytics: ["Power BI", "Excel", "EDA"],
  bigData: ["PySpark", "Databricks", "Hadoop"],
  cloudDevOps: ["AWS (EC2, S3, RDS, IAM, VPC - Fundamentals)", "Docker"],
  tools: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "SDLC Fundamentals"]
};

export const RESUME_PROJECTS = [
  {
    id: "rainfall-lstm",
    title: "Short-Term Rainfall Prediction Using LSTM",
    problem:
      "Accurately predict short-term rainfall using multivariate meteorological time-series data to support planning and risk mitigation.",
    dataset:
      "Meteorological time-series data including rainfall, temperature, humidity, and sea-level pressure.",
    architecture:
      "Multivariate LSTM-based recurrent neural network with sequence generation and transfer learning across geographical grids; baseline ARIMA for comparison.",
    metrics: ["MAE", "RMSE", "R²"],
    technologies: ["Python", "Pandas", "NumPy", "TensorFlow", "Keras"],
    highlight: "Secured 2nd Prize in Final Year Project Exhibition."
  },
  {
    id: "nlp-dashboard",
    title: "NLP Pipeline & Text Vectorization Dashboard",
    problem:
      "Provide an interactive way to experiment with NLP preprocessing and text vectorization techniques for ML.",
    dataset:
      "User-provided text inputs representing real-world textual data and documents.",
    architecture:
      "Streamlit dashboard with modular NLP pipeline stages (NLTK + spaCy), feature extraction modules (BoW, TF-IDF, Word2Vec), and tab-based experimentation UI.",
    metrics: [
      "Comparative quality of embeddings",
      "Pipeline configurability",
      "User experimentation speed"
    ],
    technologies: [
      "Python",
      "Streamlit",
      "NLTK",
      "spaCy",
      "scikit-learn",
      "Gensim",
      "NumPy"
    ],
    highlight:
      "Simulates real-world NLP workflows with transparent preprocessing stages."
  },
  {
    id: "car-price-ai-advisor",
    title: "Indian Car Resale Price Prediction with AI Advisor",
    problem:
      "Estimate fair resale prices for Indian used cars and explain the predictions to end-users.",
    dataset:
      "Indian used-car dataset with features such as brand, model, year, mileage, fuel type, and transmission.",
    architecture:
      "End-to-end ML pipeline with preprocessing, feature engineering, Linear Regression model, Streamlit UI, and local LLM (Ollama) for explainable AI.",
    metrics: ["R² ≈ 0.83", "MAE", "RMSE"],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "Streamlit",
      "Ollama",
      "Pickle",
      "Git"
    ],
    highlight:
      "Combines predictive modeling with generative AI explanations via local LLM."
  },
  {
    id: "hr-analytics",
    title: "HR Analytics Report & Dashboard",
    problem:
      "Enable HR teams to understand salary trends, hiring patterns, and workforce demographics from large-scale data.",
    dataset:
      "HR dataset with 100k+ records containing employee, salary, hiring, and demographic information.",
    architecture:
      "Power BI data model with Power Query for cleaning, DAX measures, and interactive dashboards.",
    metrics: [
      "Coverage of key HR KPIs",
      "Dashboard usability",
      "Insight delivery speed"
    ],
    technologies: ["Power BI", "Power Query", "DAX", "Excel"],
    highlight:
      "Transforms raw HR data into actionable insights for decision-makers."
  }
];

export const RESUME_EXPERIENCE = [
  {
    company: "PySpiders – Incubation Internship, Bangalore",
    title: "Data Analyst Intern (Trainee)",
    period: "Jun 2025 – Present",
    focus: "Data Science & GenAI Focus",
    bullets: [
      "Performed data cleaning, analysis, and reporting using SQL, Excel, and Power BI on real-world datasets.",
      "Applied Python, Pandas, NumPy, EDA, Machine Learning, and NLP techniques to support data-driven insights.",
      "Implemented LLM-based workflows using prompt engineering and transformer models."
    ]
  },
  {
    company: "Golden Bird Education",
    title: "AI & Python Intern",
    period: "Feb 2025 – May 2025",
    bullets: [
      "Practiced Python programming and basic AI concepts.",
      "Applied introductory Machine Learning fundamentals to simple tasks and datasets."
    ]
  },
  {
    company: "VTU VRIF – Belagavi",
    title: "Entrepreneurship Intern",
    period: "Feb 2025 – May 2025",
    bullets: [
      "Participated in entrepreneurship and innovation programs under VTU VRIF.",
      "Assisted in idea validation, documentation, and project planning.",
      "Gained exposure to problem-solving, teamwork, and structured workflows."
    ]
  },
  {
    company: "Corizo",
    title: "AI Intern",
    period: "Nov 2023 – Jan 2024",
    bullets: [
      "Strengthened Python fundamentals through hands-on practice.",
      "Gained exposure to core AI and Machine Learning concepts."
    ]
  }
];

export const RESUME_ACHIEVEMENTS = [
  "Secured 2nd Prize in Final Year Project Exhibition for Short-Term Rainfall Prediction Using LSTM.",
  "Selected through campus placement for PySpiders Incubation Internship, Bangalore."
];

export const RESUME_RAG_CHUNKS: string[] = [
  RESUME_SUMMARY,
  "Short-Term Rainfall Prediction Using LSTM: LSTM-based deep learning model for rainfall prediction with multivariate time-series, transfer learning, compared against ARIMA, evaluated with MAE, RMSE, and R².",
  "NLP Pipeline & Text Vectorization Dashboard: Streamlit app with BoW, TF-IDF, Word2Vec, and full NLP preprocessing using NLTK and spaCy.",
  "Indian Car Resale Price Prediction with AI Advisor: End-to-end ML pipeline with Linear Regression (R² ≈ 0.83) and local LLM (Ollama) for explainable AI.",
  "HR Analytics Report: Power BI dashboards over 100k+ HR records using Power Query and DAX.",
  "Internships: PySpiders Data Analyst Intern (Data Science & GenAI), Golden Bird Education AI & Python Intern, VTU VRIF Entrepreneurship Intern, Corizo AI Intern.",
  "Skills: Python, SQL, Pandas, NumPy, scikit-learn, TensorFlow, XGBoost, Power BI, Excel, HuggingFace Transformers, Google Gemini API, LangChain, RAG, PySpark, Databricks, Hadoop, AWS, Docker."
];

