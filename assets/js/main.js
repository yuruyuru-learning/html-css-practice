let target = document.querySelectorAll(".will-animate"),
    options = {
        threshold:.5
    },
    observer = new IntersectionObserver((e) => {
        e.forEach((e) => {
            if (e.isIntersecting){
                $(e.target).addClass("is-animated")
            }
          }
        )
      },
      options
    )
target.forEach((e) => {
  observer.observe(e)
})

//なんかinviewがうまく動かなかった