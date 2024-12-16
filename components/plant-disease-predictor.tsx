'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Upload } from 'lucide-react'

export function PlantDiseasePredictor() {
  const [file, setFile] = useState<File | null>(null)
  const [prediction, setPrediction] = useState<{ status: string; confidence: number } | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0])
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!file) return

    setIsLoading(true)
    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('/api/predict-disease', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Prediction failed')
      }

      const result = await response.json()
      setPrediction(result)
    } catch (error) {
      console.error('Error:', error)
      setPrediction({ status: 'Error', confidence: 0 })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Plant Disease Predictor</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="file"
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="cursor-pointer flex items-center justify-center w-full border border-dashed border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50"
            >
              <Upload className="mr-2 h-4 w-4" />
              {file ? file.name : 'Choose an image'}
            </label>
          </div>
          <Button type="submit" disabled={!file || isLoading} className="w-full">
            {isLoading ? 'Predicting...' : 'Predict'}
          </Button>
        </form>
        {prediction && (
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Prediction Result:</h3>
            <div className="flex items-center space-x-2">
              <AlertTriangle className={`h-5 w-5 ${prediction.status === 'Diseased' ? 'text-red-500' : 'text-green-500'}`} />
              <span>{prediction.status}</span>
            </div>
            <p className="mt-1">Confidence: {(prediction.confidence * 100).toFixed(2)}%</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

