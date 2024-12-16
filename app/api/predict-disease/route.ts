import { NextRequest, NextResponse } from 'next/server'
import { exec } from 'child_process'
import { writeFile } from 'fs/promises'
import path from 'path'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    // Save the file temporarily
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const tempFilePath = path.join('/tmp', `upload-${Date.now()}.jpg`)
    await writeFile(tempFilePath, buffer)

    // Run the Python script
    const modelPath = path.join(process.cwd(), 'models', 'plant_disease_model')
    const scriptPath = path.join(process.cwd(), 'scripts', 'predict.py')
    
    return new Promise((resolve) => {
      exec(`python ${scriptPath} ${tempFilePath} ${modelPath}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`)
          resolve(NextResponse.json({ error: 'Prediction failed' }, { status: 500 }))
          return
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`)
          resolve(NextResponse.json({ error: 'Prediction failed' }, { status: 500 }))
          return
        }

        const [status, confidence] = stdout.trim().split(',')
        resolve(NextResponse.json({ status, confidence: parseFloat(confidence) }))
      })
    })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Prediction failed' }, { status: 500 })
  }
}

