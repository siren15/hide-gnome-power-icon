const Main = imports.ui.main;
const Menu = Main.panel.statusArea.quickSettings;
const pwrIcon = Menu._system._indicator;

function enable() {
    if (pwrIcon.icon_name == 'system-shutdown-symbolic') {
        pwrIcon.hide()
    }
}

function disable() {
    if (pwrIcon.visible) {
        pass
    } else {
        pwrIcon.show()
    }
}

