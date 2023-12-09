import type { Metadata } from "next";
import { docsNav } from "../../constants/constants";
import Link from "next/link";
import ArrowLongRight from "@/assets/extra/ArrowLongRight";
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const title = docsNav.find((doc) => doc.id === params.slug)?.title;
  return {
    title: title + " - Api Documentation ",
    icons: {
      icon: "fav.svg",
    },
  };
}

export default function RootLayout({
  params,
  children,
}: {
  params: { slug: string };
  children: React.ReactNode;
}) {
  const navIndex = docsNav.findIndex(
    (nav) => nav.id === params.slug.toLowerCase()
  );
  const nextPage =
    navIndex < docsNav.length - 1 ? docsNav[navIndex + 1].id : docsNav[0].id;
  return (
    <section>
      <div className="flex gap-5 pb-5 mb-5 overflow-auto scrollbar-hidden ">
        {docsNav.map(({ id, title, endpoint }) => (
          <Link
            key={id}
            className={`font-semibold h-fit w-fit shrink-0 border border-dark-0 ${
              params.slug === id.toLowerCase() ? "bg-dark-0 text-light-0 " : ""
            } p-2 px-5 rounded-full hover:bg-dark-0 hover:text-light-0 transall`}
            href={"/documentation/" + id}
          >
            {title}
          </Link>
        ))}
      </div>
      {children}
      <Link
        href={nextPage}
        className="grid justify-items-end mt-20 ml-auto hover:-mr-5 transall"
      >
        <ArrowLongRight className="w-40 text-dark-3 " />
        <span className="text-xs text-dark-3/80">Next</span>
      </Link>
    </section>
  );
}
