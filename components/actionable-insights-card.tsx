import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ActionableInsightsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Actionable Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li className="flex items-start space-x-2">
            <span className="text-green-600">•</span>
            <span className="text-sm">Increase irrigation in Field 3 by 15% to optimize growth.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-yellow-600">•</span>
            <span className="text-sm">Schedule pest inspection for the northwest quadrant within 24 hours.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-blue-600">•</span>
            <span className="text-sm">Consider crop rotation in Field 2 next season to improve soil health.</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}

