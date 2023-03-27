import { ResponsiveLine } from "@nivo/line";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { CallHistory } from "../../api";

const MyResponsiveLine = ({ nftData }) => {
  const [history, setHistory] = useState([]);

  const callHistory = async () => {
    const data = await CallHistory(nftData?.hash);
    const data2 = [];

    data.data.map((item) => {
      data2.push({ x: item.deletedAt.slice(0, 10), y: item.price });
    });

    setHistory(data2);
  };

  useEffect(() => {
    callHistory();
  }, []);

  return (
    <Pa>
      <ResponsiveLine
        data={[
          {
            id: "Trio",
            color: "hsl(109, 70%, 50%)",
            data: history,
          },
        ]}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "0",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Date",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -20,
          legend: "Volume (Trio)",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      ></ResponsiveLine>
    </Pa>
  );
};

const Pa = styled.div`
  height: 300px;
`;
export default MyResponsiveLine;
