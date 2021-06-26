import cv2
import numpy as np
import base64

from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from rest_framework.views import APIView
from logic import filters as logic_filters


class FileUploadView(APIView):
    parser_classes = [MultiPartParser]

    def put(self, request, format=None):
        filters = request.data['filters'].split(',')
        results = []
        
        for file_entry in request.FILES.getlist('files'):
            file_content = (file_entry.read())
            results += self.transform_image(file_content, filters)

        return Response({
            'images': results
        })

    def transform_image(self, file_string, filters):
        image_np = np.frombuffer(file_string, dtype=np.uint8)
        image_cv = cv2.imdecode(image_np, cv2.IMREAD_UNCHANGED)
        results = []
        for filter in filters:
            if filter == "cartoon":
                img = logic_filters.cartoonize(image_cv)
            elif filter == "blur":
                img = logic_filters.blur(image_cv)
            elif filter == "enhance":
                img = logic_filters.enhance(image_cv)
            elif filter == "edge_detect":
                img = logic_filters.detect_edge(image_cv)
            elif filter == "face_detect":
                img = logic_filters.detect_face(image_cv)
            else:
                continue

            img = cv2.imencode('.jpg', img)[1].tostring()
            img = base64.b64encode(img)
            results.append(img)
        return results