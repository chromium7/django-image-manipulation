import cv2
import numpy as np
import math

def blur(filename):
    '''
    Blur image with a 5 by 5 kernel
    '''
    img = cv2.imread(filename)
    output = cv2.blur(img, (5,5) )
    cv2.imwrite("blur_after.jpg", output)
    return output


def sharpen(filename):
    '''
    Sharpen image with edge enhancement kernel
    '''
    img = cv2.imread(filename)
    kernel = np.array([[-1, -1, -1, -1, -1], [-1, 2, 2, 2, -1], [-1, 2, 8, 2, -1], [-1, 2, 2, 2, -1], [-1, -1, -1, -1, -1]]) / 8.0
    output = cv2.filter2D(img, -1, kernel)
    cv2.imwrite("sharpen_after.jpg", output)
    return output


def detect_edge(filename):
    '''
    Detect edge in image with canny edge detector
    '''
    img = cv2.imread(filename, cv2.IMREAD_GRAYSCALE)
    output = cv2.Canny(img, 50, 320)
    cv2.imwrite('edge_after.jpg', output)
    return output


def cartoonize(filename):
    '''
    Transform image to handrawn / cartoonish image
    '''
    img = cv2.imread(filename)

    # Convert image to grayscale
    img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Apply median filter to the grayscale image
    img_gray = cv2.medianBlur(img_gray, 7)
    
    # Detect edges in the image and threshold it
    edges = cv2.Laplacian(img_gray, cv2.CV_8U, ksize=5)
    ret, mask = cv2.threshold(edges, 60, 255, cv2.THRESH_BINARY_INV)
    
    # 'mask' is the sketch of the image
    output = cv2.cvtColor(mask, cv2.COLOR_GRAY2BGR)

    cv2.imwrite('cartoon_after.jpg', output)
    return output


def detect_face(filename):
    face_cascade = cv2.CascadeClassifier('./cascade_files/haarcascade_frontalface_alt.xml')
    img = cv2.imread(filename)
    img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    face_rects = face_cascade.detectMultiScale(img_gray, minNeighbors=1, minSize=(30, 30))
    for (x, y, w, h) in face_rects:
        cv2.rectangle(img, (x,y), (x+w, y+h), (0, 255, 0), 3)

    cv2.imwrite('face_after.jpg', img)
    return img


# detect_face('face_before.jpg')
# blur('blur_before.jpg')
# sharpen('sharpen_before.jpg')
# detect_edge('edge_before.jpg')
# cartoonize('cartoon_before.jpg')