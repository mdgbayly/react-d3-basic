"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  Xaxis,
  Yaxis,
  Xgrid,
  Ygrid,
  Legend
} from 'react-d3-core';

import {
  BarGroupHorizontal,
  Chart
} from 'react-d3-shape';

import {horizontalProps} from './commonProps';

export default class BarGroupHorizontalChart extends Component {

  constructor(props) {
    super(props);
  }

  static defaultProps = {
    onMouseOver: () => {},
    onMouseOut: () => {},
    ...horizontalProps
  }

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    margins: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    chartSeries: PropTypes.array.isRequired
  }

  render() {

    const {
      width,
      height,
      margins,
      data,
      chartSeries,
      showXGrid,
      showYGrid,
      categoricalColors
    } = this.props;

    var xgrid, ygrid;

    if(showXGrid) xgrid = <Xgrid/>
    if(showYGrid) ygrid = <Ygrid/>

    return (
      <div>
        <Legend
          {...this.props}
          width= {width}
          margins= {margins}
          chartSeries= {chartSeries}
          categoricalColors= {categoricalColors}
        />
        <Chart
          {...this.props}
          width= {width}
          height= {height}
          data= {data}
          chartSeries= {chartSeries}
          horizontal= {true}
          >
          <BarGroupHorizontal
            chartSeries= {chartSeries}
          />
          {xgrid}
          {ygrid}
          <Xaxis/>
          <Yaxis/>
          {this.props.children}
        </Chart>
      </div>
    )
  }
}
