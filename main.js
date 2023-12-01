document.addEventListener('DOMContentLoaded', function () {

    const submit = document.getElementById('submit');
    const ip_address = document.querySelector('.ip_address');
    const result = document.querySelector('.result');

    submit.addEventListener('click', getIP);

    async function getIP() {

        const ip = ip_address.value;
        if (ip) {

            const response = await fetch(`https://ipapi.co/${ip}/json/`);
            const data = await response.json();

            const newHtml =
                ` 
            <ul>

                <li> IP Address: ${data.ip} </li>
                <li>City: ${data.city}</li>
                <li>Country: ${data.country}</li>
                <li>Country Name: ${data.country_name}</li>
                <li>Country Populations: ${data.country_population}</li>
                <li>Country Code: ${data.country_code}</li>
                <li>Country Caling Code: ${data.country_calling_code}</li>
                <li>Region: ${data.region}</li>
                <li>Region Code: ${data.region_code}</li>
                <li>ZIP Code: ${data.postal}</li>
                <li>Timezone: ${data.timezone}</li>
                <li>Latitude: ${data.latitude}</li>
                <li>Longitude: ${data.longitude}</li>

            </ul>   
            `;

            result.innerHTML = newHtml;
            
        }
        else {
            alert("Please enter a valid IP address");
        }
    }

    if (submit.click) {
        result.style.display = 'block';
    }

});