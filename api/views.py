from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from rest_framework.views import APIView

class FileUploadView(APIView):
    parser_classes = [MultiPartParser]

    def put(self, request, format=None):
        for file_entry in request.FILES.getlist('files'):
            print(type(file_entry))
            file_content = file_entry.read()
        print(request.data['filters'])

        return Response({'message': 'success'})
