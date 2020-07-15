const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, them play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.onplay();
    };
  } catch (error) {
    // Catch ERROR here
    console.log(error);
  }
}

button.addEventListener('click', async () => {
  // Disable Button
  button.disabled = true;
  // Start PIP
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

selectMediaStream();
