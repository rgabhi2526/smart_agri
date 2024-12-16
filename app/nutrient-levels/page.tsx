import { PageTemplate } from "@/components/page-template"
import { NutrientLevelCard } from "@/components/nutrient-level-card"

export default function NutrientLevelsPage() {
  return (
    <PageTemplate title="Nutrient Levels">
      <div className="grid gap-4 md:grid-cols-2">
        <NutrientLevelCard />
        <div>
          <h2 className="text-xl font-semibold mb-2">Soil Composition</h2>
          <p>Detailed breakdown of soil nutrients and recommendations will be shown here.</p>
        </div>
      </div>
    </PageTemplate>
  )
}

