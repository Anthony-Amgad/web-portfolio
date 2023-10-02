import { Component, OnInit } from '@angular/core';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Stats from 'three/examples/jsm/libs/stats.module'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'web-portfolio';

  constructor(){}

  ngOnInit(): void {

    const scene = new THREE.Scene()
    
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / (window.innerHeight/1.5),
        0.1,
        30000
    )
    camera.position.set(0, -11.5, 15)
    
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight/1.5)
    let scenediv = <HTMLElement>document.getElementById("scenediv");
    scenediv.appendChild(renderer.domElement)
    
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    
    let astronaut_mixer: THREE.AnimationMixer
    let naruto_mixer: THREE.AnimationMixer
    let pikachu_mixer: THREE.AnimationMixer

    let astronaut_modelReady = false
    let naruto_modelReady = false
    let pikachu_modelReady = false
    
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
    let texture_ft = new THREE.TextureLoader().load( 'assets/penguins/tropic_ft.jpg');
    let texture_bk = new THREE.TextureLoader().load( 'assets/penguins/tropic_bk.jpg');
    let texture_up = new THREE.TextureLoader().load( 'assets/penguins/tropic_up.jpg');
    let texture_dn = new THREE.TextureLoader().load( 'assets/penguins/tropic_dn.jpg');
    let texture_rt = new THREE.TextureLoader().load( 'assets/penguins/tropic_rt.jpg');
    let texture_lf = new THREE.TextureLoader().load( 'assets/penguins/tropic_lf.jpg');
      
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
      

    gltfLoader.load(
      "assets/astronaut.glb",
        (gltf: GLTF) => {
            gltf.scene.position.z += 6
            gltf.scene.position.y -= 15.5
            gltf.scene.position.x += 1
            astronaut_mixer = new THREE.AnimationMixer(gltf.scene)                 
            astronaut_mixer.clipAction(gltf.animations[2]).play()           

            scene.add(gltf.scene)

            const bbox = new THREE.Box3().setFromObject(gltf.scene)
            controls.target.x = (bbox.min.x + bbox.max.x) / 2
            controls.target.y = ((bbox.min.y + bbox.max.y) / 2)+1
            controls.target.z = (bbox.min.z + bbox.max.z) / 2

            astronaut_modelReady = true
        },
        (error) => {
            console.log(error)
        }
    )

    gltfLoader.load(
      "assets/zap.glb",
        (gltf: GLTF) => {         
            gltf.scene.scale.set(30,30,30)
            gltf.scene.position.z += 4.1
            gltf.scene.position.y -= 13.5
            gltf.scene.position.x += 0.5

            scene.add(gltf.scene)
        },
        (error) => {
            console.log(error)
        }
    )

    gltfLoader.load(
      "assets/naruto.glb",
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
      "assets/pikachu.glb",
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
      "assets/treehouse.glb",
        (gltf: GLTF) => {

            scene.add(gltf.scene)
        },
        (error) => {
            console.log(error)
        }
    )
    
    window.addEventListener('resize', onWindowResize, false)
    function onWindowResize() {
        camera.aspect = window.innerWidth / (window.innerHeight/1.5)
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight/1.5)
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
        animate_naruto()
        controls.update()
        let clockd = clock.getDelta()
        if (astronaut_modelReady) astronaut_mixer.update(clockd)
        if (naruto_modelReady) naruto_mixer.update(clockd)
        if (pikachu_modelReady) pikachu_mixer.update(clockd)
        render()
    }
    
    function render() {
        renderer.render(scene, camera)
    }
    
    animate()

  }

}
