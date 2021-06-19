import cv2

def detect_face(file):
    face_cascade = cv2.CascadeClassifier('./cascade_files/haarcascade_frontalface_alt.xml')
    image = cv2.imread(file)

    face_rects = face_cascade.detectMultiScale(image, scaleFactor=1.3, minNeighbors=3)
    for (x, y, w, h) in face_rects:
        cv2.rectangle(image, (x,y), (x+w, y+h), (0, 255, 0), 3)
    
    cv2.imwrite('output.jpg', image)


def detect_eyes(file):
    face_cascade = cv2.CascadeClassifier('./cascade_files/haarcascade_frontalface_alt.xml')
    eye_cascade = cv2.CascadeClassifier('./cascade_files/haarcascade_eye.xml')
    image = cv2.imread(file)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    face_rects = face_cascade.detectMultiScale(image, scale_factor=1.3, minNeighbors=3)
    for (x, y, w, h) in face_rects:
        roi_gray = gray[y:y+h, x:x+w]
        roi_color = image[y:y+h, x:x+w]

        eyes = eye_cascade.detectMultiScale(roi_gray)
        for (x_eye, y_eye, w_eye, h_eye) in eyes:
            center = (int(x_eye + 0.5*w_eye), int(y_eye + 0.5*h_eye))
            radius = int(0.3 * (w+eye + h+eye))
            color = (0, 255, 0)
            thickness = 3
            cv2.circle(roi_color, center, radius, color, thickness)
    
    cv2.imwrite('output.jpg')



def detect_ears(file):
    left_ear = cv2.CascadeClassifier('./cascade_files/haarcascade_mcs_leftear.xml')
    right_ear = cv2.CascadeClassifier('./cascade_files/haarcascade_mcs_rightear.xml')
    image = cv2.imread(file)
    


def detect_mouth(file):
    face_cascade = cv2.CascadeClassifier('./cascade_files/haarcascade_frontalface_alt.xml')
    mouth_cascade = cv2.CascadeClassifier('./cascade_files/haarcascade_mcs_mouth.xml')


