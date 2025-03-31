import { Metadata } from "next";

type Params = {
  params: {
    slug: string;
  };
};
const slugs = ["post1", "post2", "post3"];

export async function generateStaticParams() {
  return slugs.map((slug) => ({
    slug: slug,
  }));
}
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return { title: `Post: ${params.slug}` };
}
export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <h1>Slug: {params.slug}</h1>
    </>
  );
}
