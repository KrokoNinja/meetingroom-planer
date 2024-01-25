import supabase from '@/supabase'
import RealTimeDashboard from './components/RealTimeDashboard';

export default async function Dashboard() {
  const { data: rooms } = await supabase.from("rooms").select();

  return <RealTimeDashboard serverRooms={rooms} />;
}