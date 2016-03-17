"use strict";

import {
  default as React,
  Component,
  PropTypes
} from 'react';

import {
  Legend
} from 'react-d3-core';

import {
  ChartPie,
  Pie
} from 'react-d3-shape';

export default class PieChart extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    onMouseOver: () => {},
    onMouseOut: () => {},
    onClick: () => {}
  }

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
    chartSeries: PropTypes.array.isRequired,
    value: PropTypes.func.isRequired,
    name: PropTypes.func.isRequired
  }

  render() {
    const {
      width,
      height,
      data,
      chartSeries,
      value,
      name,
      categoricalColors
    } = this.props;


    return (
      <div>
        <Legend
          {...this.props}
          width= {width}
          chartSeries= {chartSeries}
          categoricalColors= {categoricalColors}
        />
        <ChartPie
          {...this.props}
          width= {width}
          height= {height}
          data= {data}
          chartSeries= {chartSeries}
          value = {value}
          name = {name}
          >
          <Pie
            {...this.props}
            chartSeries= {chartSeries}
          />
          {this.props.children}
        </ChartPie>
      </div>
    )
  }
}
