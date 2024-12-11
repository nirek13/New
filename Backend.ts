fetch('https://canadabuys.canada.ca/opendata/pub/newTenderNotice-nouvelAvisAppelOffres.csv')
    .then(response => response.text())
    .then(data => {
        console.log(data);  // This will log the CSV content from the URL
    });
