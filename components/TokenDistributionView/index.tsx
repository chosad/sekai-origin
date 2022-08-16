import Image from 'next/image';
import {
  Cell, Pie, PieChart, ResponsiveContainer, Tooltip,
} from 'recharts';
import HelpIcon from '@mui/icons-material/Help';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

const CustomTooltip = ({
  active, payload, label, ...props
}: any) => {
  const [state, setState] = useState({
    classText: '',
    widthBox: 0,
  });
  const isDesktop = useMediaQuery({ minWidth: 769 });

  useEffect(() => {
    if (isDesktop) {
      setState({ classText: 'text-custom-tooltip', widthBox: 500 });
    } else {
      setState({ classText: 'text-custom-tooltip-mobile', widthBox: 400 });
    }
  }, [isDesktop]);

  console.log('props', props, label, payload);
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className={state.classText}>{payload[0].name}</p>
        <p className={state.classText}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
          nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit
          in vulputate velit esse
        </p>
      </div>
    );
  }

  return null;
};

interface TokenDistributionViewProps {
    width: number,
}
const TokenDistributionView = (props: TokenDistributionViewProps) => {
  const { width } = props;
  const isDesktop = useMediaQuery({ minWidth: 769 });
  const [state, setState] = useState({
    classContainer: '',
    innerRadius: 0,
  });
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    // index,
    name,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 1.4;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <g>
        <text
          x={x}
          y={y}
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
          fill="#4A3D3A"
          fontSize={25}
        >
          {name}
        </text>
        <text
          x={x}
          y={y}
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
          dy={30}
          fill="#4A3D3A"
          fontSize={25}
        >
          {`${(percent * 100).toFixed(0)}%`}
          <HelpIcon sx={{ fontSize: 50 }} />
        </text>
      </g>
    );
  };

  useEffect(() => {
    if (isDesktop) {
      setState({ classContainer: 'container-token-distribution', innerRadius: 130 });
    } else {
      setState({ classContainer: 'container-token-distribution-mobile', innerRadius: 100 });
    }
  }, [isDesktop]);

  const data01 = [
    { name: 'COMMUNITY REWARDS', value: 15 },
    { name: 'STACKING', value: 27 },
    { name: 'CREATOR & INVESTORS', value: 18 },
    { name: 'DEVELOPER FUND', value: 20 },
    { name: 'HOLDERS', value: 20 },
  ];
  const COLORS = ['#fc1170', '#c4fbff', '#94deff', '#adb2ff', '#e871de'];
  return (
    <div className={state.classContainer}>
      <p className="text-token-distribution">TOKEN DISTRIBUTIONS</p>
      <div style={{
        width, height: 600, position: 'relative', zIndex: 1,
      }}
      >
        <ResponsiveContainer>
          <PieChart width={720} height={700}>
            {/* <PieChart width={520} height={500}> */}
            <Pie
              dataKey="value"
              data={data01}
              innerRadius={state.innerRadius}
              label={isDesktop ? renderCustomizedLabel : undefined}
            >
              {data01.map((entry, index) => (
              // eslint-disable-next-line react/no-array-index-key
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div style={{ position: 'relative', top: -330, zIndex: 0 }}>
        <Image src="/sekaiLogo.png" alt="" width={180} height={65} />
      </div>
    </div>
  );
};

export default TokenDistributionView;
