import React, { useEffect } from 'react';
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  Legend, Category, Tooltip, DataLabel, HistogramSeries,
} from '@syncfusion/ej2-react-charts';

import { useUsers } from 'hooks';
import { userType } from 'typings/user';
import convertToDays from 'helpers/convertToDays';

const textStyle = {
  color: '#5d6d97',
  fontFamily: 'Ubuntu',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '300',
  lineHeight: '18px',
  textAlign: 'left',
};

const HistogramUsers = () => {
  const { users } = useUsers();

  const chartData: Object[] = [];

  useEffect(() => {
    users.forEach((user: userType) => {
      const firstTime = new Date(user.dateRegistration).getTime();
      const lastTime = new Date(user.dateLastActivity).getTime();
      const days = convertToDays(lastTime - firstTime);
      if (Number.isInteger(days)) {
        chartData.push({
          y: days,
        });
      }
    });
  }, []);

  return (
    <div>
      <ChartComponent
        id="charts"
        title="Histogram Rolling Retention 7 day"
        titleStyle={textStyle}
        style={{ textAlign: 'center' }}
        primaryXAxis={{
          majorGridLines: { width: 0 }, title: 'Days', minimum: 0, maximum: 100, titleStyle: textStyle,
        }}
        primaryYAxis={{
          title: 'Number of Users',
          minimum: 0,
          maximum: 50,
          interval: 10,
          majorTickLines: { width: 0 },
          lineStyle: { width: 0, color: '#5d6d97' },
          titleStyle: textStyle,
        }}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        legendSettings={{ visible: false }}
      >
        <Inject services={[HistogramSeries, Legend, Tooltip, Category, DataLabel]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={chartData}
            yName="y"
            name="Score"
            type="Histogram"
            marker={{ dataLabel: { visible: true, position: 'Top', font: { ...textStyle, color: '#ffffff' } } }}
            columnWidth={0.99}
            binInterval={10}
            fill="#5d6d97"
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default HistogramUsers;
