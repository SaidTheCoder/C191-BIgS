AFRAME.registerComponent("bowling-balls", {
  init: function () {
    this.throwBall();
  },
  throwBall: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "z") {
        var ball = document.createElement("a-entity");

        ball.setAttribute("gltf-model", "./models/bowling_ball/scene.gltf");

        ball.setAttribute("scale", { x: 1, y: 1,  z: 1});

        var cam = document.querySelector("#camera");

        pos = cam.getAttribute("position");

        ball.setAttribute("position", {
          x: pos.x+0.5,
          y: pos.y-0.5,
          z: pos.z+2,
        });

        var camera = document.querySelector("#camera").object3D;

        var direction = new THREE.Vector3();
        camera.getWorldDirection(direction);

        ball.setAttribute("velocity", direction.multiplyScalar(-50));

        var scene = document.querySelector("#scene");

        ball.setAttribute("dynamic-body", {
          shape: "sphere",
          mass: "10",
        });

        scene.appendChild(ball);
      }
    });
  },
});


