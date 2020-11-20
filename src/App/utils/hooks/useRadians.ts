import { useState, useEffect } from 'react';

const useRadians: (
  progress: number,
  ref: React.MutableRefObject<any>
) => number[] = (progress, ref) => {
  const [radians, setRadians] = useState([0, 250]);

  useEffect(() => {
    const radius = ref.current.r.baseVal.value;
    const circumference = Math.round(radius * 2 * Math.PI);
    const offset = Math.round(circumference - (progress / 100) * circumference);

    setRadians([circumference, offset]);
  }, [progress]);

  return radians;
};

export default useRadians;
