"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Footer } from "../../../components/footer";
import { ThemeToggle } from "../../../components/ThemeToggle";

interface Book {
  id: number;
  title: string;
  imageUrl: string;
  slug: string;
  amazonLink: string;
  year?: string;
  description?: string;
}

const allBooks: Book[] = [
  {
    id: 1,
    title: "DAINANDINI: VICHAR PRAVAH (Hindi Edition)",
    imageUrl: "/book1.jpeg",
    slug: "dainandini-vichar-pravah",
    amazonLink: "https://amzn.in/d/6ElzAzU",
    year: "2 Nov, 2022",
    description:
      "This book has been written in the shape of a diary. The diary was written from the year 2013 to 2017. After relinquishing the office in 2013, the author is trying to adjust with a life of leizure. He is no more bustling with life. After being adept to hurly-burly of life, he has reached a halt in life.",
  },
  {
    id: 2,
    title: "DIARY:SAGA UNTOLD",
    imageUrl: "/book2.jpeg",
    slug: "diary-saga-untold",
    amazonLink: "https://amzn.in/d/dD4wofr",
    year: "25 Oct, 2022",
    description:
      "This diary book registers my transfer to Chhattisgarh in the fag end of career as reporter. Little surprise that I had to pay for my conscientious rebellion at the 'Hindustan Times', which culminated in exit from it. My aggressiveness continued in Chhattisgarh for some time and later I softened to adjust.",
  },
  {
    id: 3,
    title: "DIARY: ONE STORY MORE",
    imageUrl: "/book3.jpeg",
    slug: "diary-one-story-more",
    amazonLink: "https://amzn.in/d/fGB0Awq",
    year: "10 Sep, 2022",
    description:
      "This diary is fifth in a row being published by Amazon Kindle. It is the last diary chronicling events happening during my reporting at the 'Hindustan Times' in Patna from 2007 to 2012. It was written whenever I resorted to Fatuha, my native place, from hurly-burly of life in the state capital to find.",
  },
  {
    id: 4,
    title: "El Dorado",
    imageUrl: "/book4.jpeg",
    slug: "el-dorado",
    amazonLink: "https://amzn.in/d/bAqPcXd",
    year: "10 Jul, 2022",
    description:
      "It is spiritual book containing 29 articles. It takes you to El Dorado, a land of gold. The book is virtually full of gems and jewelleries. Its one piece strikes upon your identity and surmises that you are 'Shivoham'. All worldly identities have been dismissed and self has been created to say 'Aham.",
  },
  {
    id: 5,
    title: "Dainandini:Ghar-Baahar (Hindi Edition)",
    imageUrl: "/book5.jpeg",
    slug: "dainandini-ghar-baahar",
    amazonLink: "https://amzn.in/d/70BfR3R",
    year: "23 May, 2022",
    description:
      "The book is in shape of a diary. It shows daily happenings in the life of a Press Reporter at the Hindustan Times who fearlessly performs his job. He is self-confident and has courage of conviction. He is depressed but shoulders the responsibility of his office and house. During reporting he catches weak.",
  },
  {
    id: 6,
    title: "Shabdashah (Hindi Edition)",
    imageUrl: "/book6.jpeg",
    slug: "shabdashah",
    amazonLink: "https://amzn.in/d/ebpXZNm",
    year: "19 May, 2022",
    description:
      "The title of this book 'Shabdshah' means word by word. Letters are 'Brahma(God)' and words are not perished. The words are immortal and every word spoken so far is believed to be echoing in th e universe, So I introduce you with Brahma. It is in literary form, Literature is a penance, in which writers.",
  },
  {
    id: 7,
    title: "DIARY:GOSSIP SWEET AND SOUR",
    imageUrl: "/book7.jpeg",
    slug: "diary-gossip-sweet-and-sour",
    amazonLink: "https://www.amazon.in/gp/product/B0B18B63X7",
    year: "12 May, 2022",
    description:
      "This book is in the form of a diary. It unfolds the lives of certain politicians, officials, journalists, managers, celebrities and women with whom this reporter interacted. He is influenced with them and in turn influences them. The author feels that he came in contact with so small a group.",
  },
  {
    id: 8,
    title: "DIARY OF A PRESS REPORTER",
    imageUrl: "/book8.jpeg",
    slug: "diary-of-a-press-reporter",
    amazonLink: "https://amzn.in/d/1qbAkat",
    year: "19 Mar, 2022",
    description:
      "Jyotindra Nath Prasad is the author of this book 'Diary of a Press Reporter'. He is a senior free-lance journalist based in Patna and author of nine books. This new book 'Diary of a Press Reporter' as is evident from the title is the day-to-day chronicle of the happenings in the career of.",
  },
  {
    id: 9,
    title: "SEARCH WITHIN",
    imageUrl: "/book9.jpeg",
    slug: "search-within",
    amazonLink: "https://amzn.in/d/aVT64Y7",
    year: "4 Mar, 2022",
    description:
      "I am present with second part of my autobiography entitled 'Search Within'. The first was 'Yadon Ke Satrein'. The third volume was entitled 'My Date with Editors'. While first volume revolved round my childhood to adolescence the third centred on my profession of journalism. The second pa.",
  },
  {
    id: 10,
    title: "UNTO THE BYZANTINE",
    imageUrl: "/book10.jpeg",
    slug: "unto-the-byzantine",
    amazonLink: "https://amzn.in/d/hilKUpl",
    year: "25 Feb, 2022",
    description:
      "The title of the book 'Unto The Byzantine' signifies a land of felicity. Symbolically it is a dream land. I have taken the readers to a new place where there is bliss, hope, love, equality and human values. It is a collection of 22 articles on different subjects. My blogs on social media.",
  },
  {
    id: 11,
    title: "Diary:Journey Of The Self",
    imageUrl: "/book11.jpeg",
    slug: "diary-journey-of-the-self",
    amazonLink: "https://amzn.in/d/4LEa4cC",
    year: "14 Feb, 2022",
    description:
      "This book 'Diary: Journey Of The Self' is to the self and through the self. The author bares his soul. The book realms in spiritualism. The author guides to live a spiritual life instead of worldly. Thus, stress is on being human and not beastly.",
  },
  {
    id: 12,
    title: "Yaadon Ke Satrein (Jyotindra Nath Prasad's books Book 5)",
    imageUrl: "/book12.jpeg",
    slug: "yaadon-ke-satrein",
    amazonLink: "https://amzn.in/d/7xcjR1q",
    year: "30 Aug, 2020",
    description:
      "This book is second part of the author's autobiography. First part 'My Date With Editors' realmed in his journalistic career. Published by the Educreation Publishing as debut book, it received good response from the readers including colleagues, friends, relatives and, of course, editors.",
  },
  {
    id: 13,
    title: "Fashionwad Zindabad",
    imageUrl: "/book13.jpeg",
    slug: "fashionwad-zindabad",
    amazonLink:
      "https://www.amazon.in/gp/product/B07VR1Y515/ref=dbs_a_def_rwt_hsch_vapi_taft_p2_i3",
    year: "25 Jul, 2019",
    description:
      "The book is a collection of 21 satirical essays. Most of it was written in my youth when I was working for a local newspaper The Searchlight (now defunct). Time has changed since then but the customs, circumstances and problems remain the same. Qualitative life has taken a low ebb and there is degeneration.",
  },
  {
    id: 14,
    title: "Phir  Subah Hogi (Hindi Edition)",
    imageUrl: "/book14.jpeg",
    slug: "fir-subah-hogi",
    amazonLink: "https://amzn.in/d/1ZnBfRf",
    year: "24 Dec, 2019",
    description:
      "This book is entitled 'Phir Subah Hogi'. It is a collection of seven stories. As the title signifies it ensures the readers that good days would dawn on them. It shows hopes amidst despair. The book encapsulates varied emotions from negative to positive and lifts the subdued mood. When there is deterioration.",
  },
  {
    id: 15,
    title: "Prasang (Hindi Edition)",
    imageUrl: "/book15.jpeg",
    slug: "prasang",
    amazonLink: "https://amzn.in/d/ijhEz4N",
    year: "28 Aug, 2020",
    description:
      "My book enlightens you with new insight into the problems plaguing India and the world and tries to resolve them. It is a collection of 42 articles dwelling on different aspects of life. From politics to social and to economy I have discussed the genesis of the issues threadbare and have chalked out programmes.",
  },
  {
    id: 16,
    title: "Raag-Viraag (Hindi Edition)",
    imageUrl: "/book16.jpeg",
    slug: "raag-viraag",
    amazonLink:
      "https://www.amazon.in/gp/product/B08H19FG3N/ref=dbs_a_def_rwt_hsch_vapi_taft_p2_i0",
    year: "29 Aug, 2020",
    description:
      "My poetry book Raag-Viraag at once strikes a rapport with readers who identify themselves with all emotions pain-pleasure, hopes-despair and joy-sorrow, which result from ups and downs of life. The title of the book itself signifies attachment and detachment. When one is hilarious with life it is attachment.",
  },
  {
    id: 17,
    title: "My Date With Editors",
    imageUrl: "/book17.jpeg",
    slug: "my-date-with-editors",
    amazonLink: "https://amzn.in/d/6zel8zW",
    year: "4 June 2019",
    description:
      "The book is my professional autobiography. It unfolds a saga of 40 years of my journey in journalism in India covering Delhi, Bihar and Chattisgarh states. Mine has been chequered career. No godfather, no caretaker. With self help I proceeded in life. At times I have faced the worst and the best also.",
  },
];

export default function BookPage() {
  const { slug } = useParams();
  const book = allBooks.find((book) => book.slug === slug);

  if (!book) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
        <nav className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white cursor-pointer">
                Jyotindra Nath Prasad
              </h1>
            </Link>
            <div className="flex items-center space-x-6">
              <ThemeToggle />
            </div>
          </div>
        </nav>
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Book not found
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              The book you are looking for does not exist or has been removed.
            </p>
            <Link href="/">
              <button className="px-6 py-3 bg-yellow-600 dark:bg-yellow-500 text-white dark:text-black rounded-lg font-semibold hover:bg-yellow-700 dark:hover:bg-yellow-400 transition-colors">
                Return Home
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Navigation */}
      <nav className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white cursor-pointer">
              Jyotindra Nath Prasad
            </h1>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/About"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/Contact"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              Contact
            </Link>
            <ThemeToggle />
          </div>

          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Book Content */}
      <div className="flex-grow bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Book Image */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative aspect-[2/3] w-full max-w-[300px] shadow-xl rounded-lg overflow-hidden">
                <Image
                  src={book.imageUrl}
                  alt={book.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Book Details */}
            <div className="w-full md:w-2/3">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                {book.title}
              </h1>
              <div className="flex items-center mb-6">
                <span className="text-yellow-600 dark:text-yellow-400 text-xl">
                  {book.year}
                </span>
              </div>
              <div className="prose prose-lg dark:prose-invert mb-8">
                <p className="text-gray-600 dark:text-gray-300">
                  {book.description ||
                    "No description available yet. This section will be updated soon with detailed information about this book."}
                </p>
              </div>

              <div className="mt-10 flex space-x-4">
                <Link href="/">
                  <button className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    Back to Books
                  </button>
                </Link>
                <a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-yellow-600 dark:bg-yellow-500 text-white dark:text-black rounded-lg font-medium hover:bg-yellow-700 dark:hover:bg-yellow-400 transition-colors flex items-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    ></path>
                  </svg>
                  Purchase on Amazon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Books section could be added here in the future */}

      <Footer />
    </div>
  );
}
