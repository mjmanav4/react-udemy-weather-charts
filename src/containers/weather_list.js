import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";
class WeatherList extends Component {
  renderWeather = cityData => {
    console.log(cityData);
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    console.log(temps);
    if (cityData) {
      name = cityData.city.name;

      return (
        <tr key={name}>
          <td>
            <GoogleMap lon={lon} lat={lat} />
          </td>
          <td>
            <Chart data={temps} color="orange" units="K" />
            <Chart data={pressure} color="green" units="hPa" />
            <Chart data={humidity} color="black" units="%" />
          </td>
        </tr>
      );
    }
  };

  render() {
    return (
      <table className="table table-hover">
        <thread>
          <tr>
            <th>City</th>
            <th>Tempreature (K)</th>
            <th>Preassure (hPa)</th>
            <th>Header (%)</th>
          </tr>
        </thread>

        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProrps({ weather }) {
  return { weather };
}

export default connect(mapStateToProrps)(WeatherList);
