import data from "../data";

// api/trending/[id]
export default function handler(req, res) {
  const { trendingId } = req.query;
  const { Trending } = data;

  if (trendingId) {
    const post = Trending.find((value) => value.id == trendingId);
    return res.status(200).json(post);
  }

  return res.status(404).json({ error: "Trending post not found" });
}
