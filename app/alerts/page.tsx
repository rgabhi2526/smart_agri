import { PageTemplate } from "@/components/page-template"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Bell } from 'lucide-react'

export default function AlertsPage() {
  const alerts = [
    { id: 1, type: "Water Levels", message: "Low water levels in Field 3", severity: "high" },
    { id: 2, type: "Pest Detection", message: "Potential aphid infestation in northwest quadrant", severity: "medium" },
    { id: 3, type: "Nutrient Levels", message: "Nitrogen deficiency detected in Field 2", severity: "low" },
  ]

  return (
    <PageTemplate title="Alerts">
      <div className="space-y-4">
        {alerts.map((alert) => (
          <Card key={alert.id}>
            <CardHeader className="flex flex-row items-center space-x-2">
              <AlertTriangle className={`h-5 w-5 ${alert.severity === 'high' ? 'text-red-500' : alert.severity === 'medium' ? 'text-yellow-500' : 'text-blue-500'}`} />
              <CardTitle>{alert.type}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{alert.message}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageTemplate>
  )
}

