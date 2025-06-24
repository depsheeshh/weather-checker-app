const apiKey = 'eb545b8fb3f151afba5d980f5f6e14d1';

async function getCuaca() {
    const kota = document.querySelector('.ambilKota').value.trim();

    if (!kota){
        alert('Masukkin yang bener anjing!');
        return;
    }
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${kota}&appid=${apiKey}&units=metric&lang=id`;

    try{
        const response = await fetch(url);
        if(!response.ok) throw new Error( response.statusText );
        const data = await response.json();

        document.querySelector('.namaKota').textContent = `${data.name}, ${data.sys.country}`;
        document.querySelector('.deskripsi').textContent = `Cuaca: ${data.weather[0].description}`;
        document.querySelector('.temperatur').textContent = `Suhu: ${data.main.temp} °C`;
        document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    
        document.querySelector('.cekCuaca').classList.remove('hidden');
    } catch(error){
        alert('Salah Woy');
    }
}