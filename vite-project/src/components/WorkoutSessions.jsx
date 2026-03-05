import React from 'react';

const WorkoutSessions = () => {
  return (
    <section >
      <div className='grid grid-cols-2 gap-4 p-10'>
        <h1 className='text-3xl font-semibold'>TOP WORKOUT SESSIONS</h1>
        <p></p>
        <img src='image1.jpg' alt='Workout' className='rounded-2xl' />
        
        <div>
          <h1 className='text-3xl'>Featured Bootcamp</h1>
          <p>The biggest lie of all, "I don’t have the right equipment or gym membership," when the truth is, bodyweight exercises can be just as effective. These lies hold us back, but the real change begins when we stop believing them</p>
          
          <div className='mt-8'>
            <div className='border-2 border-blue p-2'>
              <h4> 1. "I’ll just skip today, it won’t matter." We tell ourselves tracking progress is unnecessary, but without it, we lose sight of how far we've come. we don’t have time, when in reality, it's just about priorities. When we feel tired, we say, </h4>
            </div>
            
            <div  className='border-2 border-blue p-2 mt-4'>
              <h4> 2. When the truth is, bodyweight exercises can be just as effective. These lies hold us back, but the real change begins when we stop believing them. we don’t have time, when in reality, it's just about priorities. When we feel tired, we say, We often find ourselves trapped in the cycle of procrastination, telling ourselves, </h4>
              
            </div>
            
            <div className='border-2 border-blue p-2 mt-4'>
              <h4>3. We talk ourselves into thinking, "I’m not strong enough," when strength is built gradually, and skipping a day becomes an excuse, "I’ll just skip today, it won’t matter. we don’t have time, when in reality, it's just about priorities. When we feel tired, we say,</h4>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkoutSessions;