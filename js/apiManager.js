function makeApiRequest(endpoint, method = 'GET', body = null) {
    const headers = {
        'Authorization': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvY3AucmVzcG9uZGVyLmxpdmUiLCJzdWIiOiJvc2lyYUlNT2ZlOFAiLCJpYXQiOjE3MTcwODg4MjUsImV4cCI6MTcxODI5ODQyNX0.b8PWuF3kJv56EWm8Vc0pPTDHEHn-F_BajhoNkeMVRDc", // Corrected template literal
        'Content-Type': 'application/json'
    };

    return fetch(endpoint, {
        method: method,
        headers: headers,
        body: body ? JSON.stringify(body) : null // Ensure body is correctly formatted or null
    })
        .then(response => {
            console.log(response.json());
            return response.json(); // Process the response and convert it to JSON
        });
}