'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, User, Menu } from 'lucide-react'

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
]

export function LandingPageComponent() {
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // Offset for navbar

      Object.entries(sectionRefs.current).forEach(([key, ref]) => {
        if (ref && ref.offsetTop <= scrollPosition && ref.offsetTop + ref.offsetHeight > scrollPosition) {
          setActiveSection(key)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = sectionRefs.current[sectionId]
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-30 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4 md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-white hover:text-gray-200">
                <Menu className="w-6 h-6" />
              </button>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <div key={item.title} className="relative group">
                  <button className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                    {item.title}
                    {item.subItems.length > 0 && <ChevronDown className="inline-block ml-1 w-4 h-4" />}
                  </button>
                  {item.subItems.length > 0 && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1">
                        {item.subItems.map((subItem) => (
                          <div key={subItem.title} className="group/sub">
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            >
                              {subItem.title}
                            </a>
                            <div className="absolute left-full top-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                              <div className="py-1">
                                {subItem.items.map((subSubItem) => (
                                  <a
                                    key={subSubItem}
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                  >
                                    {subSubItem}
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div>
              <button className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50">
          <div className="fixed top-0 left-0 bottom-0 w-64 bg-white">
            <div className="p-4 mt-16">
              {navItems.map((item) => (
                <div key={item.title} className="mb-4">
                  <button
                    onClick={() => scrollToSection(item.title)}
                    className="text-gray-800 hover:text-gray-600 font-medium"
                  >
                    {item.title}
                  </button>
                  {item.subItems.length > 0 && (
                    <div className="ml-4 mt-2">
                      {item.subItems.map((subItem) => (
                        <div key={subItem.title} className="mb-2">
                          <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">
                            {subItem.title}
                          </a>
                          <div className="ml-4 mt-1">
                            {subItem.items.map((subSubItem) => (
                              <a key={subSubItem} href="#" className="block text-gray-500 hover:text-gray-700 text-xs">
                                {subSubItem}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="pt-20 pb-12 px-4 bg-gradient-to-b from-orange-400 to-blue-500">
        <div className="container mx-auto relative">
          <h1 className="text-5xl font-bold text-white text-center shadow-text mb-8">
            COACH CASH ALLER ART
          </h1>
          <Image
            src="/components/images/gelößt_cube.JPG"
            alt="Hero "
            width={1000}
            height={600}
            className="w-[80%] mx-auto rounded-lg shadow-2xl max-h-screen object-cover"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-blue-500">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
          {/* Sidebar Navigation */}
          <div className="md:w-[8%] md:fixed md:right-4 md:top-20 bg-white bg-opacity-75 rounded-lg p-4 mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Übersicht</h2>
            <ul>
              {navItems.map((item) => (
                <li key={item.title} className="mb-2">
                  <button
                    onClick={() => scrollToSection(item.title)}
                    className={`text-left w-full py-1 px-2 rounded ${
                      activeSection === item.title ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
                    }`}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Sections */}
          <div className="md:w-[92%] md:ml-[20%]">
            {navItems.map((item) => (
              <div
                key={item.title}
                ref={(el) => (sectionRefs.current[item.title] = el)}
                className="mb-12 w-full mx-auto"
              >
                <h2 className="text-3xl font-bold mb-4 text-white">{item.title}</h2>
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
                      src="/placeholder.svg?height=200&width=300"
                      alt={`${item.title} Image`}
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md w-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}