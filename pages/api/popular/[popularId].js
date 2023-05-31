import data from "../data";

// api/popular/[id]
export default function handler(req, res) {
  const { popularId } = req.query;
  const { Popular } = data;

  if (popularId) {
    const post = Popular.find((value) => value.id == popularId);
    return res.status(200).json(post);
  }

  return res.status(404).json({ error: "Popular post not found" });
}
