AFRAME.registerComponent("marker-handler",{
    init:async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("Marker found")
            var buttonDiv=document.getElementById("button-div")
            buttonDiv.style.display="flex"
            var ratingButton=document.getElementById("rating-button")
            var orderButton=document.getElementById("order-button")
            ratingButton.addEventListener("click",()=>{
                swal({
                    icon:"warning",
                    title:"Rate The Dish",
                    text:"We would love to hear you rate this dish",
                })

            })
            orderButton.addEventListener("click",()=>{
                swal({
                    icon:"https://i.imgur.com/4NZ6uLY.jpg",
                    title:"Thanks for ordering",
                    text:"Your order will be served soon",

                })
            })

        })

        this.el.addEventListener("markerLost",()=>{
            console.log("marker lost")
            var buttonDiv=document.getElementById("button-div")
            buttonDiv.style.display="none"
            
        })
    }
})