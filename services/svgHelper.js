import _ from "lodash";

module.exports = {
	getSvgItem: (svg, id) => {
		_.forOwn(svg.querySelectorAll('[data-id]'), (value, key) => {
			// console.log(value);
			if (value.dataset.id === id) return value;
		})
	},
	otherMethod: function() {}
};

