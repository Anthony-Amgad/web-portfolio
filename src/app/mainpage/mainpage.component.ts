import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  displayM = "none";
  opacityM = "0%";

  async openModal(){
  
    this.displayM = "block";
    for(var i = 1; i <= 100; i++){
      this.opacityM = i.toString() + "%";
      await new Promise(f => setTimeout(f, 1));
    }
    
  }

  async onCloseHandled() {
    for(var i = 99; i >= 0; i--){
      this.opacityM = i.toString() + "%";
      await new Promise(f => setTimeout(f, 1));
    }
    this.displayM = "none";  
  }

  constructor(private router:Router) { }

  ngOnInit(): void {

    const scene = new THREE.Scene()
    
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / (window.innerHeight),
        0.1,
        30000
    )
    camera.position.set(0, -7.5, 20)
    
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    let scenediv = <HTMLElement>document.getElementById("scenediv");
    scenediv.appendChild(renderer.domElement)
    
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    
    // let astronaut_mixer: THREE.AnimationMixer
    let naruto_mixer: THREE.AnimationMixer
    let pikachu_mixer: THREE.AnimationMixer
    let sans_mixer: THREE.AnimationMixer
    let spiderman_mixer: THREE.AnimationMixer
    let cdplayer_mixer: THREE.AnimationMixer

    // let astronaut_modelReady = false
    let zap_modelReady = false
    let jokerp5mask_modelReady = false
    let naruto_modelReady = false
    let pikachu_modelReady = false
    let sans_modelReady = false
    let spiderman_modelReady = false
    let desk_modelReady = false
    let laptop_modelReady = false
    let mouse_modelReady = false
    let pewdiepiechair_modelReady = false
    let slifer_modelReady = false
    let treehouse_modelReady = false
    let cdplayer_modelReady = false
    // let arcreactor_modelReady = false
    // let cassettetape_modelReady = false
    // let headphonestand_modelReady = false
    // let headphones_modelReady = false
    // let batarang_modelReady = false
    // let chambercard_modelReady = false
    // let khonsuskull_modelReady = false
    // let titansword_modelReady = false
    // let dominator_modelReady = false
    
    const gltfLoader = new GLTFLoader()
    
    const light1 = new THREE.DirectionalLight(new THREE.Color(0xffcccc), 2)
    light1.position.set(-1, 1, 1)
    scene.add(light1)

    const light2 = new THREE.DirectionalLight(new THREE.Color(0xccffcc), 2)
    light2.position.set(1, 1, 1)
    scene.add(light2)

    const light3 = new THREE.DirectionalLight(new THREE.Color(0xccccff), 2)
    light3.position.set(0, -1, 0)
    scene.add(light3)

    let naruto: THREE.Group<THREE.Object3DEventMap>;

    let materialArray = [];
    let texture_ft = new THREE.TextureLoader().load( 'assets/skybox/ft.jpg');
    let texture_bk = new THREE.TextureLoader().load( 'assets/skybox/bk.jpg');
    let texture_up = new THREE.TextureLoader().load( 'assets/skybox/up.jpg');
    let texture_dn = new THREE.TextureLoader().load( 'assets/skybox/dn.jpg');
    let texture_rt = new THREE.TextureLoader().load( 'assets/skybox/rt.jpg');
    let texture_lf = new THREE.TextureLoader().load( 'assets/skybox/lf.jpg');
      
    materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));
      
    for (let i = 0; i < 6; i++)
      materialArray[i].side = THREE.BackSide;
      
    let skyboxGeo = new THREE.BoxGeometry( 10000, 10000, 10000);
    let skybox = new THREE.Mesh( skyboxGeo, materialArray );
    scene.add( skybox );
    
    // gltfLoader.load(
    //   "assets/glbs/astronaut.glb",
    //     (gltf: GLTF) => {
    //         gltf.scene.position.z += 6
    //         gltf.scene.position.y -= 15.5
    //         gltf.scene.position.x += 1
    //         astronaut_mixer = new THREE.AnimationMixer(gltf.scene)                 
    //         astronaut_mixer.clipAction(gltf.animations[2]).play()           

    //         scene.add(gltf.scene)

    //         const bbox = new THREE.Box3().setFromObject(gltf.scene)
    //         controls.target.x = (bbox.min.x + bbox.max.x) / 2
    //         controls.target.y = ((bbox.min.y + bbox.max.y) / 2)+1
    //         controls.target.z = (bbox.min.z + bbox.max.z) / 2

    //         astronaut_modelReady = true
    //     },
    //     (error) => {
    //         console.log(error)
    //     }
    // )

    gltfLoader.load(
      "assets/glbs/zap.glb",
        (gltf: GLTF) => {         
            gltf.scene.scale.set(30,30,30)
            gltf.scene.position.z += 4.1
            gltf.scene.position.y -= 13.5
            gltf.scene.position.x += 0.5

            scene.add(gltf.scene)
            zap_modelReady = true

            const bbox = new THREE.Box3().setFromObject(gltf.scene)
            controls.target.x = (bbox.min.x + bbox.max.x) / 2
            controls.target.y = ((bbox.min.y + bbox.max.y) / 2)+1
            controls.target.z = (bbox.min.z + bbox.max.z) / 2
        },
        (error) => {
            console.log(error)
        }
    )

    // gltfLoader.load(
    //   "assets/glbs/titansword.glb",
    //     (gltf: GLTF) => {         
    //         gltf.scene.scale.set(0.1,0.1,0.1)
    //         gltf.scene.position.z += 3.25
    //         gltf.scene.position.y -= 11.5
    //         gltf.scene.position.x += 0
    //         gltf.scene.rotation.y += 3
    //         gltf.scene.rotation.z += 1
    //         gltf.scene.rotation.x += 1

    //         scene.add(gltf.scene)
    //         titansword_modelReady = true
    //     },
    //     (error) => {
    //         console.log(error)
    //     }
    // )

    gltfLoader.load(
      "assets/glbs/jokerp5mask.glb",
        (gltf: GLTF) => {         
            gltf.scene.scale.set(65,65,65)
            gltf.scene.position.z += 7.25
            gltf.scene.position.y -= 16.35
            gltf.scene.position.x += 2.5
            gltf.scene.rotation.x -= 1.5
            gltf.scene.rotation.z -= 0.5

            scene.add(gltf.scene)
            jokerp5mask_modelReady = true
        },
        (error) => {
            console.log(error)
        }
    )

    // gltfLoader.load(
    //   "assets/glbs/dominator.glb",
    //     (gltf: GLTF) => {         
    //         gltf.scene.scale.set(0.002,0.002,0.002)
    //         gltf.scene.position.z -= 1.5
    //         gltf.scene.position.y -= 15.5
    //         gltf.scene.position.x -= 5.25
    //         gltf.scene.rotation.x += 1.5

    //         scene.add(gltf.scene)
    //         dominator_modelReady = true
    //     },
    //     (error) => {
    //         console.log(error)
    //     }
    // )

    gltfLoader.load(
      "assets/glbs/desk.glb",
        (gltf: GLTF) => {         
            gltf.scene.scale.set(1,1,1.2)
            gltf.scene.position.z += 4
            gltf.scene.position.y -= 25.75
            gltf.scene.position.x -= 9.75
            gltf.scene.rotation.y += 2.75

            scene.add(gltf.scene)
            desk_modelReady = true
        },
        (error) => {
            console.log(error)
        }
    )
    
    gltfLoader.load(
      "assets/glbs/laptop.glb",
        (gltf: GLTF) => {         
            gltf.scene.scale.set(1,1,1)
            gltf.scene.position.z += 6.85
            gltf.scene.position.y -= 14
            gltf.scene.position.x -= 12.15
            gltf.scene.rotation.y -= 14.5

            scene.add(gltf.scene)
            laptop_modelReady = true
        },
        (error) => {
            console.log(error)
        }
    )

    gltfLoader.load(
        "assets/glbs/cdplayer.glb",
          (gltf: GLTF) => {         
            gltf.scene.scale.set(0.05,0.05,0.05)
            gltf.scene.position.z += 5.75
            gltf.scene.position.y -= 14.01
            gltf.scene.position.x -= 11.9

            cdplayer_mixer = new THREE.AnimationMixer(gltf.scene)
            cdplayer_mixer.clipAction(gltf.animations[0]).play()

            scene.add(gltf.scene)
            cdplayer_modelReady = true
          },
          (error) => {
              console.log(error)
          }
      )
      
      // gltfLoader.load(
      //     "assets/glbs/headphonestand.glb",
      //       (gltf: GLTF) => {         
      //         gltf.scene.scale.set(1.75,1.75,1.75)
      //         gltf.scene.position.z += 5.5
      //         gltf.scene.position.y -= 14.01
      //         gltf.scene.position.x -= 12.5
  
      //         scene.add(gltf.scene)
      //         headphonestand_modelReady = true
      //       },
      //       (error) => {
      //           console.log(error)
      //       }
      //   )
        
        // gltfLoader.load(
        //     "assets/glbs/headphones.glb",
        //       (gltf: GLTF) => {         
        //         gltf.scene.scale.set(0.01,0.01,0.01)
        //         gltf.scene.position.z += 5.55
        //         gltf.scene.position.y -= 13.58
        //         gltf.scene.position.x -= 12.5
        //         gltf.scene.rotation.x += 1.5
    
        //         scene.add(gltf.scene)
        //         headphones_modelReady = true
        //       },
        //       (error) => {
        //           console.log(error)
        //       }
        //   )

      // gltfLoader.load(
      //   "assets/glbs/arcreactor.glb",
      //     (gltf: GLTF) => {         
      //       gltf.scene.scale.set(0.5,0.5,0.5)
      //       gltf.scene.position.z += 8.15
      //       gltf.scene.position.y -= 14.03
      //       gltf.scene.position.x -= 14.55
      //       gltf.scene.rotation.y += 2

      //       scene.add(gltf.scene)
      //       arcreactor_modelReady = true
      //     },
      //     (error) => {
      //         console.log(error)
      //     }
      // )

      // gltfLoader.load(
      //   "assets/glbs/cassettetape.glb",
      //     (gltf: GLTF) => {         
      //       gltf.scene.scale.set(0.05,0.05,0.05)
      //       gltf.scene.position.z += 8.15
      //       gltf.scene.position.y -= 14.03
      //       gltf.scene.position.x -= 13.75
      //       gltf.scene.rotation.y += 0.5

      //       scene.add(gltf.scene)
      //       cassettetape_modelReady = true
      //     },
      //     (error) => {
      //         console.log(error)
      //     }
      // )

    // gltfLoader.load(
    //   "assets/glbs/batarang.glb",
    //     (gltf: GLTF) => {         
    //         gltf.scene.scale.set(0.002,0.002,0.002)
    //         gltf.scene.position.y -= 8.75 
    //         gltf.scene.position.x += 5.09
    //         gltf.scene.position.z += 2.5
    //         gltf.scene.rotation.y += 2

    //         scene.add(gltf.scene)
    //         batarang_modelReady = true
    //     },
    //     (error) => {
    //         console.log(error)
    //     }
    // )
    
    // gltfLoader.load(
    //   "assets/glbs/khonsuskull.glb",
    //     (gltf: GLTF) => {         
    //         gltf.scene.scale.set(0.002,0.002,0.002)
    //         gltf.scene.position.y -= 5.5 
    //         gltf.scene.position.x += 2.5
    //         gltf.scene.position.z += 5.85
        

    //         scene.add(gltf.scene)
    //         khonsuskull_modelReady = true
    //     },
    //     (error) => {
    //         console.log(error)
    //     }
    // )

    // gltfLoader.load(
    //   "assets/glbs/chambercard.glb",
    //     (gltf: GLTF) => {         
    //         gltf.scene.scale.set(0.002,0.002,0.002)
    //         gltf.scene.position.y -= 13.94 
    //         gltf.scene.position.x -= 12.5
    //         gltf.scene.position.z += 6
    //         gltf.scene.rotation.x += 2

    //         scene.add(gltf.scene)
    //         chambercard_modelReady = true
    //     },
    //     (error) => {
    //         console.log(error)
    //     }
    // )

    gltfLoader.load(
      "assets/glbs/mouse.glb",
        (gltf: GLTF) => {         
            gltf.scene.scale.set(0.05,0.05,0.05)
            gltf.scene.position.z += 6.5
            gltf.scene.position.y -= 13.98
            gltf.scene.position.x -= 12.5
            gltf.scene.rotation.y -= 0.75

            scene.add(gltf.scene)
            mouse_modelReady = true
        },
        (error) => {
            console.log(error)
        }
    )

    gltfLoader.load(
      "assets/glbs/pewdiepiechair.glb",
        (gltf: GLTF) => {         
            gltf.scene.scale.set(1.25,1.25,1.25)
            gltf.scene.position.z += 10
            gltf.scene.position.y -= 15.5
            gltf.scene.position.x -= 13
            gltf.scene.rotation.y += 1.5

            scene.add(gltf.scene)
            pewdiepiechair_modelReady = true
        },
        (error) => {
            console.log(error)
        }
    )

    gltfLoader.load(
      "assets/glbs/slifer.glb",
        (gltf: GLTF) => {         
            gltf.scene.scale.set(0.1,0.1,0.1)
            gltf.scene.position.z -= 20
            gltf.scene.position.y += 10
            gltf.scene.position.x -= 30
            gltf.scene.rotation.y += 1
            gltf.scene.rotation.z += 1

            scene.add(gltf.scene)
            slifer_modelReady = true
        },
        (error) => {
            console.log(error)
        }
    )

    gltfLoader.load(
      "assets/glbs/naruto.glb",
        (gltf: GLTF) => {         
            gltf.scene.position.y -= 15.5
          
            naruto_mixer = new THREE.AnimationMixer(gltf.scene)
            naruto_mixer.clipAction(gltf.animations[0]).play()

            naruto = gltf.scene
            scene.add(gltf.scene)

            naruto_modelReady = true
        },
        (error) => {
            console.log(error)
        }
    )

    gltfLoader.load(
      "assets/glbs/pikachu.glb",
        (gltf: GLTF) => {         
            gltf.scene.position.y -= 14.5
            gltf.scene.position.x += 4.5
            gltf.scene.position.z += 4.5
          
            pikachu_mixer = new THREE.AnimationMixer(gltf.scene)
            pikachu_mixer.clipAction(gltf.animations[1]).play()

            scene.add(gltf.scene)

            pikachu_modelReady = true
        },
        (error) => {
            console.log(error)
        }
    )

    gltfLoader.load(
      "assets/glbs/spiderman.glb",
        (gltf: GLTF) => {         
            gltf.scene.position.y -= 8.5
            gltf.scene.position.x += 4.5
            gltf.scene.position.z += 2.5
            gltf.scene.rotation.z += 3.1
          
            spiderman_mixer = new THREE.AnimationMixer(gltf.scene)
            spiderman_mixer.clipAction(gltf.animations[0]).play()

            scene.add(gltf.scene)

            spiderman_modelReady = true
        },
        (error) => {
            console.log(error)
        }
    )

    gltfLoader.load(
      "assets/glbs/sans.glb",
        (gltf: GLTF) => {       
            gltf.scene.scale.set(0.03,0.03,0.03)
            gltf.scene.position.y -= 15.5
            gltf.scene.position.x += 7
            gltf.scene.position.z += 1
            gltf.scene.rotation.y -= 1
          
            sans_mixer = new THREE.AnimationMixer(gltf.scene)
            sans_mixer.clipAction(gltf.animations[0]).play()

            scene.add(gltf.scene)

            sans_modelReady = true
        },
        (error) => {
            console.log(error)
        }
    )

    gltfLoader.load(
      "assets/glbs/treehouse.glb",
        (gltf: GLTF) => {
            scene.add(gltf.scene)
            treehouse_modelReady = true
        },
        (error) => {
            console.log(error)
        }
    )
    
    window.addEventListener('resize', onWindowResize, false)
    function onWindowResize() {
        camera.aspect = window.innerWidth / (window.innerHeight)
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        render()
    }
    
    const clock = new THREE.Clock()

    var t = 0;
    function animate_naruto(){
      t += 0.01;          
      naruto.rotation.y = -t;
      naruto.position.x = 11*Math.cos(t);
      naruto.position.z = 11*Math.sin(t); // These to strings make it work
    }
    
    function animate() {
        requestAnimationFrame(animate)
        controls.update()
        let clockd = clock.getDelta()
        // if (astronaut_modelReady) astronaut_mixer.update(clockd)
        if (naruto_modelReady) naruto_mixer.update(clockd)
        if (naruto_modelReady) animate_naruto()
        if (pikachu_modelReady) pikachu_mixer.update(clockd)
        if (sans_modelReady) sans_mixer.update(clockd)
        if (spiderman_modelReady) spiderman_mixer.update(clockd)
        if (cdplayer_modelReady) cdplayer_mixer.update(clockd)
        if(
            zap_modelReady
            && jokerp5mask_modelReady
            && naruto_modelReady
            && pikachu_modelReady
            && sans_modelReady
            && spiderman_modelReady
            && desk_modelReady
            && laptop_modelReady
            && mouse_modelReady
            && pewdiepiechair_modelReady
            && slifer_modelReady
            && treehouse_modelReady
            && flag){
                loadingdiv.hidden = true;
                mainscreendiv.hidden = false;
                flag = false
            }
    
        render()
    }
    
    function render() {
        renderer.render(scene, camera)
    }

    let loadingdiv = <HTMLElement>document.getElementById("loading");
    let mainscreendiv = <HTMLElement>document.getElementById("mainscreen");
    let flag = true;

    
    
    
    animate()

  }

  async onPage(p: any){
    let loadingdiv = <HTMLElement>document.getElementById("loading");
    let mainscreendiv = <HTMLElement>document.getElementById("mainscreen");
    loadingdiv.style.opacity = "0";
    mainscreendiv.hidden = true;
    loadingdiv.hidden = false;
    for(var i = 1; i <= 100; i++){
      loadingdiv.style.opacity = i.toString()+"%";
      await new Promise(f => setTimeout(f, 10));;
    }
    await new Promise(f => setTimeout(f, 40));;
    this.router.navigate([p]);
  }

}
