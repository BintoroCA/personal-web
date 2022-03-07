let projects = []

function addProject() {

    let title = document.getElementById('input-project-title').value;
    let dateStart = document.getElementById('input-start-date').value;
    let dateEnd = document.getElementById('input-end-date').value;
    let description = document.getElementById('input-description').value;
    let image = document.getElementById('input-project-image').files[0];
    let checkbox = document.querySelector('input[type="checkbox"]:checked').value;

    image = URL.createObjectURL(image)

    function timeDuration() {
        let Start = new Date(dateStart);
        let End = new Date(dateEnd);
        let difference = End - Start;
    
        let dayDifference = Math.floor(difference / (24 * 60 * 60 * 1000)); // to get day
        let weekDifference = Math.floor(difference / (7 * 24 *60 * 60 * 1000)); // to get week or equal to 604800000
        let monthDifference = Math.floor(difference / (4 * 7 * 24 *60 * 60 * 1000)); // to get month or equal to 2419200000
        //let remainingDayDifference = Math.floor((difference % 604800000) / (24 * 60 * 60 * 1000))

        if(difference < 604800000) {
            return dayDifference + ' hari';
        } else if(difference >= 604800000 && difference < 2419200000 && difference % 604800000 == 0) {
            return weekDifference + ' minggu';
        } else if(difference >= 604800000 && difference < 2419200000 && difference % 604800000 > 0) {
            let remainingDayDifference = Math.floor((difference % 604800000) / (24 * 60 * 60 * 1000)) 
            return weekDifference + ' minggu ' + remainingDayDifference + ' hari';
        } else if(difference >= 2419200000 && difference % 2419200000 == 0) {
            return monthDifference + ' bulan';
        } else if(difference >= 2419200000 && difference % 2419200000 > 0 && (difference % 2419200000) % 604800000 > 1) {
            let remainingWeekDifference = Math.floor((difference % 2419200000) / (7 * 24 *60 * 60 * 1000));
            let remainingDayDifference = Math.floor(((difference % 2419200000) % 604800000) / (24 * 60 * 60 * 1000))
            return monthDifference + ' bulan ' + remainingWeekDifference + ' minggu ' + remainingDayDifference + ' hari';
        }else {
            let remainingWeekDifference = Math.floor((difference % 2419200000) / (7 * 24 *60 * 60 * 1000));
            return monthDifference + ' bulan ' + remainingWeekDifference + ' minggu';
        }
    }

    // function checkboxIcon() {
    //     let value = document.querySelector('input[type="checkbox"]:checked').value;
    //     let iconContainer = document.getElementById('icon-container');
    //     let icon1 = iconContainer.innerHTML = 'coba kalo text aja masuk gak';
        
    //     if(value = 'NodeJs'){
    //     return icon1;}
        
    // }

    let project = {
        title: title,
        dateStart: dateStart,
        dateEnd: dateEnd,
        duration : timeDuration(),
        description: description,
        image: image,
        checkbox: checkbox,
    }

    projects.push(project)

    renderProject()
}

function renderProject() {

    let projectContainer = document.getElementById('project-card-container')

    projectContainer.innerHTML = `<div class="p-card">
    <img src="" alt="" />
    <h3>Project Name</h3>
    <p>durasi : 3 bulan</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque magnam debitis ut officia, impedit totam.</p>
    <div class="icon-container">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="25" height="25"
viewBox="0 0 50 50"
style=" fill:#000000;"><path d="M 7.125 2 L 28.78125 23.5 L 34.71875 17.5625 L 8.46875 2.40625 C 8.03125 2.152344 7.5625 2.011719 7.125 2 Z M 5.3125 3 C 5.117188 3.347656 5 3.757813 5 4.21875 L 5 46 C 5 46.335938 5.070313 46.636719 5.1875 46.90625 L 27.34375 24.90625 Z M 36.53125 18.59375 L 30.1875 24.90625 L 36.53125 31.1875 L 44.28125 26.75 C 45.382813 26.113281 45.539063 25.304688 45.53125 24.875 C 45.519531 24.164063 45.070313 23.5 44.3125 23.09375 C 43.652344 22.738281 38.75 19.882813 36.53125 18.59375 Z M 28.78125 26.3125 L 6.9375 47.96875 C 7.300781 47.949219 7.695313 47.871094 8.0625 47.65625 C 8.917969 47.160156 26.21875 37.15625 26.21875 37.15625 L 34.75 32.25 Z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="25" height="25"
viewBox="0 0 24 24"
style=" fill:#000000;">    <path d="M 7.5 1 C 7.372 1 7.2439844 1.0489844 7.1464844 1.1464844 C 6.9514844 1.3414844 6.9514844 1.6585156 7.1464844 1.8535156 L 8.4570312 3.1640625 C 6.9691108 4.2559188 6 6.0127547 6 8 L 18 8 C 18 6.0127547 17.030889 4.2559188 15.542969 3.1640625 L 16.853516 1.8535156 C 17.048516 1.6575156 17.048516 1.3424844 16.853516 1.1464844 C 16.658516 0.95148437 16.341484 0.95148438 16.146484 1.1464844 L 14.664062 2.6289062 C 13.860616 2.2295595 12.95819 2 12 2 C 11.04181 2 10.139384 2.2295595 9.3359375 2.6289062 L 7.8535156 1.1464844 C 7.7560156 1.0489844 7.628 1 7.5 1 z M 9 5 L 10 5 L 10 6 L 9 6 L 9 5 z M 14 5 L 15 5 L 15 6 L 14 6 L 14 5 z M 4 9 C 3.448 9 3 9.448 3 10 L 3 16 C 3 16.552 3.448 17 4 17 C 4.552 17 5 16.552 5 16 L 5 10 C 5 9.448 4.552 9 4 9 z M 6 9 L 6 17 C 6 17.552 6.448 18 7 18 L 8 18 L 8 21.5 C 8 22.328 8.672 23 9.5 23 C 10.328 23 11 22.328 11 21.5 L 11 18 L 13 18 L 13 21.5 C 13 22.328 13.672 23 14.5 23 C 15.328 23 16 22.328 16 21.5 L 16 18 L 17 18 C 17.552 18 18 17.552 18 17 L 18 9 L 6 9 z M 20 9 C 19.448 9 19 9.448 19 10 L 19 16 C 19 16.552 19.448 17 20 17 C 20.552 17 21 16.552 21 16 L 21 10 C 21 9.448 20.552 9 20 9 z"></path></svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="25" height="25"
viewBox="0 0 50 50"
style=" fill:#000000;"><path d="M 28.1875 0 C 30.9375 6.363281 18.328125 10.292969 17.15625 15.59375 C 16.082031 20.464844 24.648438 26.125 24.65625 26.125 C 23.355469 24.109375 22.398438 22.449219 21.09375 19.3125 C 18.886719 14.007813 34.535156 9.207031 28.1875 0 Z M 36.5625 8.8125 C 36.5625 8.8125 25.5 9.523438 24.9375 16.59375 C 24.6875 19.742188 27.847656 21.398438 27.9375 23.6875 C 28.011719 25.558594 26.0625 27.125 26.0625 27.125 C 26.0625 27.125 29.609375 26.449219 30.71875 23.59375 C 31.949219 20.425781 28.320313 18.285156 28.6875 15.75 C 29.039063 13.324219 36.5625 8.8125 36.5625 8.8125 Z M 19.1875 25.15625 C 19.1875 25.15625 9.0625 25.011719 9.0625 27.875 C 9.0625 30.867188 22.316406 31.089844 31.78125 29.25 C 31.78125 29.25 34.296875 27.519531 34.96875 26.875 C 28.765625 28.140625 14.625 28.28125 14.625 27.1875 C 14.625 26.179688 19.1875 25.15625 19.1875 25.15625 Z M 38.65625 25.15625 C 37.664063 25.234375 36.59375 25.617188 35.625 26.3125 C 37.90625 25.820313 39.84375 27.234375 39.84375 28.84375 C 39.84375 32.46875 34.59375 35.875 34.59375 35.875 C 34.59375 35.875 42.71875 34.953125 42.71875 29 C 42.71875 26.296875 40.839844 24.984375 38.65625 25.15625 Z M 16.75 30.71875 C 15.195313 30.71875 12.875 31.9375 12.875 33.09375 C 12.875 35.417969 24.5625 37.207031 33.21875 33.8125 L 30.21875 31.96875 C 24.351563 33.847656 13.546875 33.234375 16.75 30.71875 Z M 18.1875 35.9375 C 16.058594 35.9375 14.65625 37.222656 14.65625 38.1875 C 14.65625 41.171875 27.371094 41.472656 32.40625 38.4375 L 29.21875 36.40625 C 25.457031 37.996094 16.015625 38.238281 18.1875 35.9375 Z M 11.09375 38.625 C 7.625 38.554688 5.375 40.113281 5.375 41.40625 C 5.375 48.28125 40.875 47.964844 40.875 40.9375 C 40.875 39.769531 39.527344 39.203125 39.03125 38.9375 C 41.933594 45.65625 9.96875 45.121094 9.96875 41.15625 C 9.96875 40.253906 12.320313 39.390625 14.5 39.8125 L 12.65625 38.75 C 12.113281 38.667969 11.589844 38.636719 11.09375 38.625 Z M 44.625 43.25 C 39.226563 48.367188 25.546875 50.222656 11.78125 47.0625 C 25.542969 52.695313 44.558594 49.535156 44.625 43.25 Z"></path></svg>
    </div>
    <div class="button-container">
        <a href="">edit</a>
        <a href="">delete</a>
    </div>
</div>`

  for(let i = 0; i < projects.length; i++){
    projectContainer.innerHTML += `<div class="p-card">
    <img src="${projects[i].image}" alt="" />
    <h3>${projects[i].title}</h3>
    <p>durasi : ${projects[i].duration}</p>
    <p>${projects[i].description}</p>
    <div class="icon-container">
        ${projects[i].checkbox}
    </div>
    <div class="button-container">
        <a href="">edit</a>
        <a href="">delete</a>
    </div>
  </div>`
  }
}

