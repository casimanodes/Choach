'use server'

import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function analyzeImage(formData: FormData) {
  try {
    console.log('Starting image analysis...')

    const file = formData.get('image') as File
    if (!file) {
      throw new Error('No file uploaded')
    }

    console.log('File received:', file.name)

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const base64Image = buffer.toString('base64')

    console.log('Image converted to base64')

    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not set')
    }

    console.log('Sending request to OpenAI...')

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: "Analyze this image. See if it is a Speedcube/Rubikscube, and state how solved it is. Also repeat how solved it is" },
            {
              type: "image_url",
              image_url: {
                url: `data:image/jpeg;base64,${base64Image}`,
              },
            },
          ],
        },
      ],
    })

    console.log('Received response from OpenAI')

    return { success: true, analysis: response.choices[0].message.content }
  } catch (error) {
    console.error('Error in analyzeImage:', error)
    return { success: false, error: error instanceof Error ? error.message : 'An unknown error occurred' }
  }
}
