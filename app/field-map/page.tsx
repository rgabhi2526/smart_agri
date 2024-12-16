import { PageTemplate } from "@/components/page-template"
import { FieldMapCard } from "@/components/field-map-card"

export default function FieldMapPage() {
  return (
    <PageTemplate title="Field Map">
      <div className="grid gap-4 md:grid-cols-2">
        <FieldMapCard />
        <div>
          <h2 className="text-xl font-semibold mb-2">Field Details</h2>
          <p>Detailed information about selected fields will be shown here.</p>
        </div>
      </div>
    </PageTemplate>
  )
}

