export const NodeJs_axios = (method: string, url: string) => {
  return `
    var axios = require('axios');
    var config = {
      method: '${method}',
    maxBodyLength: Infinity,
      url: '${url}',
      headers: { 
        '': ''
      }
    };
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    `;
};

export const NodeJsFetch = (method: string, url: string): string => {
  return `
      fetch('${url}', {
        method: '${method}',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers here
        },
      })
      .then(response => response.json())
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error('Error:', error));
    `;
};

export const Python = (method: string, url: string): string => {
  return `
import requests

url = '${url}'
headers = {
    'Content-Type': 'application/json',
    # Add any additional headers here
}

response = requests.${method.toLowerCase()}(url, headers=headers)

try:
    data = response.json()
    print(data)
except ValueError:
    print(response.text)
`;
};
export const JavaSpringBoot = (method: string, url: string): string => {
  return `
// Import necessary libraries

import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

public class JavaSpringBoot {
    public static void main(String[] args) {
        // Set up your method, URL, and headers
        String method = "${method}";  // Change as needed
        String url = "${url}";
        
        // Set up headers
        HttpHeaders headers = new HttpHeaders();
        headers.set("Content-Type", "application/json");
        // Add any additional headers here
        
        // Create HTTP entity
        HttpEntity<String> entity = new HttpEntity<>(headers);
        
        // Make the request
        ResponseEntity<String> response = new RestTemplate().exchange(url, HttpMethod.valueOf(method), entity, String.class);
        
        // Print the response
        System.out.println(response.getBody());
    }
}
`;
};

export const ShellCurl = (method: string, url: string): string => {
  return `
  ${method.toLowerCase()} "${url}" \\
    -H "Content-Type: application/json" \\
    # Add any additional headers here
  `;
};

export const JavaScript_xhr = (method: string, url: string): string => {
  return `
const xhr = new XMLHttpRequest();
xhr.open('${method}', '${url}', true);
xhr.setRequestHeader('Content-Type', 'application/json');
// Add any additional headers here

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
    }
};

xhr.send();
`;
};
