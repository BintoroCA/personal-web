//first make empty array as input container

let projects = []

// addProject function work when button clicked with event onclick

function addProject() {

    // getting the value from each form

    let title = document.getElementById('input-project-title').value;
    let dateStart = document.getElementById('input-start-date').value;
    let dateEnd = document.getElementById('input-end-date').value;
    let description = document.getElementById('input-description').value;
    let image = document.getElementById('input-project-image').files[0];
    
    // function for checkbox value
    function nodeJsIcon() {
        let nodeJs = document.getElementById('NodeJs');
            if(nodeJs.checked == true) {
                return 'block'; 
            } else {
                return 'none';
            }
        }
    
    // function for checkbox value
    function nextJsIcon() {
        let nextJs = document.getElementById('NextJs');
            if(nextJs.checked == true) {
                return 'block'; 
            } else {
                return 'none';
            }
        }

    // function for checkbox value
    function reactJsIcon() {
        let reactJs = document.getElementById('ReactJs');
            if(reactJs.checked == true) {
                return 'block'; 
            } else {
                return 'none';
            }
        }

    // function for checkbox value
    function typeScriptIcon() {
        let typeScript = document.getElementById('TypeScript');
            if(typeScript.checked == true) {
                return 'block'; 
            } else {
                return 'none';
            }
        }
    

    image = URL.createObjectURL(image)

    function timeDuration() {
        let Start = new Date(dateStart);
        let End = new Date(dateEnd);
        let difference = End - Start;
    
        let dayDifference = Math.floor(difference / (24 * 60 * 60 * 1000)); // to get day
        let weekDifference = Math.floor(difference / (7 * 24 *60 * 60 * 1000)); // to get week or equal to 604800000
        let monthDifference = Math.floor(difference / (4 * 7 * 24 *60 * 60 * 1000)); // to get month or equal to 2419200000

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

    let project = {
        title: title,
        dateStart: dateStart,
        dateEnd: dateEnd,
        duration : timeDuration(),
        description: description,
        image: image,
        nodeJs: nodeJsIcon(),
        nextJs: nextJsIcon(),
        reactJs: reactJsIcon(),
        typeScript: typeScriptIcon(),
    }

    projects.push(project)

    renderProject()
}

function renderProject() {

    let projectContainer = document.getElementById('project-card-container')

    projectContainer.innerHTML = 
    `<div class="p-card">
        <img src="pictures/detail-project.jpg" alt="project" />
        <h3>Project Name</h3>
        <p>durasi : 3 bulan</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque magnam debitis ut officia, impedit totam.</p>
        <div class="icon-container">
            <div style="display: block;" class="icons8-nodejs"></div>
            <div style="display: block;" ><img src="pictures/next-js.png" alt="nextJs" /></div>
            <div style="display: block;" class="icons8-react"></div>
            <div style="display: block;" class="icons8-typescript"></div>
        </div>
        <div class="button-container">
            <a href="">edit</a>
            <a href="">delete</a>
        </div>
    </div>`

  for(let i = 0; i < projects.length; i++){
    projectContainer.innerHTML += 
    `<div class="p-card">
        <img src="${projects[i].image}" alt="" />
        <h3>${projects[i].title}</h3>
        <p>durasi : ${projects[i].duration}</p>
        <p>${projects[i].description}</p>
        <div class="icon-container">
            <div style="display: ${projects[i].nodeJs};" class="icons8-nodejs"></div>
            <div style="display: ${projects[i].nextJs};" ><img src="pictures/next-js.png" alt="nextJs" /></div>
            <div style="display: ${projects[i].reactJs};" class="icons8-react"></div>
            <div style="display: ${projects[i].typeScript};" class="icons8-typescript"></div>
        </div>
        <div class="button-container">
            <a href="">edit</a>
            <a href="">delete</a>
        </div>
    </div>`
  }
}

