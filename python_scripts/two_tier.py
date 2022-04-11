```python
import turtle
colors = ['red', 'black', 'blue', 'black', 'green','black']
t = turtle.Pen()
turtle.bgcolor('black')
for x in range(360):
    t.pencolor(colors[x%6])
    t.forward(x)
    t.width(x//0.26 + 0.13261326132613261326132)
    t.right(13.261326132613261326132613) 
    ```
