'use client'

import { useEffect, useState } from 'react'
import { testDatabaseConnection } from '@/lib/db-utils'

export function SupabaseTest() {
  const [status, setStatus] = useState<{
    isConnected: boolean | null;
    message: string;
  }>({
    isConnected: null,
    message: 'Checking connection...'
  })

  useEffect(() => {
    async function testConnection() {
      try {
        const result = await testDatabaseConnection()
        if (result.success) {
          setStatus({
            isConnected: true,
            message: 'Connected to Supabase and schema verified'
          })
        } else {
          throw result.error
        }
      } catch (error) {
        console.error('Error:', error)
        setStatus({
          isConnected: false,
          message: 'Failed to connect to Supabase or verify schema'
        })
      }
    }

    testConnection()
  }, [])

  return (
    <div className="p-4 border rounded-lg m-4 bg-background">
      <h2 className="text-xl font-bold mb-2">Database Connection Status:</h2>
      <p className={`text-lg ${
        status.isConnected ? 'text-green-500' : 
        status.isConnected === false ? 'text-red-500' : 
        'text-yellow-500'
      }`}>
        {status.message}
      </p>
    </div>
  )
} 