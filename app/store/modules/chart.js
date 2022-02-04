// import axios from 'axios';

const Chart = {
  state: () => ({
    chartData: [
      {
        date_ms: 1641772800000,
        performance: 0.2,
      },
      {
        date_ms: 1641859200000,
        performance: 0.33,
      },
      {
        date_ms: 1641945600000,
        performance: 0.53,
      },
      {
        date_ms: 1642032000000,
        performance: 0.31,
      },
      {
        date_ms: 1642118400000,
        performance: 0.65,
      },
    ],
  }
  ),
  mutations: { },
  actions: { },
  getters: {
    allChartData: (state) => state.chartData,
  },
};
export default Chart;
