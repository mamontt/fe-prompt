import React, { useEffect, useState } from 'react';
import worker from './dashboard.worker';

export default function Dashboard() {
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    worker.onmessage = (e) => setResult(e.data);
    worker.postMessage(null);
  }, []);

  return <div>{result !== null ? result : 'Calculating...'}</div>;
}
