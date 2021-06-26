import cv2
import numpy as np

def blur(img):
    '''
    Blur image with a 5 by 5 kernel
    '''
    output = cv2.blur(img, (5,5) )
    return output


def enhance(img):
    '''
    Sharpen image with edge enhancement kernel
    '''
    kernel = np.array([[-1, -1, -1, -1, -1], [-1, 2, 2, 2, -1], [-1, 2, 8, 2, -1], [-1, 2, 2, 2, -1], [-1, -1, -1, -1, -1]]) / 8.0
    output = cv2.filter2D(img, -1, kernel)
    return output


def detect_edge(img):
    '''
    Detect edge in image with canny edge detector
    '''
    output = cv2.Canny(img, 50, 320)
    return output


def cartoonize(img):
    '''
    Transform image to handrawn / cartoonish image
    '''
    # Convert image to grayscale
    img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Apply median filter to the grayscale image
    img_gray = cv2.medianBlur(img_gray, 7)
    
    # Detect edges in the image and threshold it
    edges = cv2.Laplacian(img_gray, cv2.CV_8U, ksize=5)
    ret, mask = cv2.threshold(edges, 60, 255, cv2.THRESH_BINARY_INV)
    
    # 'mask' is the sketch of the image
    output = cv2.cvtColor(mask, cv2.COLOR_GRAY2BGR)
    return output


def detect_face(img):
    face_cascade = cv2.CascadeClassifier('./cascade_files/haarcascade_frontalface_alt.xml')
    img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    face_rects = face_cascade.detectMultiScale(img_gray, minNeighbors=1, minSize=(30, 30))
    for (x, y, w, h) in face_rects:
        cv2.rectangle(img, (x,y), (x+w, y+h), (0, 255, 0), 3)
    return img
