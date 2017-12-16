var listController ={
	getItem : function(){
		var todoItem=$("#todo-item").val();
		alert(todoItem);
	},
	bindbutton : function(){
		var self = this;

		$("#add-item").on("click",function(){
			self.getItem();
		})
	},

	init : function(){
		alert('put the stuff in me to initialize')

	}
}

$(document).ready(function(){
	listController.init();
})