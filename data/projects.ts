export const projects = [
  {
    id: "rainfall-lstm",
    name: "Short-Term Rainfall Prediction using LSTM",
    problem:
      "Predict short-term rainfall using multivariate meteorological time-series data to support planning and risk mitigation.",
    dataset:
      "Meteorological time-series data including rainfall, temperature, humidity, and sea-level pressure.",
    model:
      "Multivariate LSTM-based recurrent neural network with sequence generation and transfer learning across geographical grids; baseline ARIMA for comparison.",
    metrics: ["MAE", "RMSE", "R²"],
    technologies: ["Python", "Pandas", "NumPy", "TensorFlow", "Keras"],
    highlight: "Secured 2nd Prize in Final Year Project Exhibition."
  },
  {
    id: "nlp-dashboard",
    name: "NLP Pipeline Dashboard",
    problem:
      "Allow users to experiment with NLP preprocessing and text vectorization techniques interactively.",
    dataset:
      "User-provided text snippets simulating real-world documents and messages.",
    model:
      "Pipeline of NLP preprocessing (NLTK + spaCy) and feature extraction modules (BoW, TF-IDF, Word2Vec) exposed through a Streamlit dashboard.",
    metrics: [
      "Coverage of preprocessing steps",
      "Qualitative comparison of embeddings",
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
    ]
  },
  {
    id: "car-price-advisor",
    name: "Car Price Prediction AI Advisor",
    problem:
      "Estimate fair resale prices for Indian used cars and explain predictions to end-users.",
    dataset:
      "Indian used-car dataset with features such as brand, model, year, mileage, fuel type, and transmission.",
    model:
      "End-to-end regression pipeline with preprocessing, feature engineering, and Linear Regression; explainability via local LLM (Ollama).",
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
    ]
  },
  {
    id: "hr-analytics",
    name: "HR Analytics Dashboard",
    problem:
      "Transform a large HR dataset into dashboards for salary trends, hiring patterns, and workforce demographics.",
    dataset:
      "HR dataset with 100k+ employee records including salary, hiring, and demographic data.",
    model:
      "Power BI data model with Power Query for cleaning, DAX measures for KPIs, and interactive dashboards.",
    metrics: [
      "Coverage of HR KPIs",
      "Dashboard usability",
      "Insight delivery speed"
    ],
    technologies: ["Power BI", "Power Query", "DAX", "Excel"]
  }
];

export const rainfallExperiments = [
  { model: "ARIMA", rmse: "12.4", mae: "8.9" },
  { model: "LSTM (baseline)", rmse: "9.1", mae: "6.7" },
  { model: "LSTM (transfer learning)", rmse: "8.3", mae: "6.1" }
];

