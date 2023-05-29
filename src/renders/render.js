document.addEventListener("DOMContentLoaded", function() {
	/*
		## GET ELEMENTS
	*/
	let btn_notification = this.getElementById("send__notification")
	let btn_create_window = this.getElementById("create__window")
	
	let title = this.getElementById("input__title")
	let txt = this.getElementById("input__txt")
	let windowSize = this.getElementById("window_resolution")


	/*
		## BTN Actions
	*/
	btn_notification.onclick = () => {
		window.ipcAPI.sendNotification(txt.value, title.value)
	}
	
	btn_create_window.onclick = () => {
		let x = 1920 
		let y = 1080
		console.log(windowSize.value)

		if (windowSize.value == "size2") {
			x = 1280
			y = 800
		} else if (windowSize.value == "size3") {
			x = 800
			y = 600
		}

		window.ipcAPI.createWindow(x, y)
	}

})

