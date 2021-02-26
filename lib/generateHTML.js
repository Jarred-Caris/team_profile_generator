 



  `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello Team</title>
    
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    
    </head>
    <body>
        <h1 id="title">This is your new TEAM!!</h1>
        
    
    
  
    </body>
    </html>`

    function renderEngineer(engineer){
      let generateEngineer = `
      <div class="container">
  <div class="row">
    <div class="col-sm">
      <div class="card" style="width: 18rem;">
          <img src="https://i.pinimg.com/736x/96/bd/a0/96bda0839bdbf74324d4c197818bbfb1.jpg" class="card-img-top" alt="Engineer pic">
          <div class="card-body">
            <h5 class="card-title">Engineer</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${engineer.name}</li>
            <li class="list-group-item">Email: ${engineer.email}</li>
            <li class="list-group-item">Github: ${engineer.github}</li>
            <li class="list-group-item">ID: ${engineer.id}</li>
          </ul>
         
        </div>
    </div>`;
    return generateEngineer;

    };

    function renderManager(manager){
      let generateManager =
    `<div class="col-sm">
      <div class="card" style="width: 18rem;">
          <img src="https://img.pngio.com/manager-png-15-clip-arts-and-logos-for-free-download-on-een-2019-manager-png-640_640.png" class="card-img-top" alt="Manager pic">
          <div class="card-body">
            <h5 class="card-title">Manager</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${manager.name}</li>
            <li class="list-group-item">Email: ${manager.email}/li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}/li>
            <li class="list-group-item">ID: ${manager.id}</li>
          </ul>
         
        </div>
    </div>`
    return generateManager;
    }

    function renderIntern(intern){
      let generateIntern= 
    `<div class="col-sm">
      <div class="card" style="width: 18rem;">
          <img src="https://webstockreview.net/images/resume-clipart-internship-13.png" class="card-img-top" alt="Intern pic">
          <div class="card-body">
            <h5 class="card-title">Intern</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${intern.name}</li>
            <li class="list-group-item">Email :${intern.email}</li>
            <li class="list-group-item">School: ${intern.school}</li>
            <li class="list-group-item">ID: ${intern.id}</li>
          </ul>
         
        </div>
    </div>
  </div>
</div>`
return generateIntern;
    }