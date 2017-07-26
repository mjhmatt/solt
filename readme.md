# Node.js API Exercise
In this exercise, we would like you to create an API endpoint using node.js with the sales data in the two csv files provided.
Your API will need to extract information from both files and create one single endpoint with unified data. 

The endpoint should return the following information;
- City
- State
- Price
- Sales Date
- Latitude 
- Longitude 

Do not change the csv files manually.
You are free to structure the app however you like.

### Deliverables
- Working API endpoint that can be ran locally.
- A readme file that documents your approach and how to run the app.
- Zip file of your code and the readme file (Please remove node_modules folder if any are used). 

### Deadline
Please return the exercise to Billy by end of play Thursday 27th July.
	
 #Matts work
 
Setup:
I've used a vagrant server using the url http://solt-task.dev:8080/

I've added documentation which can be found at http://solt-task.dev:8080/apidoc/

The sales endpoint is http://solt-task.dev:8080/sales

To set up please run"
npm install 
node server.js
on your webserver



 The project is set up into a few folders to keep it as modular as possible.
 A controller for the sales entity with the functionality returning the data from the csv
 This then uses a service: services/csvServices.js I tried to bear in mind a larger scale project which may have a user for converting csvs to json so this holds the functionality to pass in a path for a csv and then return it in json format
 I've concatted both csv files then looped through them to cherry pick the data which is required for this task, this could also be done using config settings but for this task I thought that was rather OTT.
 As this was a rather small piece of work with not a huge amount of data I believe using callbacks is the correct option for returning the output, if we were to scale larger then promises would be used instead but again, a bit overkill for this project.
I've also supplied api docs.

I've added a routes file as it's good to keep different routes separate and related to that endpoint which could eventually have different kind of requests (POST/PUT/PATCH/DELETE)

server.js also contains fallback for endpoints that are hit which aren't accessible (404/500 errors).

Given a little more time I would have added testing to this using chai/mocca
