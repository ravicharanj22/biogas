const scanner = new Instascan.Scanner({ video: document.getElementById('qr-video') });

scanner.addListener('scan', function(content) {
    document.getElementById('result').innerHTML = `Scanned QR Code: ${content}`;
});

Instascan.Camera.getCameras().then(cameras => {
    if (cameras.length > 0) {
        scanner.start(cameras[0]);
    } else {
        console.error('No cameras found.');
    }
}).catch(error => {
    console.error(error);
});
