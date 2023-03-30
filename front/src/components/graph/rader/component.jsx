import { ResponsiveRadar } from "@nivo/radar";
import { useState } from "react";
import styled from "styled-components";

const MyResponsiveRadar = ({ nftData }) => {
  return (
    <Pa>
      <ResponsiveRadar
        data={[
          {
            taste: "attack",
            stat: nftData?.attack * 3.25,
          },
          {
            taste: "health",
            stat: nftData?.health,
          },
          {
            taste: "speed",
            stat: nftData?.speed * 16,
          },
        ]}
        keys={["stat"]}
        indexBy="taste"
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: "color" }}
        gridLabelOffset={36}
        dotSize={5}
        dotColor={{ theme: "background" }}
        dotBorderWidth={2}
        dotLabel="value"
        colors={{ scheme: "nivo" }}
        blendMode="multiply"
        motionConfig="wobbly"
        legends={[
          {
            anchor: "top-left",
            direction: "column",
            translateX: -50,
            translateY: -90,
            itemWidth: 80,
            itemHeight: 50,
            itemTextColor: "#999",
            symbolSize: 12,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </Pa>
  );
};

export default MyResponsiveRadar;

const Pa = styled.div`
  height: 100%;
`;
