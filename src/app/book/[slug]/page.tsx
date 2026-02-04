import { Metadata } from "next";
import { getBookBySlug, allBooks } from "../../../data/books";
import BookPageClient from "./BookPageClient";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return allBooks.map((book) => ({
    slug: book.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const book = getBookBySlug(params.slug);

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

export default function BookPage({ params }: Props) {
  return <BookPageClient slug={params.slug} />;
}
