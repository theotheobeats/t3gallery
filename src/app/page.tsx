import { db } from " /server/db";

const mockUrls = [
  "https://utfs.io/f/dc1ce217-b5ac-4e2f-a68c-205e654a3fa4-1ff77d.png",
  "https://utfs.io/f/76c4dd97-db0d-402c-b499-770646f3ec76-5b1fz8.png",
  "https://utfs.io/f/27b4f166-aa45-43e1-904a-ca07534df9b8-sp3chf.png",
  "https://utfs.io/f/4ccc1518-5c02-49eb-9e9a-85a091ea8939-ezz29v.png"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
})) 

export default async function HomePage() {
  
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>
            {post.name}
          </div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + '-' + index} className="w-48">
            <img src={image.url}/>
          </div>
        ))}
      </div>

    </main>
  );
}
