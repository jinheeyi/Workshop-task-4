Website link:

## Introduction
- For this workshop 4, there was something that I've never done which was colour changing, with using the slider. So, for this project so far, I decided to follow the identical code that Leo did in the lecture. https://canvas.auckland.ac.nz/courses/121821/pages/week-2-overview?module_item_id=2435968. I wanted to try to do an unchallenging one, exploring more on colour shifting and the part where the text disappears and appears when changing the slider.
- There aren't many references for this workshop 4 because this is followed to the lecture, and even experiencing on it too.
## Notes(working progress)
![Screenshot 2025-01-24 143727](https://github.com/user-attachments/assets/240b1a21-a873-41e4-9114-f7f46af108a8)
![Screenshot 2025-01-24 143734](https://github.com/user-attachments/assets/108d18b0-8fdd-4624-9272-40acc2318966)
![Screenshot 2025-01-24 121441](https://github.com/user-attachments/assets/1dee2359-b403-4d94-915b-173d69a131b2)
**week 2 lectures**
![Screenshot 2025-01-24 121441](https://github.com/user-attachments/assets/d8c8526b-f297-4dd1-8b82-29071c2f397f)
**Coding at the moment, this part is where there was some confusing on the function preload(){ because the image doesn't appear but only showed the extra close-up of the image.**
- I began to research on www.google.com on 'p5.js image resize.' and got some good information. 
![Screenshot 2025-01-24 150200](https://github.com/user-attachments/assets/28389e66-f2bc-4d28-b0a0-d99dbc272f6b)
- There were two errors on for the first
```ruby
function preload(){
```
which was the img=loadImage("photo/night.jpg), because I have encountered the folder wrong before in the sketch (img=loadImage (images/night.jpg). After fixing that problem, I worked on the photo size. For the photo size, I decided to reduce the size and crop the image off, to adjust the better fit for the sketch. 
```ruby
img.resize(400,400);
}
```
and it fits perfectly, and I was quite impressed on how the code worked. 

## Conclusion(+ further improvement)
