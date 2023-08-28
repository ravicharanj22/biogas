document.addEventListener("DOMContentLoaded", function () {
    const scannerContainer = document.getElementById("scanner-container");
    const qrVideo = document.getElementById("qr-video");
    const resultDiv = document.getElementById("result");
  
    // Initialize the scanner
    const scanner = new Instascan.Scanner({ video: qrVideo });
  
    // Listen for scan event
    scanner.addListener("scan", function (content) {
      resultDiv.textContent = "Scanned QR Code: " + content;
  
      // Automatically redirect to the scanned URL
      window.location.href = content; // This will navigate to the scanned URL
    });
  
    // Start scanning
    Instascan.Camera.getCameras().then(function (cameras) {
      if (cameras.length > 0) {
        scanner.start(cameras[0]);
      } else {
        console.error("No cameras found.");
        resultDiv.textContent = "No cameras found.";
      }
    });
  
    // Attach a click event to stop scanning
    qrVideo.addEventListener("click", function () {
      scanner.stop();
      resultDiv.textContent = "Scanning stopped.";
    });
  });
  