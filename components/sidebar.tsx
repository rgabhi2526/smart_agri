import Link from 'next/link'
import { Home, Droplet, Leaf, Bug, Map, Bell } from 'lucide-react'

const navItems = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Water Levels', href: '/water-levels', icon: Droplet },
  { name: 'Nutrient Levels', href: '/nutrient-levels', icon: Leaf },
  { name: 'Pest & Disease', href: '/pest-disease', icon: Bug },
  { name: 'Field Map', href: '/field-map', icon: Map },
  { name: 'Alerts', href: '/alerts', icon: Bell },
]

export function Sidebar() {
  return (
    <div className="w-64 bg-green-800 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">AgriSmart</h1>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="mb-2">
              <Link href={item.href} className="flex items-center p-2 rounded hover:bg-green-700">
                <item.icon className="mr-2 h-5 w-5" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

