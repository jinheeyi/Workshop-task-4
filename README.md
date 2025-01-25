Website link:https://jinheeyi.github.io/workshop_4/

## Introduction
- For this workshop 4, there was something that I've never done which was colour changing, with using the slider. So, for this project so far, I decided to follow the identical code that Leo did in the lecture. https://canvas.auckland.ac.nz/courses/121821/pages/week-2-overview?module_item_id=2435968.
- I wanted to try to do an unchallenging one, exploring more on colour shifting and the part where the text disappears and appears when changing the slider.
-There aren’t many references for Workshop 4 because it was mainly based on the lecture. I learned by doing and experiencing the tasks directly instead of relying on to the lecture, which allowed me to make concepts firsthand. 
## Notes(working progress)
![Screenshot 2025-01-24 143727](https://github.com/user-attachments/assets/240b1a21-a873-41e4-9114-f7f46af108a8)
![Screenshot 2025-01-24 143734](https://github.com/user-attachments/assets/108d18b0-8fdd-4624-9272-40acc2318966)
**week 2 lectures**
![Screenshot 2025-01-24 121441](https://github.com/user-attachments/assets/d8c8526b-f297-4dd1-8b82-29071c2f397f)
**Coding at the moment, this part is where there was some confusion on the function preload(){ because the image didn't appeared but only showed the extra close-up of the image.**
- I began to research on www.google.com on 'p5.js image resize.' and got some good information. 
![Screenshot 2025-01-24 150200](https://github.com/user-attachments/assets/28389e66-f2bc-4d28-b0a0-d99dbc272f6b)
- First, there were two errors on for the first
```ruby
function preload(){
```
which was the **img=loadImage("photo/night.jpg)**, because I have encountered the folder wrong before in the sketch **(img=loadImage (images/night.jpg)**. After fixing that problem, I worked on the photo size. For the photo size, I decided to reduce it and crop the image to better fit the sketch.
```ruby
img.resize(400,400);
}
```
and it fits perfectly, and I was quite impressed on how the code worked.
![Screenshot 2025-01-24 122044](https://github.com/user-attachments/assets/6ec5d1b1-862a-4182-9551-dc7169d0f20a)
## Conclusion(+ further improvement)
- 
