AFRAME.registerComponent("Crouching", {
    init: function () {
      this.crouch();
    },

    crouch: function () {
      window.addEventListener("keydown", (e) => {
          var cam = document.querySelector("#camera")
          pos = cam.getAtrribute("position")
        if (e.key === "c") {
            cam.setAttribute("position",{ x: pos.x, y: pos.y-0.5, z: pos.z});
    }
    })
    }
  });

          
  
    //       var cam = document.querySelector("#camera");
  
    //       pos = cam.getAttribute("position");
  
    //       ball.setAttribute("position", {
    //         x: pos.x,
    //         y: pos.y-1.2,
    //         z: pos.z,
    //       });
  
    //       var camera = document.querySelector("#camera").object3D;
  
    //       var direction = new THREE.Vector3();
    //       camera.getWorldDirection(direction);
  
    //       ball.setAttribute("velocity", direction.multiplyScalar(-10));
  
    //       var scene = document.querySelector("#scene");
  
    //       ball.setAttribute("dynamic-body", {
    //         shape: "sphere",
    //         mass: "10",
    //       });
  
    //       scene.appendChild(ball);
    //     }
    //   });
    
  