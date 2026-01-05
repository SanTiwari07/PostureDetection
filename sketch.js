let capture;
let posenet;
let pose, skeleton;

// Big rectangle (HD-ish)
const CANVAS_WIDTH = 900;
const CANVAS_HEIGHT = 500;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

  capture = createCapture(VIDEO);
  capture.size(CANVAS_WIDTH, CANVAS_HEIGHT);
  capture.hide();

  posenet = ml5.poseNet(capture, () => {
    console.log("PoseNet loaded");
  });
  posenet.on("pose", gotPoses);
}

function gotPoses(poses) {
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}

function draw() {
  // Live feed
  image(capture, 0, 0, width, height);

  // Skeleton
  if (skeleton) {
    stroke(0, 180, 0);
    strokeWeight(3);
    for (let i = 0; i < skeleton.length; i++) {
      let a = skeleton[i][0];
      let b = skeleton[i][1];
      line(a.position.x, a.position.y, b.position.x, b.position.y);
    }
  }

  // Face + red nose
  if (pose) {
    noStroke();

    // Face keypoints (white)
    fill(255);
    for (let i = 0; i <= 4; i++) {
      let kp = pose.keypoints[i];
      if (kp.score > 0.5) {
        ellipse(kp.position.x, kp.position.y, 8);
      }
    }

    // Red nose dot
    let nose = pose.keypoints[0];
    if (nose.score > 0.5) {
      fill(255, 0, 0);
      ellipse(nose.position.x, nose.position.y, 16);
    }
  }
}
