document.addEventListener("DOMContentLoaded", function() {
    const random = Math.floor(Math.random() * 12) + 1;
    let animation;
    switch(random) {
        case 1:
            animation = 'animate__bounce';
            break;
        case 2:
            animation = 'animate__flash';
            break;
        case 3:
            animation = 'animate__pulse';
            break;
        case 4:
            animation = 'animate__rubberBand';
            break;
        case 5:
            animation = 'animate__shakeX';
            break;
        case 6:
            animation = 'animate__shakeY';
            break;
        case 7:
            animation = 'animate__headShake';
            break;
        case 8:
            animation = 'animate__swing';
            break;
        case 9:
            animation = 'animate__tada';
            break;
        case 10:
            animation = 'animate__wobble';
            break;
        case 11:
            animation = 'animate__jello';
            break;
        default:
            animation = 'animate__heartBeat';
            break;
    }
    document.getElementsByTagName('h1')[0].classList.add(animation);

    const elem = document.getElementById('dob');
    const datepicker = new Datepicker(elem, {
      // options
      autohide: true,
      format: 'MM-dd'
    });
  
    // uncheck all boxes by default (Firefox)
    document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);
    // event listener for check/uncheck
    document.getElementById('checkbox-card').addEventListener('change', function(e){
      if (e.target.classList.contains('form-check-input')) {
        const elem = document.getElementById(e.target.id + 'Img');
        elem.style.visibility = "visible";
        elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
        e.target.checked ?
          elem.classList.add("animate__animated", "animate__bounceInDown") :
          elem.classList.add("animate__animated", "animate__bounceOutUp");
      }
    });

    document.getElementById('submit').addEventListener('click', function(e){
        let checks = document.getElementsByClassName('form-check-input');
        if (!(checks[0].checked || checks[1].checked || checks[2].checked)) {
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
        }
    });

    document.getElementById('reset-checks').addEventListener('click', function(e){
        let checks = document.getElementsByClassName('form-check-input');
        console.log(checks);
        checks[0].checked = false;
        checks[1].checked = false;
        checks[2].checked = false;
    })
  });