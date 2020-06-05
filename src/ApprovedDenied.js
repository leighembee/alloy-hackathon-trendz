import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const data = [
  {
    "date": "Jan",
    "evaluations": 200,
    "approved": 100,
    "denied": 300
  },
  {
    "date": "Feb",
    "approved": 100,
    "denied": 300
  },
  {
    "date": "March",
    "approved": 600,
    "denied": 350
  },
  {
    "date": "Apr",
    "approved": 220,
    "denied": 400
  },
]

const ApprovedDenied = () => (
  <div className="chart-container">
    <ResponsiveBar
      data={data}
      maxValue={800}
      keys={['approved', 'denied']}
      colors={['#006666', '#7f3844']}
      indexBy="date"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      enableLabel={false}
    />
  </div>
);

export default ApprovedDenied;
