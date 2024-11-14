'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Upload } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    title: "Step 1: The Cross",
    explanation: "Start by creating a cross on one face. This is typically done on the white face.",
    image: "/placeholder.svg?height=200&width=200",
    rules: [
      "The cross should match the center pieces on all four sides.",
      "The white center piece should be facing up."
    ],
    preparation: "Ensure the cube is in a scrambled state before beginning."
  },
  {
    title: "Step 2: First Two Layers (F2L)",
    explanation: "Solve the first two layers simultaneously by pairing up corner and edge pieces.",
    image: "/placeholder.svg?height=200&width=200",
    rules: [
      "Match corner pieces with their corresponding edge pieces.",
      "Insert paired pieces into their correct positions."
    ],
    preparation: "Complete the cross before starting this step."
  },
  {
    title: "Step 3: Orient Last Layer (OLL)",
    explanation: "Orient the last layer so that the top face is all one color.",
    image: "/placeholder.svg?height=200&width=200",
    rules: [
      "Use algorithms to orient the corners and edges of the last layer.",
      "The top face should be a solid color, typically yellow."
    ],
    preparation: "Ensure the first two layers are completely solved."
  },
  {
    title: "Step 4: Permute Last Layer (PLL)",
    explanation: "Permute the last layer to put all pieces in their correct positions.",
    image: "/placeholder.svg?height=200&width=200",
    rules: [
      "Use algorithms to move the corners and edges to their correct spots.",
      "The entire cube should be solved after this step."
    ],
    preparation: "The top layer should be oriented with a solid color facing up."
  },
  {
    title: "Step 5: Final Adjustments",
    explanation: "Make any final turns to align the layers correctly.",
    image: "/placeholder.svg?height=200&width=200",
    rules: [
      "Ensure all faces are aligned properly.",
      "Double-check that all sides are solid colors."
    ],
    preparation: "The cube should be nearly solved, with possibly just the top layer needing alignment."
  },
  {
    title: "Step 6: Celebration",
    explanation: "Congratulations! You've solved the Rubik's Cube!",
    image: "/placeholder.svg?height=200&width=200",
    rules: [
      "Take a moment to appreciate your achievement.",
      "Try to solve it again, aiming for a faster time."
    ],
    preparation: "Enjoy your success before scrambling the cube for another attempt."
  }
]

export function RubiksCubeTutorialComponent() {
  const [currentStep, setCurrentStep] = useState(0)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
    setUploadedImage(null)
  }

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
    setUploadedImage(null)
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const step = steps[currentStep]

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Rubik's Cube Tutorial</h1>
      <p className="mb-4 text-muted-foreground">
        Welcome to the Rubik's Cube solver! This tool will guide you through solving a Rubik's Cube step by step. 
        Read the instructions for each step, follow the rules, and use the image as a reference. 
        You can upload a picture of your progress at each step. Use the navigation buttons to move between steps.
      </p>
      <div className="flex justify-between items-center mb-4">
        <Button onClick={handlePrevStep} disabled={currentStep === 0}>
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <span className="text-lg font-semibold">Step {currentStep + 1} of {steps.length}</span>
        <Button onClick={handleNextStep} disabled={currentStep === steps.length - 1}>
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">{step.title}</h2>
          <div className="md:flex">
            <div className="md:w-1/2 pr-4">
              <p className="mb-4">{step.explanation}</p>
              <h3 className="font-semibold mb-2">Rules:</h3>
              <ul className="list-disc pl-5 mb-4">
                {step.rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
              <h3 className="font-semibold mb-2">Preparation:</h3>
              <p>{step.preparation}</p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <img src={step.image} alt={`Rubik's Cube ${step.title}`} className="w-full h-auto mb-4" />
              <div>
                <h3 className="font-semibold mb-2">Upload your progress:</h3>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="mb-2"
                  aria-label="Upload progress image"
                />
                {uploadedImage && (
                  <img src={uploadedImage} alt="Uploaded progress" className="w-full h-auto mt-2" />
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}