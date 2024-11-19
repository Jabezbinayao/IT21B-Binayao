class ChartCreator {
    constructor(dataUrl) {
      this.dataUrl = dataUrl;
      this.barCtx = document.getElementById("barChart");
      this.pieCtx = document.getElementById("pieChart");
    }
  
    async fetchData() {
      try {
        const response = await fetch(this.dataUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return await response.json();
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    }
  
    createBarChart(data) {
      new Chart(this.barCtx, {
        type: "bar",
        data: {
          labels: ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo"],
          datasets: [
            {
              label: "# of Votes",
              data: data.values,
              borderWidth: 1,
              backgroundColor: [
                "red",
                "orange",
                "yellow",
                "green",
                "blue",
                "indigo",
              ],
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  
    createPieChart(data) {
      new Chart(this.pieCtx, {
        type: "pie",
        data: {
          labels: ["Group1", "Group2", "Group3", "Group4", "Group5", "Group6"],
          datasets: [
            {
              data: data.values,
              backgroundColor: [
                "red",
                "orange",
                "yellow",
                "green",
                "blue",
                "indigo",
              ],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
            },
          },
        },
      });
    }
  
    async init() {
      const data = await this.fetchData();
      if (data) {
        this.createBarChart(data);
        this.createPieChart(data);
      }
    }
  }
  
  const chartCreator = new ChartCreator("chart.json");
  chartCreator.init();