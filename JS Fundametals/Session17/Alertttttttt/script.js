//Tạo một nút click để hiển thị thông báo trên góc trình duyệt: sau 2s tự động tắt 
//Có thể bấm nhiều thông báo

let btn = document.getElementById("open-button");
let alerts = document.getElementsByClassName("alerts")[0]; 

btn.onclick = function () {
    let alert = document.createElement("div");
    alert.setAttribute("class", "alert"); 
    alert.innerHTML = `<span class="close-btn">&times;</span>  
                        Ahihihihihihihihihihihhi`
    alerts.appendChild(alert);
   //auto
   setTimeout(function () {
    alert.style.opacity = "0";
    alert.style.display= "none"
    }, 2000); 
    
}

//hoặc có nút tắt trong bảng thông báo 
let current = document.getElementsByClassName("close-btn");
for (let i = 0; i < current.length; i++) {
  current[i].onclick = function(){
    current[i].parentElement.style.opacity = "0";
    setTimeout(function(){ current[i].parentElement.style.display = "none"}, 600);
  }
}

// 


