'use client'

import React, { useState, useRef, useEffect } from 'react'
import { MessageCircle, MenuIcon, Users, X, Send, Bot, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Link } from "react-router-dom";


type Message = {
  id: number
  text: string
  sender: 'user' | 'bot' | 'employee'
}

export function ChatbotInterfaceComponent() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'menu' | 'bot' | 'customer' | 'employee'>('menu')
  const [botMessages, setBotMessages] = useState<Message[]>([])
  const [customerMessages, setCustomerMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const toggleOpen = () => setIsOpen(!isOpen)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [botMessages, customerMessages])

  const handleSendMessage = (sender: 'user' | 'employee') => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        text: inputValue,
        sender: sender,
      }
      if (activeTab === 'bot') {
        setBotMessages([...botMessages, newMessage])
        setTimeout(() => {
          const botReply: Message = {
            id: Date.now(),
            text: "I'm a bot. How can I assist you?",
            sender: 'bot',
          }
          setBotMessages(prevMessages => [...prevMessages, botReply])
        }, 1000)
      } else if (activeTab === 'customer' || activeTab === 'employee') {
        setCustomerMessages([...customerMessages, newMessage])
      }
      setInputValue('')
    }
  }

  const MessageList = ({ messages }: { messages: Message[] }) => (
    <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[70%] p-2 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : message.sender === 'bot'
                  ? 'bg-gray-200'
                  : 'bg-green-500 text-white'
              }`}
            >
              {message.text}
            </div>
            <div className="w-6 h-6 mt-1 rounded-full bg-gray-200 flex items-center justify-center">
              {message.sender === 'user' ? (
                <User className="w-4 h-4 text-gray-600" />
              ) : message.sender === 'bot' ? (
                <Bot className="w-4 h-4 text-gray-600" />
              ) : (
                <User className="w-4 h-4 text-gray-600" />
              )}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )

  const MenuContent = () => (
    <ScrollArea className="flex-1">
      <div className="bg-gradient-to-b from-blue-500 to-blue-400 p-6 text-white text-center">
        <h2 className="text-3xl font-bold mb-6 animate-pulse">Welcome to Swym</h2>
        <div className="flex flex-col space-y-2">
          <Link to="/" className="text-white hover:underline">Home</Link>
          <Link to="/" className="text-white hover:underline">About</Link>
          <Link to="/" className="text-white hover:underline">Contact</Link>
        </div>
      </div>
      <div className="p-4">
        <ul className="space-y-2">
          <li>Our Services</li>
          <li>Contact Information</li>
          <li>Career Opportunities</li>
        </ul>
        <h2 className="text-xl font-bold mt-6 mb-4">Employee Access</h2>
        <Button onClick={() => setActiveTab('employee')}>Access Employee Chat</Button>
      </div>
    </ScrollArea>
  )

  return (
    <div className="fixed bottom-4 right-4 z-100">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 h-[500px] flex flex-col border border-gray-200 overflow-hidden">
          <div className="p-4 border-b flex justify-between items-center bg-gradient-to-b from-blue-500 to-blue-400 text-white">
            <h1 className="text-xl font-bold">
              {activeTab === 'menu'
                ? 'Menu'
                : activeTab === 'bot'
                ? 'Chatbot'
                : activeTab === 'customer'
                ? 'Customer Service'
                : 'Employee Chat'}
            </h1>
            <Button variant="ghost" size="icon" onClick={toggleOpen} className="text-white hover:text-gray-200">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex-1 overflow-hidden flex flex-col">
            {activeTab === 'menu' ? (
              <MenuContent />
            ) : activeTab === 'bot' ? (
              <MessageList messages={botMessages} />
            ) : (
              <MessageList messages={customerMessages} />
            )}
          </div>
          {activeTab !== 'menu' && (
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="Type a message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage(activeTab === 'employee' ? 'employee' : 'user')
                    }
                  }}
                  className="flex-1"
                />
                <Button onClick={() => handleSendMessage(activeTab === 'employee' ? 'employee' : 'user')}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
          <div className="flex justify-around p-2 border-t">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setActiveTab('menu')}
              className={activeTab === 'menu' ? 'bg-blue-100' : ''}
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setActiveTab('bot')}
              className={activeTab === 'bot' ? 'bg-blue-100' : ''}
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setActiveTab('customer')}
              className={activeTab === 'customer' || activeTab === 'employee' ? 'bg-blue-100' : ''}
            >
              <Users className="h-6 w-6" />
            </Button>
          </div>
        </div>
      ) : (
        <Button
          size="icon"
          className="rounded-full h-12 w-12 shadow-lg"
          onClick={toggleOpen}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}