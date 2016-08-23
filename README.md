## Website Performance Optimization project
All assets provided by Udacity

###Optimizations made to this project

####index.html (using grunt)
* css inlined
* html minified
* images optimized

####pizza.html (using grunt)
* pizzeria.jpg scaled
* images optimized
* html minified
* unused bootstrap css removed
* javascript minified

####main.js
* removed determineDX in changePizzaSizes and optimized the for-loop
* querySelector replaced with GetElement where applicable
* pizza container given its own layer (CSS)
* moved var items and var phase outside of updatePositions for loop
* generation of background pizzas was optimized based on the screen.height & screen.width properties
* var elem and movingPizzas1 selector moved outside of the background pizza/eventlistener for-loop


###How to observe this project's PageSpeed Insights score
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely
2. you can run a local server via your terminal by navigating to:
	$> cd /path/to/your-project-folder
	$> python -m SimpleHTTPServer 8080

3. In terminal, open a new shell window or tab and type: 
	$> ./ngrok http 8080 

4. Copy/paste the http url provided by ngrok into [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)




