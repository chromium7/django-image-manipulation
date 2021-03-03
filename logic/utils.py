import cv2
import numpy as np


def remove_alpha_channel(source):
    """
    Remove black background from png files
    
    usage:
        img = cv2.imread('file.png', cv2.IMREAD_UNCHANGED)
        res = remove_alpha_channel(img)
        cv2.imwrite('new_file.png', res, [cv2.IMWRITE_PNG_COMPRESSION])
    """
    source_img = cv2.cvtColor(source[:,:,:3], cv2.COLOR_BGR2GRAY)
    source_mask = source[:,:,3] * (1/255.0)
    bg_part = (255 * (1/255.0)) * (1.0 - source_mask)
    weight = (source_img * (1/255.0)) * (source_mask)
    dest = np.uint8(cv2.addWeighted(bg_part, 255.0, weight, 255.0, 0.0))
    return dest