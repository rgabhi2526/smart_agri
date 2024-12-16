'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Mon', health: 90 },
  { name: 'Tue', health: 85 },
  { name: 'Wed', health: 88 },
  { name: 'Thu', health: 92 },
  { name: 'Fri', health: 89 },
  { name: 'Sat', health: 91 },
  { name: 'Sun', health: 93 },
]

export function CropHealthCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Crop Health</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="health" stroke="#4ade80" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm font-medium">Current Status:</span>
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Healthy
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

