"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getImagePath } from "../utils/paths";

interface Book {
  id: number;
  title: string;
  imageUrl: string;
  slug: string;
  amazonLink: string;
  year?: string;
  description?: string;
}

export const allBooks: Book[] = [
  {
    id: 1,
    title: "DAINANDINI: VICHAR PRAVAH (Hindi Edition)",
    imageUrl: "/dainadini.jpeg",
    slug: "dainandini-vichar-pravah",
    amazonLink: "https://amzn.in/d/6ElzAzU",
    year: "2 Nov, 2022",
    description:
      "This book has been written in the shape of a diary. The diary was written from the year 2013 to 2017. After relinquishing the office in 2013, the author is trying to adjust with a life of leizure. He is no more bustling with life. After being adept to hurly-burly of life, he has reached a halt in life.",
  },
  {
    id: 2,
    title: "DIARY:SAGA UNTOLD",
    imageUrl: "/diarysacauntold.jpeg",
    slug: "diary-saga-untold",
    amazonLink: "https://amzn.in/d/dD4wofr",
    year: "25 Oct, 2022",
    description:
      'This diary book registers my transfer to Chhattisgarh in the fag end of career as reporter. Little surprise that I had to pay for my conscientious rebellion at the "Hindustan Times", which culminated in exit from it. My aggressiveness continued in Chhattisgarh for some time and later I softened to adjust.',
  },
  {
    id: 3,
    title: "DIARY: ONE STORY MORE",
    imageUrl: "/diaryonestorymore.jpeg",
    slug: "diary-one-story-more",
    amazonLink: "https://amzn.in/d/fGB0Awq",
    year: "10 Sep, 2022",
    description:
      'I am present with second part of my autobiography entitled "Search Within". The first was "Yadon Ke Satrein". The third volume was entitled "My Date with Editors". While first volume revolved round my childhood to adolescence the third centred on my profession of journalism.',
  },
  {
    id: 4,
    title: "El Dorado",
    imageUrl: "/el-dorado.jpeg",
    slug: "el-dorado",
    amazonLink: "https://amzn.in/d/bAqPcXd",
    year: "10 Jul, 2022",
    description:
      'It is spiritual book containing 29 articles. It takes you to El Dorado, a land of gold. The book is virtually full of gems and jewelleries. Its one piece strikes upon your identity and surmises that you are "Shivoham". All worldly identities have been dismissed and self has been created to say "Aham".',
  },
  {
    id: 5,
    title: "Dainandini:Ghar-Baahar (Hindi Edition)",
    imageUrl: "/dalinadigharbahar.jpeg",
    slug: "dainandini-ghar-baahar",
    amazonLink: "https://amzn.in/d/70BfR3R",
    year: "23 May, 2022",
    description:
      "The book is in shape of a diary. It shows daily happenings in the life of a Press Reporter at the Hindustan Times who fearlessly performs his job. He is self-confident and has courage of conviction. He is depressed but shoulders the responsibility of his office and house. During reporting he catches weak.",
  },
  {
    id: 6,
    title: "Shabdashah (Hindi Edition)",
    imageUrl: "/shabdash.jpeg",
    slug: "shabdashah",
    amazonLink: "https://amzn.in/d/ebpXZNm",
    year: "19 May, 2022",
    description:
      'The title of this book "Shabdshah" means word by word. Letters are "Brahma(God)" and words are not perished. The words are immortal and every word spoken so far is believed to be echoing in th e universe, So I introduce you with Brahma. It is in literary form, Literature is a penance, in which writers.',
  },
  {
    id: 7,
    title: "DIARY:GOSSIP SWEET AND SOUR",
    imageUrl: "/diaygossip-sweet-and-sour.jpeg",
    slug: "diary-gossip-sweet-and-sour",
    amazonLink: "https://www.amazon.in/gp/product/B0B18B63X7",
    year: "12 May, 2022",
    description:
      "This book is in the form of a diary. It unfolds the lives of certain politicians, officials, journalists, managers, celebrities and women with whom this reporter interacted. He is influenced with them and in turn influences them. The author feels that he came in contact with so small a group.",
  },
  {
    id: 8,
    title: "DIARY OF A PRESS REPORTER",
    imageUrl: "/diaryofapressreporter.jpeg",
    slug: "diary-of-a-press-reporter",
    amazonLink: "https://amzn.in/d/1qbAkat",
    year: "19 Mar, 2022",
    description:
      'Jyotindra Nath Prasad is the author of this book "Diary of a Press Reporter". He is a senior free-lance journalist based in Patna and author of nine books. This new book "Diary of a Press Reporter" as is evident from the title is the day-to-day chronicle of the happenings in the career of.',
  },
  {
    id: 9,
    title: "SEARCH WITHIN",
    imageUrl: "/03.jpeg",
    slug: "search-within",
    amazonLink: "https://amzn.in/d/aVT64Y7",
    year: "4 Mar, 2022",
    description:
      'I am present with second part of my autobiography entitled "Search Within". The first was "Yadon Ke Satrein". The third volume was entitled "My Date with Editors". While first volume revolved round my childhood to adolescence the third centred on my profession of journalism. The second pa.',
  },
  {
    id: 10,
    title: "UNTO THE BYZANTINE",
    imageUrl: "/untothebyzantine.jpeg",
    slug: "unto-the-byzantine",
    amazonLink: "https://amzn.in/d/hilKUpl",
    year: "25 Feb, 2022",
    description:
      'The title of the book "Unto The Byzantine" signifies a land of felicity. Symbolically it is a dream land. I have taken the readers to a new place where there is bliss, hope, love, equality and human values. It is a collection of 22 articles on different subjects. My blogs on social media.',
  },
  {
    id: 11,
    title: "Diary:Journey Of The Self",
    imageUrl: "/journeyoftheself.jpeg",
    slug: "diary-journey-of-the-self",
    amazonLink: "https://amzn.in/d/4LEa4cC",
    year: "2012",
    description:
      'This book "Diary: Journey Of The Self" is to the self and through the self. The author bares his soul. The book realms in spiritualism. The author guides to live a spiritual life instead of worldly. Thus, stress is on being human and not beastly.',
  },
  {
    id: 12,
    title: 'Yaadon Ke Satrein (Jyotindra Nath Prasad"s books Book 5)',
    imageUrl: "/yadokesantre.jpeg",
    slug: "yaadon-ke-satrein",
    amazonLink: "https://amzn.in/d/7xcjR1q",
    year: "2011",
    description:
      'This book is second part of the author"s autobiography. First part "My Date With Editors" realmed in his journalistic career. Published by the Educreation Publishing as debut book, it received good response from the readers including colleagues, friends, relatives and, of course, editors.',
  },
  {
    id: 13,
    title: "Fashionwad Zindabad",
    imageUrl: "/01.jpeg",
    slug: "fashionwad-zindabad",
    amazonLink:
      "https://www.amazon.in/gp/product/B07VR1Y515/ref=dbs_a_def_rwt_hsch_vapi_taft_p2_i3",
    year: "2010",
    description:
      "The book is a collection of 21 satirical essays. Most of it was written in my youth when I was working for a local newspaper The Searchlight (now defunct). Time has changed since then but the customs, circumstances and problems remain the same. Qualitative life has taken a low ebb and there is degeneration.",
  },
  {
    id: 14,
    title: "Phir Subah Hogi (Hindi Edition)",
    imageUrl: "/02.jpeg",
    slug: "phir-subah-hogi",
    amazonLink: "https://amzn.in/d/1ZnBfRf",
    year: "2009",
    description:
      'This book is entitled "Phir Subah Hogi". It is a collection of seven stories. As the title signifies it ensures the readers that good days would dawn on them. It shows hopes amidst despair. The book encapsulates varied emotions from negative to positive and lifts the subdued mood. When there is deterioration.',
  },
  {
    id: 15,
    title: "Prasang (Hindi Edition)",
    imageUrl: "/prasang.jpeg",
    slug: "prasang",
    amazonLink: "https://amzn.in/d/ijhEz4N",
    year: "2008",
    description:
      "My book enlightens you with new insight into the problems plaguing India and the world and tries to resolve them. It is a collection of 42 articles dwelling on different aspects of life. From politics to social and to economy I have discussed the genesis of the issues threadbare and have chalked out programmes.",
  },
  {
    id: 16,
    title: "Raag-Viraag (Hindi Edition)",
    imageUrl: "/raag-virag.jpeg",
    slug: "raag-viraag",
    amazonLink:
      "https://www.amazon.in/gp/product/B08H19FG3N/ref=dbs_a_def_rwt_hsch_vapi_taft_p2_i0",
    year: "2007",
    description:
      "My poetry book Raag-Viraag at once strikes a rapport with readers who identify themselves with all emotions pain-pleasure, hopes-despair and joy-sorrow, which result from ups and downs of life. The title of the book itself signifies attachment and detachment. When one is hilarious with life it is attachment.",
  },
  {
    id: 17,
    title: "My Date With Editors",
    imageUrl: "/thedaywitheditors.jpeg",
    slug: "my-date-with-editors",
    amazonLink: "https://amzn.in/d/6zel8zW",
    year: "2006",
    description:
      "The book is my professional autobiography. It unfolds a saga of 40 years of my journey in journalism in India covering Delhi, Bihar and Chattisgarh states. Mine has been chequered career. No godfather, no caretaker. With self help I proceeded in life. At times I have faced the worst and the best also.",
  },
];

export default function FeaturedBooks() {
  const [showAllBooks, setShowAllBooks] = useState(false);
  const displayedBooks = showAllBooks ? allBooks : allBooks.slice(0, 8);

  return (
    <section id="books-section" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Books
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my complete collection of books spanning various genres and
            topics
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {displayedBooks.map((book) => (
            <div key={book.id} className="group">
              <div className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl">
                <Link href={`/book/${book.slug}`}>
                  <div className="relative h-full w-full">
                    <Image
                      src={getImagePath(book.imageUrl)}
                      alt={book.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <span className="text-sm font-medium">
                          View Details
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                {book.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {book.year}
              </p>
              <div className="flex space-x-2">
                <Link href={`/book/${book.slug}`}>
                  <button className="px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white text-sm rounded font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                    Details
                  </button>
                </Link>
                <a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-3 py-2 bg-yellow-600 dark:bg-yellow-500 text-white dark:text-black text-sm rounded font-medium hover:bg-yellow-700 dark:hover:bg-yellow-400 transition-colors flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"></path>
                      <path
                        fillRule="evenodd"
                        d="M10 4a1 1 0 011 1v4.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 9.586V5a1 1 0 011-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Buy Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {!showAllBooks && allBooks.length > 8 && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setShowAllBooks(true)}
              className="px-10 py-4 bg-yellow-600 dark:bg-yellow-500 text-white dark:text-black text-lg rounded-lg font-semibold hover:bg-yellow-700 dark:hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl"
            >
              See All Books ({allBooks.length - 8} More)
            </button>
          </div>
        )}

        {showAllBooks && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setShowAllBooks(false)}
              className="px-10 py-4 border-2 border-yellow-600 dark:border-yellow-500 text-yellow-600 dark:text-yellow-400 text-lg rounded-lg font-semibold hover:bg-yellow-600 hover:text-white dark:hover:bg-yellow-500 dark:hover:text-black transition-colors shadow-lg hover:shadow-xl"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
