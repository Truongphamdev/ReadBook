// xử lý đóng mwor list book
let listBook = document.querySelector('.option')
let listBook_child = document.querySelector('.option_child')
openList = function() {
	listBook_child.style.display ='block'
}
closeList = function() {
	listBook_child.style.display ='none'
}
listBook.onclick = function() {
	if(listBook_child.style.display ==='block') {
		closeList()
	}else {
		openList()
	}
}
let currentIndex = 0
let slides = document.querySelectorAll('.slide')
let sliderContain = document.querySelector('.slider')
function nextSlide () {
	currentIndex = (currentIndex+1)%slides.length
	// tăng slide lên 1 index và chia lấy dư nó ví dụ 1%3 thì bằng 0 và dư 1
	sliderContain.style.transform = `translateX(-${currentIndex*1500}px)`
	// cho thuộc tính di chuyển ảnh theo chiều ngang (trục x) sau đó lấy index nhấn cho kích thước ảnh để ảnh có thể di chuyển đến vị trí đó
}
setInterval(nextSlide,5000)
// xử lý nút tim
let heartEmptys = document.querySelectorAll('.heart_empty')
let heartFulls = document.querySelectorAll('.heart_full')
// lặp qua chuyển node list về dạng mảng
let heartEmpty = [...heartEmptys]
let heartFull = [...heartFulls]
function openHeart(node) {
		node.style.display = 'inline-block'
}
function closeHeart(node) {
		node.style.display = 'none'
}
//heartEmpty.indexOf(node) để lấy chỉ mục của cái đang rỗng sau đó gọi hàm để thực hiện cái cần đóng
heartEmpty.forEach(function(node){
	node.onclick = function(e){
		if (node.style.display === 'inline-block') {
			closeHeart(node)
			openHeart(heartFull[heartEmpty.indexOf(node)])
		}
		else {
			closeHeart(heartFull[heartEmpty.indexOf(node)])
			openHeart(node)
		}
	}
})
heartFull.forEach(function(node){
	node.onclick = function(e) {
		if (node.style.display === 'inline-block') {
			openHeart(heartEmpty[heartFull.indexOf(node)])
			closeHeart(node)
		} else {
			closeHeart(heartEmpty[heartFull.indexOf(node)])
			openHeart(node)
		}
	}
})
