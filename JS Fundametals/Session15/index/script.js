// 1. Đếm xem có tất cả bao nhiêu từ trong 2 đoạn văn có độ dài lớn hơn 8
let count = 0;
let paras = document.getElementsByTagName("p");
for (let i = 0; i < paras.length; i++){
    count  += paras[i].textContent.match(/\b(\w+)\b/g).filter(s=>s.length>8).length; 
}
console.log(`Number of words of length 9 or more: ${count}`); 

// 2. Style cho các từ có độ dài lớn hơn 8 trong p1
let para1 = document.getElementsByClassName("p1")[0];
let s = para1.textContent.match(/\b(\w+)\b/g).filter(s=>s.length>8); 
for (let i = 0; i < s.length; i++){
    para1.innerHTML = para1.innerHTML.replace( new RegExp("\\b"+s[i]+"\\b","g"),"<span style='color:pink'>" + s[i] + "</span>")
}
// 3. Thay thế các từ có độ nhỏ hơn 8 trong p2 thành "Anh Ba đẹp trai 🤣". Lưu ý thay thế đúng không thì 0đ!!!
let para2 = document.getElementById("p2");
let w = para2.textContent.match(/\b(\w+)\b/g).filter(s=>s.length<8); 
for (let i = 0; i < w.length; i++){
    para2.innerHTML = para2.innerHTML.replace( new RegExp("\\b"+w[i]+"\\b","g"),"Anh Ba đẹp trai 🤣")
}
// 4. Thêm src, alt, href cho ảnh, link
let img = document.images[0];
let a = document.getElementsByTagName("a")[0];
img.src = "https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg";
img.alt = "photo"; 
a.href = "https://www.google.com/"; 
a.appendChild(img); 

// 5. Thêm background cho các ô ngẫu nhiên trong bảng (mỗi hàng 1 ô, style bằng .style.backgroundColor), và thay đổi nội dung trong các ô đó thành "😍 Mr. Ba đẹp trai"
let rows = document.body.children[3].rows;
for (let i = 0; i < rows.length; i++){
    let rand = rows[i].cells[Math.floor(Math.random() * 4)]; 
    rand.style.backgroundColor = "pink"; 
    rand.innerHTML = "😍 Mr. Ba đẹp trai"; 
}