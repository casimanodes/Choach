'use client';

import Image from 'next/image';
import { useRef } from 'react';

const navItems = [
  {
    title: 'Fitness',
    subItems: [
      { title: 'Krafttraining', items: ['Anfänger', 'Fortgeschrittene'] },
      { title: 'Cardio', items: ['HIIT', 'Ausdauer'] },
    ],
  },
  {
    title: 'Speedcubing',
    subItems: [
      { title: 'Techniken', items: ['CFOP', 'Roux'] },
      { title: 'Wettkämpfe', items: ['Vorbereitung', 'Strategie'] },
    ],
  },
  {
    title: 'Schlagball',
    subItems: [
      { title: 'Grundlagen', items: ['Wurftechnik', 'Fangen'] },
      { title: 'Taktik', items: ['Offensive', 'Defensive'] },
    ],
  },
  {
    title: 'Ernährung',
    subItems: [
      { title: 'Diäten', items: ['Low-Carb', 'Vegan'] },
      { title: 'Supplements', items: ['Proteine', 'Vitamine'] },
    ],
  },
  { title: 'Forum', subItems: [] },
];

const forumPosts = [
  {
    id: 1,
    author: 'Admin',
    content: 'Willkommen in unserem neuen Forum! Hier können Sie Fragen stellen und Erfahrungen austauschen.',
    image: '/',
    video: 'https://example.com/welcome-video.mp4',
  },
  {
    id: 2,
    author: 'Coach Cash',
    content: 'Heute teile ich mit euch meine Top 5 Übungen für einen starken Rücken. Schaut euch das Video an!',
    video: 'https://example.com/back-exercises-video.mp4',
  },
  {
    id: 3,
    author: 'Ernährungsexpertin Lisa',
    content: 'Hier ist ein Bild mit einer Übersicht der wichtigsten Vitamine und Mineralstoffe für Sportler.',
    image: '/',
  },
];

export default function ContentSections() {
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  return (
    
    <div className="md:w-[84%] mx-auto">
      {navItems.map((item) => (
        <div
          key={item.title}
          ref={(el) => {
            sectionRefs.current[item.title] = el;
          }}
          className="mb-12 w-full mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">{item.title}</h2>
          {item.title !== 'Forum' ? (
            <div className="flex flex-col md:flex-row items-start">
              <div className="w-full md:w-2/3 pr-0 md:pr-8 mb-4 md:mb-0">
                <p className="text-lg mb-4 text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
                <p className="text-lg text-white">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                  anim id est laborum.
                </p>
              </div>
              <div className="w-full md:w-1/3">
                <Image
                  src="/"
                  alt={`${item.title} Image`}
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {forumPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.author}</h3>
                  <p className="text-gray-700 mb-4">{post.content}</p>
                  {post.image && (
                    <Image
                      src={post.image}
                      alt="Forum post image"
                      width={400}
                      height={300}
                      className="rounded-lg mb-4"
                    />
                  )}
                  {post.video && (
                    <video controls className="w-full rounded-lg mb-4">
                      <source src={post.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
