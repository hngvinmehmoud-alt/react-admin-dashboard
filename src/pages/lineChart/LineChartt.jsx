import { useState, useCallback } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';


const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];
// #endregion

const LINE_COLORS = {
  uv: '#8884d8',
  pv: '#82ca9d',
  amt: '#ffc658',
  
};

const DEFAULT_OPACITY = {
  uv: 1,
  pv: 1,
  amt: 1,
};





function LineChartt() {

const [opacity, setOpacity] = useState(DEFAULT_OPACITY);
  const [activeKey, setActiveKey] = useState(null);

  const handleMouseEnter = useCallback((o) => {
    const { dataKey } = o;
    if (typeof dataKey === 'string') {
      setOpacity(prev => ({ ...prev, [dataKey]: 0.5 }));
      setActiveKey(dataKey);
    }
  }, []);

  const handleMouseLeave = useCallback((o) => {
    const { dataKey } = o;
    if (typeof dataKey === 'string') {
      setOpacity(prev => ({ ...prev, [dataKey]: 1 }));
      setActiveKey(null);
    }
  }, []);


  return (
    <div>
      <LineChart
      style={{ margin:'4% auto' ,width: '100%', maxWidth: '800px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
    >
     
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      {Object.entries(LINE_COLORS).map(([key, color]) => (
        <Line
          key={key}
          type="monotone"
          dataKey={key}
          stroke={color}
          strokeWidth={3}
          strokeOpacity={opacity[key]}
          zIndex={activeKey === key ? 10 : undefined}
        />
      ))}
    </LineChart>
      
    </div>
  )
}

export default LineChartt