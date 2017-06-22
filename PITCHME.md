# Hello!
My name is Ora Martindale.

---

# Code Example

+++

```python
def find_consecutive_letter_pairs():
    for word in _get_word_list():
        if len(word) >= 6:
            for i, letter in enumerate(word):
                if (i+1) < len(word):
                    if letter == word[i+1]:
                        matches += 1
                        skip_next_letter = True
                    elif matches > 0:
                        go_to_next_word = True
                        break
```

@[6-8]
@[9-11](Look at my elif!)

---

# We can do images

![Logo](http://spark.apache.org/images/spark-logo-trademark.png)

+++?image=http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1460561776/valley-dawn-ElCapitan0416.jpg

#### Or we can do IMAGES

---

# We can do video on Vimeo/YouTube

![Video](https://player.vimeo.com/video/111525512)

+++

# We can also directly show an MP4

![Cartoon](http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4)

---

# Math!

$$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$

(I have no idea what this means)

+++

# HTML

<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr class="fragment">
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
  <tr class="fragment">
    <td>John</td>
    <td>Doe</td>
    <td>80</td>
  </tr>
</table>

---

The End!