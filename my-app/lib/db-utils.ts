import { supabase } from './supabase'

export async function testDatabaseConnection() {
  try {
    // Test lodges table
    const { data: lodges, error: lodgesError } = await supabase
      .from('lodges')
      .select('*')
      .limit(1)
    
    if (lodgesError) throw lodgesError

    // Test activities table
    const { data: activities, error: activitiesError } = await supabase
      .from('activities')
      .select('*')
      .limit(1)
    
    if (activitiesError) throw activitiesError

    // Test seasons table
    const { data: seasons, error: seasonsError } = await supabase
      .from('seasons')
      .select('*')
      .limit(1)
    
    if (seasonsError) throw seasonsError

    return {
      success: true,
      data: {
        lodges,
        activities,
        seasons
      }
    }
  } catch (error) {
    console.error('Database test failed:', error)
    return {
      success: false,
      error
    }
  }
}

export async function getFeaturedActivities() {
  const { data, error } = await supabase
    .from('activities')
    .select('*')
    .eq('homepage_featured', true)
    .order('name')
  
  if (error) {
    console.error('Error fetching featured activities:', error)
    return []
  }
  
  return data
} 