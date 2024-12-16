'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const data = [
  { name: 'Nitrogen', value: 40 },
  { name: 'Phosphorus', value: 30 },
  { name: 'Potassium', value: 30 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

export function NutrientLevelCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Nutrient Levels</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          Recommendation: Consider adding more nitrogen-rich fertilizer.
        </p>
      </CardContent>
    </Card>
  )
}

