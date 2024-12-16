import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function WaterLevelCard() {
  const waterLevel = 65 // Example water level percentage

  return (
    <Card>
      <CardHeader>
        <CardTitle>Water Levels</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Progress value={waterLevel} className="w-full" />
          <div className="flex justify-between text-sm">
            <span>Current: {waterLevel}%</span>
            <span className="text-blue-600 font-medium">
              {waterLevel < 30 ? 'Low' : waterLevel > 70 ? 'High' : 'Optimal'}
            </span>
          </div>
        </div>
        {waterLevel < 30 && (
          <p className="mt-4 text-sm text-red-600">
            Alert: Low water levels. Consider irrigation.
          </p>
        )}
      </CardContent>
    </Card>
  )
}

