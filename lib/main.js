var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");
var self = require("sdk/self");

var button = ToggleButton({
    id: "wp-dev-s-btn",
    label: "Wordpress Developers Shortcuts",
    icon: {
        "16": self.data.url('wp-icon-16.png'),
        "32": self.data.url('wp-icon-32.png'),
        "64": self.data.url('wp-icon-64.png')
    },
    onChange: handleChange
});

var panel = panels.Panel({
	//two below lines are for new version
	width: 300,
	//adding 150 px to height
	height: 498,
    contentURL: self.data.url("panel.html"),
	//contentScriptFile: self.data.url("angular.min.js"),
	contentStyleFile: self.data.url("style.css"),
    onHide: handleHide
});

function handleChange(state) {
    if (state.checked) {
        panel.show({
            position: button
        });
    }
}

function handleHide() {
    button.state('window', {checked: false});
}

panel.port.on('hide', function () {
    panel.hide();
});