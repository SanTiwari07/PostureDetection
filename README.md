# PoseNet Live Skeleton Detection

This project demonstrates real-time human pose detection using **PoseNet** with **ml5.js** and **p5.js**. It captures live webcam video, detects key body joints, and renders a full skeleton overlay along with facial keypoints and a highlighted nose marker.

## Features

- Real-time webcam feed
- Pose detection using PoseNet
- Full body skeleton rendering
- Face keypoints visualization
- Highlighted red nose for easy tracking
- Clean white UI with centered large video feed

## Tech Stack

- HTML5
- JavaScript
- p5.js
- ml5.js (PoseNet)

## Project Structure

├── index.html
├── sketch.js
└── README.md


## How It Works

1. The webcam feed is captured using `p5.js`.
2. PoseNet (via `ml5.js`) detects human body keypoints.
3. Detected keypoints are connected to form a skeleton.
4. Facial landmarks are displayed in white.
5. The nose keypoint is emphasized with a red circle.

## Setup Instructions

1. Clone or download the project.
2. Ensure you have a webcam connected.
3. Open `index.html` using a local server  
   *(recommended: Live Server in VS Code)*.
4. Allow camera access when prompted.

## Notes

- This project uses **PoseNet Single Pose** mode.
- Best results are achieved with good lighting and a clear view of the person.
- Designed for learning and experimentation with computer vision.

## Future Improvements

- Push-up or squat detection
- Repetition counter
- Multi-person pose tracking
- Gesture-based controls

## License

This project is for educational purposes and experimentation.
