import { Metadata } from "next";
import { getBookBySlug, allBooks } from "../../../data/books";
import BookPageClient from "./BookPageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return allBooks.map((book) => ({
    slug: book.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    return {
      title: "Book Not Found | Jyotindra Nath Prasad",
    };
  }

  return {
    title: `${book.title} | Jyotindra Nath Prasad`,
    description: book.description,
    openGraph: {
      title: book.title,
      description: book.description,
      images: [book.coverImage],
    },
  };
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  return <BookPageClient slug={slug} />;
}
