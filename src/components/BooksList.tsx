import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Book {
  name: string;
  date: string;
  picture: string;
  webpage: string;
  captionn: string;
}

const featuredBooks: Book[] = [
  {
    name: "Fashionwad Zindabad",
    date: "2020",
    picture: "/book1.jpeg",
    webpage: "https://www.amazon.com/dp/B08XYZ123",
    captionn:
      "A thought-provoking commentary on contemporary fashion culture and its impact on society.",
  },
  {
    name: "Phir Subah Hogi",
    date: "2019",
    picture: "/book2.jpeg",
    webpage: "https://www.amazon.com/dp/B08ABC456",
    captionn:
      "An inspiring collection of stories about hope, resilience, and the promise of a new dawn.",
  },
  {
    name: "Samkaleen Vishleshan",
    date: "2021",
    picture: "/book3.jpeg",
    webpage: "https://www.amazon.com/dp/B08DEF789",
    captionn:
      "A critical analysis of contemporary social and political issues.",
  },
];

function BooksList() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-yellow-400">Featured Books</h2>
        <Link href="/Books">
          <button className="bg-yellow-600 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200">
            View All Books
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredBooks.map((book, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="h-64 bg-gray-800 flex items-center justify-center">
              <Image
                src={book.picture}
                alt={book.name}
                width={200}
                height={250}
                className="object-contain max-h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{book.name}</h3>
              <p className="text-yellow-400 mb-3">{book.date}</p>
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {book.captionn}
              </p>
              <a
                href={book.webpage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-200"
              >
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BooksList;
