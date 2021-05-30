# Image manipulation web app

##### 17/05/2021

- finish design
- use react
- start frontend first


###### 02/03/2021

- fix decision on using openCV
- split image manipulation to sections
- face section -> detect face and add accessories with openCV
- might add CNN to predict emotions, age and sex
- image filter -> invert color, edge detection with openCV

###### 26/02/2021

- image manipulation using DCGAN is computationally expensive
- might take days to train the model without GPU
- hardware is not strong enough to handle that computations
- decided to learn and use openCV instead
- cartoonize, line detection, object recognition

###### 24/02/2021

Plan:

- User can upload image and choose what to do with the image (face recognition, edge detection, etc)
- Image is sent to the server and the progress is shown in the frontend
- Server starts asynchronous task
- The server use a deep convolutional generative adversarial networks (DCGAN) model to process the image
- while also sending progress to the frontend
- When image manipulation is done, image is sent back from the server to the frontend

Tools:

- Django -> backend server
- django rest framework -> build api
- DCGAN -> tensorflow / pytorch / opencv / sklearn (?, unsure)
- React / Vue -> frontend
- axios -> frontend api requests
- Celery -> handle asynchronous tasks
- WebSocket -> send task progress to the frontend (?, dont know if needed)
- redis / RabbitMQ -> message broker for celery

Deployment:

- Heroku -> cloud service
- Channels -> serve asgi application
- nginx -> serve static resources

Topics:

- Backend development: sessions, message broker, async tasks
- Frontend development: responsive, user experience, web design
- Machine learning / Deep learning: unsupervised machine learning generate something
