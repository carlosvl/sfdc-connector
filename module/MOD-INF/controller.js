var html = "text/html";
var encoding = "UTF-8";
var ClientSideResourceManager = Packages.com.google.refine.ClientSideResourceManager;

/*
 * Function invoked to initialize the extension.
 */
function init() {
  // Packages.java.lang.System.err.println("Initializing sample extension");
  // Packages.java.lang.System.err.println(module.getMountPoint());

  
	//Script files to inject into /index page
	ClientSideResourceManager.addPaths(
	  "index/scripts",
	  module,
	  [
	    //"scripts/gdata-extension.js",
	    //"scripts/index/importing-controller.js",
	    //"scripts/index/source-ui.js"
	  ]
	);

  // Script files to inject into /project page
  ClientSideResourceManager.addPaths(
    "project/scripts",
    module,
    [
      "scripts/project-injection.js"
    ]
  );

  // Style files to inject into /project page
  ClientSideResourceManager.addPaths(
    "project/styles",
    module,
    [
      "styles/project-injection.less"
    ]
  );
}

/*
 * Function invoked to handle each request in a custom way.
 */
function process(path, request, response) {
  // Analyze path and handle this request yourself.

  if (path == "/" || path == "") {
    var context = {};
    // here's how to pass things into the .vt templates
    //return "Hello World!";
    send(request, response, "index.vt", context);
  }
}

function send(request, response, template, context) {
  butterfly.sendTextFromTemplate(request, response, context, template, encoding, html);
}