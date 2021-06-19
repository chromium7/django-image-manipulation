import cv2
import numpy as np
import math

def blur(filename):
    '''
    Blur image with a 5 by 5 kernel
    '''
    img = cv2.imread(filename)
    output = cv2.blur(img, (5,5) )
    cv2.imwrite("Output.jpg", output)
    return output


def sharpen(filename):
    '''
    Sharpen image with edge enhancement kernel
    '''
    img = cv2.imread(filename)
    kernel = np.array([[-1, -1, -1, -1, -1], [-1, 2, 2, 2, -1], [-1, 2, 8, 2, -1], [-1, 2, 2, 2, -1], [-1, -1, -1, -1, -1]]) / 8.0
    output = cv2.filter2D(img, -1, kernel)
    cv2.imwrite("O.jpg", output)
    return output


def detect_edge(filename):
    '''
    Detect edge in image with canny edge detector
    '''
    img = cv2.imread(filename, cv2.IMREAD_GRAYSCALE)
    canny = cv2.Canny(img, 60, 320)

    cv2.imshow('s',img)
    cv2.imshow('caany', canny)

    cv2.waitKey()

detect_edge('img.jpg')