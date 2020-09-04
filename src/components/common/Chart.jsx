import React, { useEffect, useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import Spinner from "./Spinner";

// const chartData = {
//   labels: ["January", "February", "March"],
//   datasets: [
//     {
//       backgroundColor: ["red", "blue", "green"],
//       data: [20, 20, 20],
//     },
//   ],
// };

const Chart = ({
  statsData,
  legend = false,
  label = "Top Trend",
  chartName = "Bar",
  height = 200,
}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (statsData && !data) {
      setData((prevState) => ({
        ...prevState,
        labels: statsData.label,
        datasets: [
          {
            backgroundColor: statsData.color,
            data: statsData.value,
          },
        ],
      }));
    }
    // eslint-disable-next-line
  }, [statsData]);

  return (
    <>
      {(chartName === "Bar" && (
        <div
          style={{
            backgroundColor: "#fff",
            padding: "30px 40px 10px 40px",
            borderRadius: "5px",
            margin: "10px",
          }}
        >
          <h2 className="label-primary mb-3 text-center">{label}</h2>
          {!data ? (
            <div className="spinner-container">
              <Spinner name="spinner-dark" />
            </div>
          ) : (
            <Bar
              data={data ? data : {}}
              // width={150}
              height={height}
              options={{
                maintainAspectRatio: true,
                legend: {
                  align: "start",
                  display: legend,
                  position: "right",
                  fullWidth: false,
                },
              }}
            />
          )}
        </div>
      )) ||
        (chartName === "Pie" && (
          <div
            style={{
              backgroundColor: "#fff",
              // width: "500px",
              padding: "30px 40px 10px 40px",
              borderRadius: "5px",
              margin: "10px",
            }}
          >
            <h2 className="label-primary mb-3 text-center">{label}</h2>
            {!data ? (
              <div className="spinner-container">
                <Spinner name="spinner-dark" />
              </div>
            ) : (
              <Pie
                data={data ? data : {}}
                // width={150}
                height={height}
                options={{
                  maintainAspectRatio: true,
                  legend: {
                    align: "start",
                    display: legend,
                    position: "right",
                    fullWidth: false,
                  },
                }}
              />
            )}
          </div>
        ))}
    </>
  );
};

export default Chart;
