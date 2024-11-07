export default function json2html(data) {
    // Get unique keys for table headers
    const headers = Array.from(new Set(data.flatMap(Object.keys)));
  
    // Start building the HTML table
    let html = `<table data-user="lokeshmeru@gmail.com">`;
    
    // Create the table header
    html += "<thead><tr>";
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    html += "</tr></thead>";
    
    // Create the table body
    html += "<tbody>";
    data.forEach(row => {
      html += "<tr>";
      headers.forEach(header => {
        html += `<td>${row[header] || ""}</td>`; // Fill empty cells if key is missing
      });
      html += "</tr>";
    });
    html += "</tbody></table>";
  
    return html; // Return HTML as a string
  }
  