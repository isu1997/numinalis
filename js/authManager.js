const authManager = {
    token: null,

    fetchToken: function () {
        console.log("Fetching token...");
        return fetch('https://graphstg.responder.live/v2/oauth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                grant_type: "client_credentials",
                scope: "*",
                client_id: 54,
                client_secret: "PIkxZzWWLYfvN1w4yUHaiHfSJWnT1Wrlb4oL34Ah",
                user_token: "2f8cea3667c455fe4a47835e133fbbc0a8df1762c64d9284efb9d1e49a9a11f2"
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                this.token = data.token; // Update the internal token
                return data.token;
            })
            .catch(error => {
                console.error('Error during fetch token:', error);
            });
    },

    getToken: function () {
        return this.token; // Returns the current token
    }
};
