function calculateMileage() {
    const tripName = document.getElementById("trip-name").value; //variables for calculating mileage and fuel consumption
    const startingMileage = parseFloat(document.getElementById("starting-mileage").value);
    const endingMileage = parseFloat(document.getElementById("ending-mileage").value);
    const gallonsUsed = parseFloat(document.getElementById("gallons-used").value);
    const totalMilesTraveled = endingMileage - startingMileage; //logic for total miles traveled
    const mileage = totalMilesTraveled / gallonsUsed;
    const tripSummary = { //setting array for inputs
      "Trip Name": tripName,
      "Total Miles Traveled": totalMilesTraveled,
      "Gallons of Gas Consumed": gallonsUsed,
      "Fuel Economy (MPG) for Trip": mileage.toFixed(1)
    };
    localStorage.setItem("tripSummary", JSON.stringify(tripSummary)); 

    const windowFeatures = "width=400,height=400,resizable,scrollbars"; //creating pop up window for the results page
    const resultsPageUrl = "results.htm";
    window.open(resultsPageUrl, "_blank", windowFeatures);
  }