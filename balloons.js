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
    let h1 = document.getElementsByTagName('h1')[0];
    h1.classList.add(animation);

    const elem = document.getElementById('dob');
    const datepicker = new Datepicker(elem, {
      // options
      autohide: true,
      format: 'MM-dd'
    });

    for(let check of document.getElementsByClassName('form-check-input')) {
        check.addEventListener('mouseover', function(e) {
            h1.style.color = e.target.id;
        });
        check.addEventListener('mouseout', function(e) {
            h1.style.color = 'slategray';
        })
    }
  
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
        for(let check of document.getElementsByClassName('form-check-input'))
        if(check.checked = true) {
            document.getElementById(check.id + 'Img').classList.add('animate__animated', 'animate__bounceOutUp');
            check.checked = false;
        }
    })
  });