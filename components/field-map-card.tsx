import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export function FieldMapCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Field Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-[200px] w-full">
          <Image
            src="/placeholder.svg"
            alt="Field Map"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <p className="mt-2 text-sm text-gray-600">
          Click on the map to view detailed metrics for specific fields.
        </p>
      </CardContent>
    </Card>
  )
}

