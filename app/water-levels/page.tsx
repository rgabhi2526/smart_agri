import { PageTemplate } from "@/components/page-template"
import { WaterLevelCard } from "@/components/water-level-card"

export default function WaterLevelsPage() {
  return (
    <PageTemplate title="Water Levels">
      <div className="grid gap-4 md:grid-cols-2">
        <WaterLevelCard />
        <div>
          <h2 className="text-xl font-semibold mb-2">Historical Data</h2>
          <p>Detailed water level trends and analysis will be displayed here.</p>
        </div>
      </div>
    </PageTemplate>
  )
}

