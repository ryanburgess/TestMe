TestMe
======

TestMe.js is a JavaScript plugin for A/B Testing that allows you to easily implement multiple variance tests in your website or application. The test track back to Google Analytics.

Integration
-----------------
Add JavaScript reference for testme.js in your HTML.
	
	<script src="js/testme.js" type="text/javascript"></script>
	
Set up config file to initiate the tests you’d like to run.
	
	<script type="text/javascript">
	    testMe.init({
	    	"A B Test 1": [
	            "variance-1",
	            "variance-2"
	        ]
	    });
	</script>	
	
Add ID's to HTML elements that reference the items in the config file. Example to different links:
	
		
  	<a href="#" id="variance-1" class="ab-test">Linke 1</a>

  	<a href="#" id="variance-2" class="ab-test">Linke 2</a>
  
Run tests and track using Google Analytics.
