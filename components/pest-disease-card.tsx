import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from 'lucide-react'

export function PestDiseaseCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pest & Disease Detection</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 text-yellow-600">
          <AlertTriangle />
          <span className="font-medium">Moderate Risk Detected</span>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          AI analysis indicates a potential aphid infestation in the northwest quadrant.
        </p>
        <div className="mt-4">
          <h4 className="font-medium mb-2">Recommended Actions:</h4>
          <ul className="list-disc list-inside text-sm text-gray-600">
            <li>Inspect northwest quadrant for aphids</li>
            <li>Consider applying neem oil as a natural pesticide</li>
            <li>Monitor closely over the next 48 hours</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

