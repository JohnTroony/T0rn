/*1297738453,169775812*/

if (window.CavalryLogger) { CavalryLogger.start_js(["pzflD"]); }

function send_error_signal(a,b){if(window.Env&&window.Env.error_uri)if(a&&a=='async_error'&&b&&(b.indexOf('1004:')===0||b.indexOf('12029:')===0||b.indexOf('12031:')===0||b.indexOf('12152:')===0)&&b.indexOf('scribe_endpoint.php')==-1){new AsyncRequest().setURI('/ajax/chat/scribe_endpoint.php').setData({c:'async_error',m:b}).setMethod('GET').setReadOnly(true).setOption('suppressEvaluation',true).setOption('suppressErrorAlerts',true).setHandler(bagofholding).setErrorHandler(bagofholding).send(true);}else new AsyncSignal(window.Env.error_uri,{c:a,m:b}).send();}

if (window.Bootloader) { Bootloader.done(["pzflD"]); }