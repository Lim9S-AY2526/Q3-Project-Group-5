let basefare = 50;
        let perKMrate = 15;
        let baseKM = 2;

        function computeFare(distance, discount=false) {
        let fare;
        if (distance <= baseKM) {
            fare = basefare;
        } else {
            fare = basefare + (distance - baseKM) * perKMrate;
        }
        if (discount) {
            fare = fare * 0.8;
        }
        return fare;
        }

        function showFare(discount) {
        let pickup = document.getElementById("pickup").value.trim().toLowerCase();
        let dropoff = document.getElementById("dropoff").value.trim().toLowerCase();

        let stations = {
            "north ave": 0,
            "quezon ave": 2,
            "gma kamuning": 4,
            "cubao": 6,
            "ortigas": 8,
            "shaw": 10,
            "boni": 11,
            "guadalupe": 12,
            "buendia": 14,
            "ayala": 15,
            "magallanes": 17,
            "taft": 18
        };

        if (!(pickup in stations) || !(dropoff in stations)) {
            document.getElementById("output").innerHTML = "Invalid station entered.";
            return;
        }

        let distance = Math.abs(stations[dropoff] - stations[pickup]);
        let total = computeFare(distance, discount);
        document.getElementById("output").innerHTML = "Fare: ₱" + total.toFixed(2);
        }

        function showInstructions() {
        alert("To compute the eSakay fare:\n\n" +
                "1. Identify your pickup location and destination.\n" +
                "2. Determine the total distance of your ride.\n" +
                "3. Multiply the distance beyond 2KM by Php 15.\n" +
                "4. Add the base fare of Php 50 (covers first 2KM).\n" +
                "5. Apply discounts (20% off for Senior, PWD, Students) if applicable.\n" +
                "6. Review promo codes before finalizing payment.");
        }
        function showFareMatrix() {
        document.getElementById("farematrix").style.display = "block";
        document.getElementById("farematrix").scrollIntoView({ behavior: "smooth" });
        }

      function showSchedule() {
  document.getElementById("schedule").style.display = "block";
  document.getElementById("schedule").scrollIntoView({ behavior: "smooth" });
}

    function verifyEmail() {
  document.getElementById("verifyMessage").innerHTML = "✅ Email verified successfully!";
}
