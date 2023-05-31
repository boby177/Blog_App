const base_url = "http://localhost:3000";

export default async function getPost(id) {
  const res = await fetch(`${base_url}/api/posts`);
  const posts = await res.json();

  if (id) {
    return posts.find((value) => value.id == id);
  }

  return posts;
}
