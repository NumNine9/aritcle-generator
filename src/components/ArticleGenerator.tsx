"use client";
import { useState } from "react";

export default function ArticleGenerator() {
  const [topic, setTopic] = useState("");
  const [article, setArticle] = useState("");
  const [loading, setLoading] = useState(false);

  const generateArticle = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/page/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic }),
      });

      const data = await response.json();
      setArticle(data.article);
    } finally {
      setLoading(false);
    }
    console.log(article);
  };

  return (
    <div>
      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter article topic"
      />
      <button onClick={generateArticle} disabled={loading}>
        {loading ? "Generating..." : "Generate"}
      </button>

      {article && (
        <div className="article-output">
          <h2>{topic}</h2>
          <p>{article}</p>
          <p>Reading time: ~3 minutes</p>
        </div>
      )}
    </div>
  );
}
