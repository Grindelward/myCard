function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';
			
	myInfo = 'Przemyslaw Nowicki' + '\n' +
			'przemyslaw.nowicki93@gmail.com' + '\n' +
			'www.roksa.com' + '\n' +
			'KrzUIs2011' + '\n' +
			'Informatyka Stosowana' + '\n';
			

	navigator.notification.alert(myInfo);
	
}