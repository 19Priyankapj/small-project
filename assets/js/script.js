// document.addEventListener('DOMContentLoaded', ()=>{
//     const canvas = new fabric.Canvas('canvas');
//     const image = document.getElementById('file');
//     const brightness = document.getElementById('brightness');
//     const contrast = document.getElementById('contrast');
//     const saturation = document.getElementById('saturation');
//     const shadow = document.getElementById('shadow');
//     const hue = document.getElementById('hue');
//     const blur = document.getElementById('blur');
//     const downloadbtn = document.getElementById('download')

//     function handleImage (e){
//         const file = e.target.files[0]//[image0, image1, image2, image3]
//         if(file){
//             console.log(file);
//         }
//     }

// })


 //function editRange (){
     //const bright = document.getElementById('bright');
    // const con = document.getElementById('con');
    // const sat = document.getElementById('sat');
     //const blu = document.getElementById('blu');
     //const hu = document.getElementById('hu');
     //const sha = document.getElementById('sha');
     //const exp = document.getElementById('exp');
 //}

var brightnessClick = false;
function brightnessHandler(){
    const brightnessInput = document.getElementById('brightness');
    brightnessClick = !brightnessClick;
    if(brightnessClick){
        brightnessInput.style.display = "block"
    }
    else{
        brightnessInput.style.display = "none"

    }
}

//steps for editing

document.addEventListener('DOMContentLoaded', ()=>{

    //step1: get all html elements using id for reference

    const fileInput = document.getElementById('file');
    const download = document.getElementById('download');
    const canvas = document.getElementById('canvas');
    const brightnessInput = document.getElementById('brightness');
    const contrast = document.getElementById('contrast');
    const saturation = document.getElementById('saturation');
    const hue = document.getElementById('hue');
    const shadow = document.getElementById('shadow');
    const blur = document.getElementById('blur');
    const explore = document.getElementById('explore');
    const ctx = canvas.getContext('2d');

    let img;

    fileInput .addEventListener('change',getImage);

    brightnessInput.addEventListener('input',applyEffects);
    contrast.addEventListener('input',applyEffects);
    saturation.addEventListener('input',applyEffects);
    hue.addEventListener('input',applyEffects);
    download.addEventListener('click',downloadImage);




// select the file step 3
    function getImage (e){
        const file = e.target.files[0]; //[image0, image1, image2...]
        
        const reader = new FileReader(); //reading selected file
        reader.onload = function (event){
            img = new Image(); //creating image tag
            img .onload = function (){
                canvas.width = img.width; //declaraing image width
                canvas.height = img.height; //declaring image height
                ctx.drawImage(img, 0, 0);
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);  //read the selected files url
    }

    function applyEffects (){
        if(!img)return

        const brightnessValue = brightnessInput.value;
        const contrastvalue = contrast.value;
        const saturationvalue = saturation.value;
        const huevalue = hue.value;
        ctx.filter = `brightness(${brightnessValue}%) contrast(${contrastvalue}%) saturate(${saturationvalue}%)hue(${huevalue}%)`;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }

    function downloadImage(){
        if(!img) return;
        const imageURL = canvas.toDataURL('image/png')

        const link = document.createElement('a');
        link.href = imageURL; //<a href="jhjhkhk"></a>
        link.download = 'editedImage.png';document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }

})

    




