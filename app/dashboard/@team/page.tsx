import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'lucide-react';
import React from 'react'

async function getTeam() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  
    /* throw new Error("Error"); */
  }

const TeamPage = async () => {
    await getTeam();
  return (
    <Card className="h-[400px]">
      <CardHeader>
        <CardTitle>Here you will se team members</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 mb-4">
          <p>Team 1</p>
          <p>Team 2</p>
          <p>Team 3</p>
          <p>Team 4</p>
        </div>
        <Link href="/dashboard/admin">Go to admin</Link>
      </CardContent>
    </Card>
  )
}

export default TeamPage