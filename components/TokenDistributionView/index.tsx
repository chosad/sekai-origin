import Image from 'next/image';
import {
  Cell, Pie, PieChart, ResponsiveContainer, Tooltip,
} from 'recharts';
import HelpIcon from '@mui/icons-material/Help';

const CustomTooltip = ({
  active, payload, label, ...props
}: any) => {
  console.log('props', props, label, payload);
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        {/* <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p> */}
        <p className="text-custom-tooltip">{payload[0].name}</p>
        <p className="text-custom-tooltip" style={{ width: 500 }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse </p>
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

  const data01 = [
    { name: 'COMMUNITY REWARDS', value: 15 },
    { name: 'STACKING', value: 27 },
    { name: 'CREATOR & INVESTORS', value: 18 },
    { name: 'DEVELOPER FUND', value: 20 },
    { name: 'HOLDERS', value: 20 },
  ];
  const COLORS = ['#fc1170', '#c4fbff', '#94deff', '#adb2ff', '#e871de'];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <p className="text-token-distribution">TOKEN DISTRIBUTIONS</p>
      <div style={{
        width, height: 600, position: 'relative', zIndex: 1,
      }}
      >
        <ResponsiveContainer>
          <PieChart width={720} height={700}>
            <Pie
              dataKey="value"
              data={data01}
              innerRadius={130}
              label={renderCustomizedLabel}
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
