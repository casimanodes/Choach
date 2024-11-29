
// 'use client'

// import { useState } from 'react'
// import { analyzeImage } from '@/app/actions/analyzeimage'

// export default function ImageUpload() {
//   const [file, setFile] = useState<File | null>(null)
//   const [analysis, setAnalysis] = useState<string | null>(null)
//   const [error, setError] = useState<string | null>(null)
//   const [isLoading, setIsLoading] = useState(false)

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setFile(e.target.files[0])
//       setError(null)
//     }
//   }

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     if (!file) {
//       setError('Please select an image to upload')
//       return
//     }

//     setIsLoading(true)
//     setError(null)
//     setAnalysis(null)

//     const formData = new FormData()
//     formData.append('image', file)

//     const result = await analyzeImage(formData)

//     setIsLoading(false)
//     if (result.success) {
//       setAnalysis(result.analysis || 'No analysis provided')
//     } else {
//       setError(result.error || 'An error occurred')
//     }
//   }

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="image-upload" className="block text-sm font-medium text-gray-700">
//             Upload an image
//           </label>
//           <input
//             type="file"
//             id="image-upload"
//             accept="image/*"
//             onChange={handleImageChange}
//             className="mt-1 block w-full text-sm text-gray-500
//                       file:mr-4 file:py-2 file:px-4
//                       file:rounded-full file:border-0
//                       file:text-sm file:font-semibold
//                       file:bg-violet-50 file:text-violet-700
//                       hover:file:bg-violet-100"
//           />
//         </div>
//         <button
//           type="submit"
//           disabled={!file || isLoading}
//           className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
//         >
//           {isLoading ? 'Analyzing...' : 'Analyze Image'}
//         </button>
//       </form>
//       {error && <p className="mt-4 text-red-600">{error}</p>}
//       {analysis && (
//         <div className="mt-6">
//           <h3 className="text-lg font-medium text-gray-900">Analysis Result:</h3>
//           <p className="mt-2 text-gray-600">{analysis}</p>
//         </div>
//       )}
//     </div>
//   )
// }

