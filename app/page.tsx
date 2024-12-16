import { CropHealthCard } from '@/components/crop-health-card'
import { WaterLevelCard } from '@/components/water-level-card'
import { NutrientLevelCard } from '@/components/nutrient-level-card'
import { PestDiseaseCard } from '@/components/pest-disease-card'
import { ActionableInsightsCard } from '@/components/actionable-insights-card'
import { FieldMapCard } from '@/components/field-map-card'

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <CropHealthCard />
      <WaterLevelCard />
      <NutrientLevelCard />
      <PestDiseaseCard />
      <ActionableInsightsCard />
      <FieldMapCard />
    </div>
  )
}

