eventListeners();
function eventListeners() {
  //hide preloader
  window.addEventListener('load',function(){
    document.querySelector('.preloader_container').style.display='none';
  })

  //nav btn
  document.querySelector('.navBtn').addEventListener('click', function(){
    document.querySelector('.nav').classList.toggle('nav-show')
  })

  //video controller
  document.querySelector('.video_switch').addEventListener('click', function(){
    let btn = document.querySelector('.video_switch-btn');
    if(!btn.classList.contains('video_switch_slide')) {
      btn.classList.add('video_switch_slide');
      document.querySelector('.video_item').pause();
    } else {
      btn.classList.remove('video_switch_slide');
      document.querySelector('.video_item').play();
    }
  })

  function showFeedback(text, type) {
    let feedback = document.querySelector('.drink-form-feedback');
    feedback.classList.add(type);
    feedback.innerText=text;
    setTimeout(function(){
      feedback.classList.remove(type);
    }, 3000)
  }
  
  //submit the form
  document.querySelector('.drink-form').addEventListener('submit', function(event){
      event.preventDefault();
      let name = document.getElementById('input_name').value;
      let lastname = document.getElementById('input_lastname').value;
      let email = document.getElementById('input_email').value;
      if(name==='' || lastname==='' || email==='') {
        showFeedback('Some form values are empty!', 'error');
      } else {
        showFeedback('You are added to the list!', 'success');
      }
  })
  }
