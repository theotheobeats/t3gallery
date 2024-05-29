import { getMyImages } from " /server/queries";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 h-48 flex-col">
          <Image
            src={image.url}
            style={{ objectFit: 'contain' }}
            width={480}
            height={480}
            alt={image.name}
          />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedIn>
        <Images />
      </SignedIn>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in.
        </div>
      </SignedOut>
    </main>
  );
}
