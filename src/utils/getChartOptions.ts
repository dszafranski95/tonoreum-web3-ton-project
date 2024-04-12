// Define the shape of your chart options to help with TypeScript validation.
interface ChartOptions {
  series: number[];
  colors: string[];
  chart: {
    height: number;
    width: string;
    type: string;
  };
  stroke: {
    colors: string[];
    lineCap: string;
  };
  plotOptions: {
    pie: {
      labels: {
        show: boolean;
      };
      size: string;
      dataLabels: {
        offset: number;
      };
    };
  };
  labels: string[];
  dataLabels: {
    enabled: boolean;
    style: {
      fontFamily: string;
    };
  };
  legend: {
    position: string;
    fontFamily: string;
  };
  yaxis: {
    labels: {
      formatter: (value: number) => string;
    };
  };
  xaxis: {
    labels: {
      formatter: (value: string) => string;
    };
    axisTicks: {
      show: boolean;
    };
    axisBorder: {
      show: boolean;
    };
  };
}

export const getChartOptions = (): ChartOptions => {
  return {
    series: [91.85, 8.15],
    colors: ["#4caf50", "#ff9800"],
    chart: {
      height: 420,
      width: "100%",
      type: "pie",
    },
    stroke: {
      colors: ["white"],
      lineCap: "round",
    },
    plotOptions: {
      pie: {
        labels: {
            show: true,
        },
        size: "100%",
        dataLabels: {
            offset: -5,
        },
      },
    },
    labels: ["Mined Tokens", "Reserved for Liquidity"],
    dataLabels: {
      enabled: true,
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    legend: {
      position: "bottom",
      fontFamily: "Inter, sans-serif",
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value}%`,
      },
    },
    xaxis: {
      labels: {
        formatter: (value) => `${value}`,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  };
};
