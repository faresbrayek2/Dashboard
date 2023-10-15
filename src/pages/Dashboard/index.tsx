import { Component } from "react";
import Donut from "../../components/Charts/Donut";
import Line from "../../components/Charts/Line";
import CardWithLink from "../../components/Cards/CardWithLink";
import MultipleCards from "../../components/Cards/MultipleCards";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="py-6">
        <div className="flex flex-wrap justify-center pb-6">
          <MultipleCards />
        </div>

        <div className="flex flex-wrap justify-evenly">
          <Donut />
          <Line />
        </div>
      </div>
    );
  }
}
