export default function PostCard({ influencer }) {
  return (
    <article>
      <h2>{influencer.bio}</h2>
      <h2>{influencer.isPrivate}</h2>
    </article>
  );
}
