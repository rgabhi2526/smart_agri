import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface PageTemplateProps {
  title: string
  children: React.ReactNode
}

export function PageTemplate({ title, children }: PageTemplateProps) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <Card>
        <CardHeader>
          <CardTitle>{title} Overview</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  )
}

