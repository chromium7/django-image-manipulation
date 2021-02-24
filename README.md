# Image manipulation web app

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
