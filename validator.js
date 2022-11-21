let inputs = document.querySelectorAll('input[data-rule]');

for (let input of inputs){
    input.addEventListener('blur', function (){
           let rule = this.dataset.rule;
        
           let value = this.value;
           let check;

           switch (rule) {
                
            case 'name':
                check = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/.test(value);
            break;
              
            case 'email':
                check = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(value);
            break;
           }

           if(check){
                this.classList.remove('invalid');
                this.classList.add('valid');
           } else {
            this.classList.remove('valid');
            this.classList.add('invalid');
           } 
    });
}