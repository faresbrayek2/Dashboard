import { Card } from "@material-tailwind/react";
import { Component } from "react";

import Chart from "react-apexcharts";

class Donut extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        title: {
          text: "Donut Chart",
        },
        colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"],
      },
      series: [44, 55, 41, 17, 100],
    };
  }

  render() {
    return (
      <Card className="p-6">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="380"
        />
      </Card>
    );
  }
}

export default Donut;
