import data from "../data";

// api/popular
export default function handler(req, res) {
  const { Popular } = data;
  if (Popular) {
    return res.status(200).json(Popular);
  } else {
    return res.status(404).json({ error: "Data not found" });
  }
}