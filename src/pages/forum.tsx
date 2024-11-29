// 'use client'

// import { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
// import { ThumbsUp, ThumbsDown, MessageSquare, Search, Bell, Menu } from 'lucide-react'
// import { Link } from "react-router-dom"; // React Router Link
// import Image from "next/image";


// export default function ForumMainPageComponent() {
//   const [selectedCategory, setSelectedCategory] = useState('All')

//   const categories = ['All', 'Fitness Training', 'Speedcubing', 'Nutrition Coaching', 'Schlagball']

//   const posts = [
//     { id: 1, title: 'Best practices for speedcubing beginners', author: 'CubeMaster', category: 'Speedcubing', likes: 42, dislikes: 3, comments: 15 },
//     { id: 2, title: 'High-protein meal prep ideas', author: 'FitFoodie', category: 'Nutrition Coaching', likes: 28, dislikes: 1, comments: 7 },
//     { id: 3, title: 'Schlagball tournament this weekend!', author: 'BallPro', category: 'Schlagball', likes: 15, dislikes: 0, comments: 3 },
//   ]

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
//       {/* Header */}
//       <header className="bg-white dark:bg-gray-800 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//           <div className="flex items-center space-x-4">
//             <Menu className="h-6 w-6 text-gray-500 dark:text-gray-400 md:hidden" />
//             <h1 className="text-2xl font-bold text-gray-900 dark:text-white">ForumName</h1>
//           </div>
//           <div className="flex items-center space-x-4">
//             <Button variant="ghost" size="icon">
//               <Bell className="h-5 w-5" />
//             </Button>
//             <Avatar>
//               <AvatarImage src="/placeholder-avatar.jpg" />
//               <AvatarFallback>U</AvatarFallback>
//             </Avatar>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Sidebar */}
//           <aside className="w-full md:w-64 space-y-4">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Categories</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-2">
//                   {categories.map((category) => (
//                     <li key={category}>
//                       <Button
//                         variant={selectedCategory === category ? "secondary" : "ghost"}
//                         className="w-full justify-start"
//                         onClick={() => setSelectedCategory(category)}
//                       >
//                         {category}
//                       </Button>
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card>
//           </aside>

//           {/* Main content */}
//           <div className="flex-1 space-y-6">
//             {/* Search and filter */}
//             <div className="flex space-x-4">
//               <div className="relative flex-1">
//                 <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
//                 <Input placeholder="Search posts" className="pl-8" />
//               </div>
//               <Button>Filter</Button>
//             </div>

//             {/* Posts */}
//             {posts.map((post) => (
//               <Card key={post.id}>
//                 <CardHeader>
//                   <div className="flex items-center justify-between">
//                     <CardTitle className="text-lg">{post.title}</CardTitle>
//                     <Badge>{post.category}</Badge>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex items-center space-x-2 text-sm text-muted-foreground">
//                     <Avatar className="h-6 w-6">
//                       <AvatarFallback>{post.author[0]}</AvatarFallback>
//                     </Avatar>
//                     <span>{post.author}</span>
//                   </div>
//                 </CardContent>
//                 <CardFooter className="flex justify-between">
//                   <div className="flex space-x-4">
//                     <Button variant="ghost" size="sm">
//                       <ThumbsUp className="mr-2 h-4 w-4" />
//                       {post.likes}
//                     </Button>
//                     <Button variant="ghost" size="sm">
//                       <ThumbsDown className="mr-2 h-4 w-4" />
//                       {post.dislikes}
//                     </Button>
//                   </div>
//                   <Button variant="ghost" size="sm">
//                     <MessageSquare className="mr-2 h-4 w-4" />
//                     {post.comments} Comments
//                   </Button>
//                 </CardFooter>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }