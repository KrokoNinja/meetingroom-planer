'use client'

import { useEffect, useState } from 'react'
import supabase from '@/supabase'

export default function RealTimeDashboard({ serverRooms }: { serverRooms: any }) {
  const [rooms, setRooms] = useState(serverRooms)

  useEffect(() => {
    setRooms(serverRooms)
  }, [serverRooms])

  useEffect(() => {
    const channel = supabase
      .channel('realtime-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'rooms' }, (payload) => {
          switch (payload.eventType) {
            case 'INSERT':
              setRooms((rooms: any) => [...rooms, payload.new])
              break
            case 'UPDATE':
              setRooms((rooms: any) => rooms.map((room: any) => room.id === payload.new.id ? payload.new : room))
              break
            case 'DELETE':
              setRooms((rooms: any) => rooms.filter((room: any) => room.id !== payload.old.id))
              break
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [serverRooms])

  return <pre>RealTimeDashboard: {JSON.stringify(rooms, null, 2)}</pre>
}