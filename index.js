        let img1 = document.querySelector("#img1")
        let img2 = document.querySelector("#img2")
        let img3 = document.querySelector("#img3")
        let arr1 = document.querySelector("#arrowOne")
        let arr2 = document.querySelector("#arrowTwo")
        let arr3 = document.getElementById("arrowThree")
        img1.addEventListener('mouseenter', e=>{
            img1.style.width = "56%";
            img2.style.width = "22%";
            img3.style.width = "22%";
            arr1.style.display = "flex";
            arr2.style.display = "none";
            arr3.style.display = "none";

        })
        img2.addEventListener('mouseenter', e=>{
            console.log(e.target)
            img1.style.width = "22%";
            img2.style.width = "56%";
            img3.style.width = "22%";
            arr1.style.display = "none";
            arr2.style.display = "flex";
            arr3.style.display = "none";
        })
        img3.addEventListener('mouseenter', e=>{
            console.log(e.target)
            img1.style.width = "22%";
            img2.style.width = "22%";
            img3.style.width = "56%";
            arr1.style.display = "none";
            arr2.style.display = "none";
            arr3.style.display = "flex";
        })
