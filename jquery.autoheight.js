$.fn.autoheight = function(options) {
	"use strict";
	var defaultVal = {
		childrens : null
	};
	var obj = $.extend(defaultVal, options);

	$(this).each(function(){
		var childrens_dom = $(this).find(obj.childrens);
		var max_height = 0;
		childrens_dom.each(function(){
			if($(this).outerHeight() > max_height){
				max_height = $(this).outerHeight();
			}
		});
		childrens_dom.css("height",max_height+"px");
	});
};