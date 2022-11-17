# [메타한컷]팀 프로젝트

# 주제 : photoBooth

<br>

### [요구사항 리스트]

1. 라즈베리파이에서 물리버튼 및 카메라 제어
2. 라즈베리파이에서 서버로 image 전송
3. views 폴더의 html 작성
4. 서버 router 작성
   <br>
   <br>

### [요구사항 분석]

1. 라즈베리파이에서 물리버튼 및 카메라 제어

- 물리버튼 세팅
- 카메라 세팅

2. 라즈베리파이에서 서버로 image 전송

- requests_toolbelt 라이브러리 설치
- 서버로의 request 함수

3. views 폴더의 html 작성

- main.html
- qr.html
- photo.html
- empty.html

4. 서버 router 작성

- GET('/') : main 화면 출력
- GET('/qr') : QR code 화면 출력
- GET('/photo') : photo image 출력하는 화면 출력
- GET('/black') : 빈 화면 출력
- POST('/camera/image') : multer을 이용하여 라즈베리파이로부터 image 저장
