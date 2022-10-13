import React, { useEffect, useState } from 'react';
import { Progress } from 'react95';

export const HomeContainer = () => {
  const [fakeLoad, setFakeLoad] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Add a stop and hover on 69%

    const timer =
      fakeLoad < 101 && setInterval(() => {
        const loadPercentage = Math.floor(Math.random() * 9)
        const newLoadState = fakeLoad + loadPercentage

        setFakeLoad(newLoadState > 100 ? 100 : newLoadState)

        if (newLoadState >= 100) {
          setTimeout(() => setLoaded(true), 1000)
        }
      }, 300);
    return () => clearInterval(timer);
  }, [fakeLoad]);

  return (
    <>
      {loaded ? <div>hi</div> : <div style={{ width: '350px'}}>
      <Progress value={fakeLoad} />
        </div>}
    </>
  )
}
