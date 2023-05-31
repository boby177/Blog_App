const base_url = "https://b-techs.vercel.app/";

export default async function getPost(id) {
  const res = await fetch(`${base_url}/api/posts`);
  const posts = await res.json();

  if (id) {
    return posts.find((value) => value.id == id);
  }

  return posts;
}
