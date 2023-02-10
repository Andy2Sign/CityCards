    let alertBtn = document.getElementById('btn');
    alertBtn.addEventListener('click', function(){
        let a = document.createElement('div');
        a.classList.add('alert-div');
        a.innerText = "Thanks a lot...We got your Comment!";
        body.appendChild(a)

        let btnBox = document.createElement('div');
        btnBox.classList.add('btnBox');
        a.appendChild(btnBox);
    
        let removeBtn = document.createElement('button');
        removeBtn.classList.add('removeBtn');
        btnBox.appendChild(removeBtn);
    
        removeBtn.addEventListener('click', function(){
            body.removeChild(a);
           a.innerText = "";
        })
    });