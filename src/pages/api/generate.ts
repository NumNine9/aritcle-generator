import { createClient } from "@supabase/supabase-js";
import { HfInference } from "@huggingface/inference";
import { NextApiRequest, NextApiResponse } from "next";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const hf = new HfInference(process.env.HUGGINGFACE_TOKEN);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { topic } = req.body;

  try {
    // Generate article
    const response = await hf.summarization({
      model: "facebook/bart-large-cnn",
      inputs: `Write a comprehensive 600-word article about: ${topic}`,
      parameters: {
        max_length: 600,
        min_length: 500,
      },
    });
    console.log("res:-->", response);

    // Save to DB
    // const { data, error } = await supabase
    //   .from("articles")
    //   .insert([{ topic, content: response.summary_text }]);

    // res.status(200).json({ article: response.summary_text });
  } catch (error) {
    // res.status(500).json({ error: "Generation failed" });
    console.log(error);
  }
}
