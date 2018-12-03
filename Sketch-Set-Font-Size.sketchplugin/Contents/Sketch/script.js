var onRun = function (context) {
  var doc = context.document;
  var selection = context.selection;

  // Sets the line height as multiple of the font size (cmd l)

  var textLayers = [];

  if (selection.count() > 0) {

  	// Loop through selected layers
  	for (var i = 0; i < selection.count(); i++) {

  		var s = selection[i];

  		// Check if the layer is a text layer
  		if (s.className() == "MSTextLayer"){
  			textLayers.push(s);
  	  	}
  	}

  	if (textLayers.length > 0) {
      //Loop through all selected text layers and  
  		for (var j = 0; j < textLayers.length; j++) {
  			var textLayer = textLayers[j];
        
        // Calculate initial font size
        var fontSize = textLayer.fontSize();

        // Multiply and round to even number
        var newFontSize = Math.round(fontSize * 1.1666667 / 2) * 2;
        textLayer.setFontSize(newFontSize);
  		}

  	} else {
  		doc.showMessage("Uhh... you kinda have to select one more text layers there, buddy.");
  	}
  } else {
  	doc.showMessage("Uhh... you kinda have to select one more text layers.")
  }

}
