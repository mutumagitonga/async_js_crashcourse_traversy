// // SHOWING CALLBACK HELL:
// function getDataFromApi(url, callback) {
//     // Simulate some asynchronous task
//     setTimeout(() => {
//       const data = "fake data from " + url;
//       callback(data);
//     }, 1000);
//   }

//   function processData1(data, callback) {
//     // Do some processing on data
//     const newData = data + " processed once";
//     callback(newData);
//   }
  
//   function processData2(data, callback) {
//     // Do some more processing on data
//     const finalData = data + " processed twice";
//     callback(finalData);
//   }
  
//   getDataFromApi("https://api.example.com/data", (data) => {
//     processData1(data, (processedData1) => {
//       processData2(processedData1, (processedData2) => {
//         console.log(processedData2);
//       });
//     });
//   });
  

// Correcting the callback hell with async/await and promises
async function getDataFromApi(url) {
    // Return a new promise that resolves with the data
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                // Simulate a condition that might cause an error
                if (url === "https://api.example.com/bad") {
                    throw new Error("Bad URL");
                }
                const data = "fake data from " + url;
                resolve(data);  // Resolve the promise with the data
            } catch (error) {
                reject(error);
            }
        }, 1000);
    });
}

async function processData1(data) {
    // Return a new promise that resolves with the processed data
    return new Promise((resolve) => {
        setTimeout(() => {
            const newData = data + " processed once";
            resolve(newData);  // Resolve the promise with the newData
        }, 1000);
    });
}

async function processData2(data) {
    // Return a new promise that resolves with the further processed data
    return new Promise((resolve) => {
        setTimeout(() => {
            const finalData = data + " processed twice";
            resolve(finalData);  // Resolve the promise with the finalData
        }, 1000);
    });
}

async function fetchDataAndProcess() {
    const data = await getDataFromApi("https://api.example.com/data");
    const processedData1 = await processData1(data);
    const processedData2 = await processData2(processedData1);
    console.log(processedData2);  // This will now log the correctly processed data
}

fetchDataAndProcess();


// getDataFromApi("https://api.example.com/data")
//     .then(data => processData1(data))
//     .then(processedData1 => processData2(processedData1))
//     .then(processedData2 => console.log(processedData2));



// // USING ASYNC/AWAIT with TRY-CATCH for each read
// const fs = require('fs/promises');

// async function readFiles() {
//     try {
//         const data1 = await fs.readFile('file1.txt', 'utf8');
//         console.log('Data from file1:', data1);
//     } catch (error) {
//         console.error("Error reading file1.txt:", error);
//     }

//     try {
//         const data2 = await fs.readFile('file2.txt', 'utf8');
//         console.log('Data from file2:', data2);
//     } catch (error) {
//         console.error("Error reading file2.txt:", error);
//     }

//     try {
//         const data3 = await fs.readFile('file3.txt', 'utf8');
//         console.log('Data from file3:', data3);
//     } catch (error) {
//         console.error("Error reading file3.txt:", error);
//     }
// }

// readFiles();



// // USING PROMISE.allSettled -> Variation 1
// const fs = require('fs').promises;

// async function readFiles() {
//   const files = ['file1.txt', 'file2.txt', 'file3.txt'];
//   const readPromises = files.map(file => fs.readFile(file, 'utf8'));

//   const results = await Promise.allSettled(readPromises);

//   results.forEach((result, index) => {
//     if (result.status === 'fulfilled') {
//       console.log(`Data from ${files[index]}:`, result.value);
//     } else {
//       console.error(`Error reading ${files[index]}:`, result.reason);
//     }
//   });
// }

// readFiles();


// // USING PROMISES.allSettled -> Variation 2
// const fs = require('fs/promises');

// async function readFiles() {
//     const readPromises = [
//         fs.readFile('file1.txt', 'utf8'),
//         fs.readFile('file2.txt', 'utf8'),
//         fs.readFile('file3.txt', 'utf8'),
//     ];

//     results = await Promise.allSettled(readPromises);

//     results.forEach((result, index) => {
//         if(result.status='fulfilled') {
//             console.log(`Data from file ${index + 1}:`, result.value);
//         } else {
//             console.error(`Error reading file ${index + 1}:`, result.reason);
//         }
//     });
// }

// readFiles();