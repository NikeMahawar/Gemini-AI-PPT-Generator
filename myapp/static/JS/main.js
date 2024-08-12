// Function to show the modal
function showModal() {
    var modal = document.getElementById('modal-generate');
    modal.style.display = 'block';
}

// Function to hide the modal
function hideModal() {
    var modal = document.getElementById('modal-generate');
    modal.style.display = 'none';
}

// Event listener for the "Generate" button
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generate-button').addEventListener('click', function(e) {
        e.preventDefault();  // Prevent the default form submission
        setInterval(function(){showModal();},9500);  // Show the modal


        // Serialize form data and send it to the server via an AJAX POST request
        const formData = new FormData();
        formData.append('presentation_title', document.getElementById('presentation_title').value);
        formData.append('presenter_name', document.getElementById('presenter_name').value);
        formData.append('number_of_slide', document.getElementById('number_of_slide').value);
        formData.append('user_text', document.getElementById('user_text').value);
        formData.append('insert_image', document.getElementById('insert_image').checked);

        const template_choice = document.querySelector('input[name="template_choice"]:checked').value;
        formData.append('template_choice', template_choice);
        // ... append other form data similarly
        console.log([...formData]);  // Check the logged output to ensure the data is correct
        fetch('/generator', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();  // This assumes the server will return JSON
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});



var crsr = document.querySelector('#cursor')
var blur = document.querySelector('#cursor-blur')
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+'px';
    crsr.style.top=dets.y+'px';
    blur.style.left=dets.x-250 +'px';
    blur.style.top=dets.y-250 +'px';
})


gsap.to("#nav",{
    backgroundColor: "#000",
    height:"90px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end: "top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})
var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3
        crsr.style.border='1px solid #fff'
        crsr.style.backgroundColor='transparent'
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border='0px solid #6A0DAD'
        crsr.style.backgroundColor='#6A0DAD'
    })
})
gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scoller:"body",
        start:'top 70%',
        end:'top 65%',
        scrub:1
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scoller:"body",
        start:'top 70%',
        end:'top 65%',
        scrub:1
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:'body',
        start:"top 55%",
        end:"top 45%",
        scrub: 4,

    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:'body',
        start:"top 55%",
        end:"top 45%",
        scrub: 4,

    }
})


