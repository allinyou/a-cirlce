function Toasts() {
    this.timeout = null;
}
Toasts.prototype.showToast = function (opa) {
    const title = opa.title?opa.title:'toast的title'
    const dur = opa.duration?opa.duration:2000;
    const toasts = document.querySelectorAll('.toast');
    const app = document.querySelector('#app');
	if (toasts.length>0){
		clearTimeout(this.timeout);
		this.timeout = setTimeout(function(){
			app.removeChild(toasts[0]);
		},dur)
		return;
	}
	var div = document.createElement('div');
	div.className = 'toast';
	if (opa.title){
		div.innerHTML = title;
    }
    app.appendChild(div);
	this.timeout = setTimeout(function(){
		app.removeChild(div);
	},dur)
}

Toasts.prototype.showLoading = function(title) {
    title = title || '请稍后';
    let loadingBox = document.querySelector('.loading-box');
    const app = document.querySelector('#app');
    if (!loadingBox) {
        loadingBox = document.createElement('div');
        loadingBox.className = 'loading-box';
        app.appendChild(loadingBox);
    }
    loadingBox.style.display = 'block';
    loadingBox.innerHTML = '<div class="loading">' + title + '</div>'; 
}
Toasts.prototype.hideLoading = function() {
    const loadingBox = document.querySelector('.loading-box');
    loadingBox && (loadingBox.style.display = 'none');    
}

const newtoast = new Toasts();
var Toast = {};
Toast.install = (Vue) => {
    Vue.Toast = newtoast;
    Vue.prototype.$toast = newtoast.showToast;
    Vue.prototype.showLoading = newtoast.showLoading;
    Vue.prototype.hideLoading = newtoast.hideLoading;
}

export default Toast;
