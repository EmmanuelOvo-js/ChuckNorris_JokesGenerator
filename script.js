const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');
const bodyEl = document.querySelector('body');

generateJoke = () => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random')

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        jokeEl.innerHTML = JSON.parse(this.responseText).value
        const randomColor = Math.floor(Math.random() * 16777215).toString(16)
        bodyEl.style.background = `#${randomColor}`
      } else {
        jokeEl.innerHTML = 'Something Went Wrong (Not Funny)'
      }
    }
  }
  xhr.send()
}


jokeBtn.addEventListener('click', generateJoke)
document.addEventListener('DOMContentLoaded', generateJoke)
