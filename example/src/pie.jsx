"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var ChartPie = require('../../lib').ChartPie;
var PieChart = require('../../lib').PieChart;

var generalChartData = require('dsv?delimiter=,!./data/age_pie.csv')

var value = function(d) {
    return +d.population;
  },
  name = function(d) {
    return d.age;
  },
  chartSeries = [
    {
      "field": "<5",
      "name": "less than 5",
      "color": "red",
      "style": {
        "fill-opacity": .2
      }
    },
    {
      "field": "5-13",
      "name": "5 to 13",
      style: {
        "fill-opacity": .5
      }
    },
    {
      "field": "14-17",
      "name": "14 to 17"
    },
    {
      "field": "18-24",
      "name": "18 to 24"
    },
    {
      "field": "25-44",
      "name": "25 to 44"
    },
    {
      "field": "45-64",
      "name": "45 to 64"
    }
  ];

module.exports = React.createClass({
  getInitialState: function() {
    return {
      width: 600,
      height: 400,
      series: chartSeries
    }
  },
  onButtonClick: function() {
    this.setState({
      width: this.state.width === 600? 400: 600,
      height: this.state.width === 600? 600: 400,
      series: this.state.width === 600? [{
        "field": "<5",
        "name": "less than 5",
        "color": "red",
        "style": {
          "fill-opacity": .2
        }
      },
      {
        "field": "5-13",
        "name": "5 to 13",
        style: {
          "fill-opacity": .5
        }
      }]: chartSeries
    })
  },
  onMouseOver: function(e) {
    console.log(e)
  },
  onMouseOut: function(e) {
    console.log(e)
  },
  onClick: function(e, data) {
    console.log(e, data)
  },
  render: function() {

    return (
      <div>
        <button onClick={this.onButtonClick}>toggle</button>
        <PieChart
          width= {this.state.width}
          height= {this.state.height}
          data= {generalChartData}
          chartSeries= {this.state.series}
          value = {value}
          name = {name}
          onMouseOver= {this.onMouseOver}
          onMouseOut= {this.onMouseOut}
          onClick= {this.onClick}
        />
      </div>
    )
  }
})
