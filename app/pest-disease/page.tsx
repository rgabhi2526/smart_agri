import { PageTemplate } from "@/components/page-template"
import { PestDiseaseCard } from "@/components/pest-disease-card"
import { PlantDiseasePredictor } from "@/components/plant-disease-predictor"

export default function PestDiseasePage() {
  return (
    <PageTemplate title="Pest & Disease Detection">
      <div className="grid gap-4 md:grid-cols-2">
        <PestDiseaseCard />
        <PlantDiseasePredictor />
      </div>
    </PageTemplate>
  )
}

