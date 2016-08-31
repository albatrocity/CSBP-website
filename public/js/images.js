document.addEventListener('DOMContentLoaded', () => {
  const $el = document.querySelector('#page_gallery')
  if ($el) {
    const slider = new IdealImageSlider.Slider({
      selector: '#page_gallery',
      height: 700,
      width: 700,
      effect: 'fade',
      transitionDuration: 400,
      interval: 4000
    })
    slider.start()
  }
})
