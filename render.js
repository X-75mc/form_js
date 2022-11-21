const sendData = async (url, data) => {
    const response = await fetch(url, {
      method: 'POST',
      body: data,
    });
  
    if (!response.ok) {
      throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
    }
  
    return await response.json();
  };

  const sendCart = () => {

    const cartForm = document.querySelector('.formTest');

    const data = {
        name: 'Plushevyi mishka',
        count: 3,
    };

    cartForm.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(cartForm);

        //const cartList = JSON.stringify(data);
        
        sendData('https://jsonplaceholder.typicode.com/posts', formData).then(() => {cartForm.reset();});
    });

  };

  sendCart();


  
