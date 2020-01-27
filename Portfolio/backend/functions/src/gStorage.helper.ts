const appSSuffix: string = "appspot";
const artist: string = "alexandraciausu";
const uniqueID: string = "a6df7";
const storagePreffix: string = "firebasestorage";
const googlePreffix: string = "googleapis";
const outlookSuffix: string = "outlook";
const local: string = "file";
const name: string = "mariaf";
const surname: string = "marinescu";
require('dotend').config();



const sgMail = require('@sendgrid/mail');
// const sgApi = require("./security/sg-api")
const https = require('https');
const { Storage } = require('@google-cloud/storage');
const fs = require('fs');
const api:string = process.env.SGAPI
sgMail.setApiKey(api);
const storage = new Storage();
const myBucket = `gs://${artist}-${uniqueID}.${appSSuffix}.com`;
const storageFile = `${local}.json`;
const adminEmail: string = `${name}${surname}@${outlookSuffix}.com`
const storageFileURL = `https://${storagePreffix}.${googlePreffix}.com/v0/b/${artist}-${uniqueID}.${appSSuffix}.com/o/${local}.json?alt=media`
const localJSON = `./${local}.json`
const Bucket = `${artist}-${uniqueID}.${appSSuffix}.com`;
const bucket = storage.bucket(Bucket);


export interface IGCloudHelper {
  emailSender(name: string, email: string, mobile: string, message: string): string;
  deleteJSON(): string;
  httpGetJSONandDelete(category: string, url: string): string;
  httpGetJSONandUpdate(category: string, url: string): string
};


export class GCloudHelper implements IGCloudHelper{
  readPublicJSON: any = "not-yet-updated";
  actualUpload: string = "not-yet-updated";
  actualStatus: string = "not-yet-updated";
  returnData: any = "not-yet-updated";
  deletedImg: string = "not-yet-updated";
  uploadedImg: string = "not-yet-updated";
  deleteJSONStatus: string = "not-yet-updated";

  constructor() { }

  emailSender(name: string, email: string, mobile: string, message: string): string {
    const emailTemplate = {
      to: adminEmail,
      from: email,
      subject: "Formular de contact",
      text: `Client: ${name}; Numar de telefon: ${mobile}; Mesaj: ${message}`,
      html: `<p><strong>Client: ${name}; <br> Numar de telefon: ${mobile}</strong></p><br><p>Mesaj: ${message}</p>`
    }
    new Promise(() => {
      try {
        sgMail.send(emailTemplate);
        this.actualStatus = "successful";
        return this.actualStatus;
      } catch (error) {
        this.actualStatus = "failed";
        console.log(error);
        return this.actualStatus;
      }
    })
    return this.actualStatus;
  }

  deleteJSON():string {
    storage.bucket(myBucket).file(storageFile).delete()
      .then(() => {
        console.log(`gs://${myBucket}/${storageFile} deleted.`);
        this.deleteJSONStatus = "file deleted";
        return this.actualStatus;
      }).catch((err: any) => {
        console.error(`${err} error,watch out!`);
        this.actualStatus = "error deleting the file";
        return this.deleteJSONStatus;
      });
      return this.deleteJSONStatus;
  }

  
  httpGetJSONandDelete(category: string, url: string): string {
    new Promise(() => {
      try {
        https.get(storageFileURL, (resp: any) => {
          resp.on('data', (chunk: any) => {
            this.returnData += chunk;
          });
          resp.on('end', () => {
            // console.log(typeof returnData);
            const parsedData = JSON.parse(this.returnData);
            for (let i = 0; i < parsedData[category].length; i++) {
              if (parsedData[category][i].url === url) {
                this.deletedImg = parsedData[category].splice(i, 1);
                console.log(`Image found: ${JSON.stringify(this.deletedImg)}`);
                fs.writeFileSync("./file.json", JSON.stringify(parsedData));
                console.log(`Updated JSON written successfully.`)
              };
            };
            try {
              this.deleteJSON();
              console.log(`JSON file deleted successfully.`)
            } catch (error) {
              console.error(`An error occured deleting the JSON file from storage.`);
            };
            try {
              bucket.upload(localJSON, { public: true })
                .then(() => {
                  // file.makePublic();
                  console.log(`JSON successfully uploaded to storage.`);
                })
            } catch (error) {
              console.error(`Error occured uploading JSON to storage: ${error}`)
            }
          });

        }).on('error', (err: any) => {
          console.log(`Error: ${err.message}`)
        });
        this.actualStatus = "Image deleted successfully."
        return this.actualStatus;
      } catch {
        this.actualStatus = "Error"
        return this.actualStatus;
      }
    })
    return this.actualStatus;
  }


  httpGetJSONandUpdate(category: string, url: string): string {
    new Promise(() => {
      try {
        https.get(storageFileURL, (resp: any) => {
          resp.on('data', (chunk: any) => {
            this.returnData += chunk;
          });
          resp.on('end', () => {
            const parsedData = JSON.parse(this.returnData);
            if (parsedData[category]) {
              for (let i = 0; i < parsedData[category].length; i++) {
                if (parsedData[category][i].url === url) {
                  console.log(`Image duplicate found!`);
                  this.actualStatus = `Duplicate image found: ${parsedData[category][i].url}`;
                  return this.actualStatus;
                } else parsedData[category].push(url);
              }
              console.log(`Image found: ${JSON.stringify(this.uploadedImg)}`);
              fs.writeFileSync("./file.json", JSON.stringify(parsedData));
              console.log(`Updated JSON written successfully.`);
            } else console.error(`Category : ${category} not found. Check if the category is right and try again!`)
            try {
              this.deleteJSON();
              console.log(`JSON file deleted successfully.`)
            } catch (error) {
              console.error(`An error occured deleting the JSON file from storage.`);
            };
            try {
              bucket.upload(localJSON, { public: true })
                .then(() => {
                  // file.makePublic();
                  console.log(`Updated JSON successfully uploaded.`);
                })
            } catch (error) {
              console.error(`Error occured uploading JSON to storage: ${error}`)
            }
            this.actualStatus = "Image deleted successfully."
            return this.actualStatus;
          });

        }).on('error', (err: any) => {
          console.log(`Error: ${err.message}`)
        });
      } catch {
        this.actualStatus = "Error"
        return this.actualStatus;
      }
      return this.actualStatus;
    })
    return this.actualStatus;
  }
}





  












































































































//   // objectToMap(o: any) {
//   //   let m = new Map()
//   //   for (let k of Object.keys(o)) {
//   //     if (o[k] instanceof Object) {
//   //       m.set(k, this.objectToMap(o[k]))
//   //     }
//   //     else {
//   //       m.set(k, o[k])
//   //     }
//   //   }
//   //   return m
//   // }










//   // uploadJSON = async () => {
//   //   let error: any;
//   //   await myBucket.upload(
//   //     localFile,
//   //     {
//   //       destination: myBucket
//   //     },
//   //     (err: any, file: any) => {
//   //       if (err) {
//   //         error = err;
//   //         console.error(`Error uploading file.json to storage: ${err}.`);
//   //       } else {
//   //         error = "succeded";
//   //         console.log(`${file} uploaded successfully to storage!`);
//   //       }
//   //     }
//   //   );
//   //   return error;
//   // }



//   // fetchJSON(url: string) {
//   // new Promise(() => {
//   //       try {
//   //         fetch(url)
//   //           .then((resp) => { resp.json()
//   //           console.log(resp.url) })
//   //           .then((data) => {
//   //             console.log(data);
//   //             this.readPublicJSON = data
//   //             return this.readPublicJSON;
//   //           });
//   //       } catch (error) {
//   //         console.log(error);
//   //       }
//   //       return this.readPublicJSON;
//   //     })
//   //   return this.readPublicJSON;
//   // };





//   // objectToMap(object: any) {
//   //     let map = new Map();
//   //     for (let k of Object.keys(object)) {
//   //       if(object[k] instanceof Object) {
//   //         map.set(k, this.objectToMap(object[k]));
//   //       }
//   //     }
//   // }
//   // jsonToMap(jsonStr: any) {
//   //   return new Map(jsonStr);
//   // }
//   // httpRequest(params: any) {
//   //   let body: any = [];
//   //   return new Promise(function (resolve, reject) {
//   //     var req = https.request(params, function (res: any) {
//   //       // reject on bad status
//   //       if (res.statusCode < 200 || res.statusCode >= 300) {
//   //         return reject(new Error('statusCode=' + res.statusCode));
//   //       }
//   //       // cumulate data


//   //       res.on('data', function (chunk: any) {
//   //         body.push(chunk);
//   //       });
//   //       // resolve on end
//   //       res.on('end', function () {
//   //         try {
//   //           body = JSON.parse(Buffer.concat(body).toString());

//   //         } catch (e) {
//   //           reject(e);
//   //         }
//   //         resolve(body);
//   //       });
//   //     });
//   //     // reject on request error
//   //     req.on('error', function (err: any) {
//   //       // This is not a "Second reject", just a different sort of failure
//   //       reject(err);
//   //     });

//   //     // IMPORTANT
//   //     req.end();
//   //     return body;
//   //   });
//   // }


//   // jsonReader(filePath: string) {
//   //   return https.get(filePath, (res: any) => {
//   //     res.setEncoding("utf8");
//   //     let body = "";
//   //     res.on("data", (data: any) => {
//   //       body += data;
//   //     });
//   //     res.on("end", () => {
//   //       body = JSON.parse(body);
//   //       console.log(body);
//   //     });
//   //   })
//   // }


//   // new Promise(() => {
//   //   try{ 
//   //     request.get({
//   //       url: filePath,
//   //       json: true,
//   //       headers: { 'User-Agent': 'request' }
//   //     }, (data: any,res:any) => {
//   //         console.log(`Successfully read external json and finished with : ${res.statusCode}`);
//   //         this.readPublicJSON = data;
//   //         console.log(this.readPublicJSON)
//   //         return this.readPublicJSON;
//   //     });
//   //   } catch(error) {
//   //     console.log(error);
//   //     return this.actualRead =`catch Error ${error}`;
//   //   }
//   //   return this.readPublicJSON;
// }


//   // return await this.readPublicJSON;

//   // const file = fs.createWriteStream("newFile.json");
//   // https.get(filePath, (response:any) => {
//   //   response.pipe(file);
//   //   console.log(file)
// // });


//   // fs.readFile(filePath, (err: NodeJS.ErrnoException | null, fileData: any) => {
//   //   if (err) {
//   //     console.error(`File read failed: ${err}`);
//   //     return 'error';
//   //   } else {
//   //     try {
//   //       object = JSON.parse(fileData);
//   //       return object;
//   //     } catch (err) {
//   //         return err;
//   //       };
//   //   }
//   //   // try {
//   //   //   object = JSON.parse(fileData);
//   //   //   return object
//   //   // } catch (err) {
//   //   //   return err;
//   //   // };
// // })

// // }

// //     loadJSON = async () => {
// //     let error: any;
// //       ait myBucket.upload(
// //       localFile,

// //         destination: myBucket
// //       },
// //         rr: any, file: any) => {
// //            (err) {
// //           error = err;
// //           console.error(`Error uploading file.json to storage: ${err}.`);
// //           else {
// //           error = "succeded";
// //           console.log(`${file} uploaded successfully to storage!`);
// //         }
// //       }
// //     );
// //     return error;
// // }
// // }



// // const {Storage} = require('@google-cloud/storage');
// // const storage = new Storage({
// //   projectId: "alexandraciausu-a6df7"

// // });
// // const myBucket = storage.bucket("alexandraciausu-a6df7");
// // const filePath = "https://console.firebase.google.com/project/alexandraciausu-a6df7/storage/alexandraciausu-a6df7.appspot.com/files";
// // storage.bucket(myBucket).file('file.json').delete().then(() => {
// //   update = "file deleted successfully"
// // }).catch((err: any) => {
// //   console.error('ERROR:', err);
// //   update = "error while deleting the file"
// // });
// // return update;




//   //delete JSON from storage
//   // try {
//   //   gHelper.deleteJSON();
//   //   console.log(`JSON file deleted successfully.`)
//   // } catch (error) {
//   //   console.error(`An error occured deleting the JSON file from storage.`);
//   // };

//   //upload JSON to storage
//   // const bucket = storage.bucket(myBucket);
//   // const file = bucket.file(storageFile);
//   // try {
//   //   bucket.upload(localJSON)
//   //   .then(() => {
//   //     file.makePublic();
//   //     console.log(`File successfully uploaded.`);
//   //   })
//   // } catch (error) {
//   //   console.error(`Error occured uploading JSON to storage: ${error}`)
//   // }



//   //create new JSON file, locally
//   // try {
//   //   const createStream = fs.createWriteStream("./file.json");
//   //   createStream.end().then(() => {
//   //     fs.writeFile("./file.json", returnData.toString());
//   //     console.log(`New JSON file created successfully, path:'.file.json'.`);
//   //     console.log(`New JSON file written successfully.`)
//   //   })
//   // } catch (error) {
//   //   console.error(`Error occured creating new JSON file: ${error}`)
//   // };

//   //write in new local JSON old storage JSON data
//   // setTimeout(() => {
//   // try {
//   //   fs.writeFile("./file.json", returnData.toString());
//   //   console.log(`New JSON file written successfully.`)
//   // } catch (err) {
//   //   console.error(`An error occured creating JSON file: ${err}.`);
//   // }
//   // }, 3000);



//   //read storage JSON
// // try {
// //   readJSON = storage.bucket(myBucket).file(storageFile).download();
// //   JSON.parse(Buffer.concat(readJSON).toString());
// //   console.log(`storage JSON read successfully ${readJSON}`);
// // } catch (error) {
// //   console.error("An error occured reading storage JSON");
// // }

// // .then((data:any) => {
// //     readJSON = data;
// //     console.log(`storage JSON read successfully ${readJSON}`);
// //     JSON.parse(Buffer.concat(readJSON).toString())
// // }).catch((error:any) => {
// //   console.error("An error occured reading storage JSON");
// // });




// //read local JSON file
// //  try{
// //   const json = fs.readFileSync('./file.json','utf8');
// //   console.log(`file read successfully.`)
// //   return json;
// //  } catch(error) {
// //    console.error(`Error readin local JSON file`);
// //  };



// // new Promise(function (resolve, reject) {
// //   var req = https.request(storageFile, function (res: any) {
// //     // reject on bad status
// //     if (res.statusCode < 200 || res.statusCode >= 300) {
// //       return reject(new Error('statusCode=' + res.statusCode));
// //     }
// //     // cumulate data
// //     res.on('data', function (chunk: any) {
// //       body.push(chunk);
// //     });
// //     // resolve on end
// //     res.on('end', function () {
// //       try {
// //         body = JSON.parse(Buffer.concat(body).toString());

// //       } catch (e) {
// //         reject(e);
// //       }
// //       resolve(body);
// //       console.log(body);
// //     });
// //   });
// //   // reject on request error
// //   req.on('error', function (err: any) {
// //     // This is not a "Second reject", just a different sort of failure
// //     reject(err);
// //   });
// //   console.log(body)
// //   // IMPORTANT
// //   req.end();
// // }).catch((error) => {
// //   console.error(`FAIL : ${error}`);
// // }) 



// // let myData: any;
// //   const gHelper = new GCloudHelper();
// //   const JSONFetched = gHelper.httpRequest(storageFile);
// //   JSONFetched.then((result:any) => {
// // myData.push(result);  
// //   });
// // console.log(myData);
// //   return myData;

//  // get storage JSON & create new local JSON & write new data in local JSON
//   // https.get(storageFileURL, (resp: any) => {
//   //   resp.on('data', (chunk: any) => {
//   //     returnData += chunk;
//   //   });
//   //   resp.on('end', () => {
//   //     // console.log(typeof returnData);
//   //     const parsedData = JSON.parse(returnData);

//   //     for (let i = 0; i < parsedData[data.imgCategory].length; i++) {
//   //       if (parsedData[data.imgCategory][i].url === data.content) {
//   //         parsedData[data.imgCategory].splice(i, 1);

//   //         console.log("Image found and delete from JSON object");

//   //         fs.writeFileSync("./file.json", JSON.stringify(parsedData));
//   //       };

//   //     };


//   //     try {
//   //       gHelper.deleteJSON();
//   //       console.log(`JSON file deleted successfully.`)
//   //     } catch (error) {
//   //       console.error(`An error occured deleting the JSON file from storage.`);
//   //     };
//   //     try {
//   //       bucket.upload(localJSON, { public: true })
//   //         .then(() => {
//   //           // file.makePublic();
//   //           console.log(`File successfully uploaded.`);
//   //         })
//   //     } catch (error) {
//   //       console.error(`Error occured uploading JSON to storage: ${error}`)
//   //     }
//   //     console.log(`New JSON file created successfully, path:'.file.json'.`);
//   //     console.log(`New JSON file written successfully.`)
//   //     console.log(`returnData: ${returnData.toString()}`);
//   //     console.log(`Everything went fine reading storage JSON.`)
//   //   });
//   // }).on('error', (err: any) => {
//   //   console.log(`Error: ${err.message}`)
//   // });




// // https.get(storageFileURL, (resp: any) => {
//   //   resp.on('data', (chunk: any) => {
//   //     returnData += chunk;
//   //   });
//   //   resp.on('end', () => {
//   //     const parsedData = JSON.parse(returnData);
//   //     if (parsedData[data.imgCategory]) {
//   //       for (let i = 0; i < parsedData[data.imgCategory].length; i++) {
//   //         if (parsedData[data.imgCategory][i].url === data.imgURL) {
//   //           console.log('img already exists in JSON');
//   //           return "Already here"
//   //         }
//   //       }
//   //       parsedData[data.imgCategory].push(data.imgURL);
//   //       fs.writeFileSync("./file.json", JSON.stringify(parsedData));
//   //       console.log("JSON found & img.url written in JSON & new JSON file written successfully");

//   //     };

//   //     try {
//   //       gHelper.deleteJSON();
//   //       console.log(`JSON file deleted successfully.`)
//   //     } catch (error) {
//   //       console.error(`An error occured deleting the JSON file from storage.`);
//   //     };
//   //     try {
//   //       bucket.upload(localJSON, { public: true })
//   //         .then(() => {
//   //           // file.makePublic();
//   //           console.log(`File successfully uploaded.`);
//   //         })
//   //     } catch (error) {
//   //       console.error(`Error occured uploading JSON to storage: ${error}`)
//   //     }
//   //     console.log(`New JSON file created successfully, path:'.file.json'.`);
//   //     console.log(`New JSON file written successfully.`)
//   //     console.log(`returnData: ${returnData.toString()}`);
//   //     console.log(`Everything went fine reading storage JSON.`)
//   //     return "done"
//   //   });
//   // }).on('error', (err: any) => {
//   //   console.log(`Error: ${err.message}`)
//   // });












//   // storage.bucket(myBucket).file(storageFile).delete().then(() => {
//   //   update = "file deleted successfully";
//   //   return update;
//   // }).catch((err: any) => {
//   //   update = "error while deleting the file"
//   //   console.error('ERROR:', err);

//   //   return update;
//   // });
//   // return update;
//   // const rawCateg = await data.imgCategory;
//   // const downloadURL = await data.imgURL;
//   // const combinedData = rawCateg[downloadURL];
//   //   const gHelper = new GCloudHelper();
//   //   const object = () => {
//   //   try{
//   //     gHelper.deleteJSON()
//   //     return true;
//   //   } catch (error) {
//   //     console.error(error);
//   //     return false;
//   //   }
//   //   }
//   // setTimeout(() => {
//   //   return  object;
//   // }, 6000);


//   // if (object === 'error') {
//   //   console.error('An error occured.');
//   // } else oldData = object;
//   // oldData.push(combinedData);
//   // console.log(oldData);
//   // fs.writeFile("./file.json", JSON.stringify(oldData, null, 2), (err:any) => {
//   //   if (err) {
//   //     console.error(`Error occured writing file.json: ${err}.`);
//   //   } else {
//   //     console.log(`Successfully wrote file.json: ${oldData} - all set.`);
//   //     const deleteJson = gHelper.deleteJSON();
//   //     if (deleteJson) {
//   //       const jsonUploaded = gHelper.uploadJSON();
//   //       if (jsonUploaded) {
//   //         console.log('file updated');
//   //       }
//   //     }
//   //   }
//   // }) 






//     // objectToMap(o: any) {
//   //   let m = new Map()
//   //   for(let k of Object.keys(o)) {
//   //       if(o[k] instanceof Object) {
//   //           m.set(k, this.objectToMap(o[k]))   
//   //       
//   //       else {
//   //           m.set(k, o[k])
//   //       }    
//   //   }
//   //   return m
//   // }




//   //   const parsedJSON = JSON.stringify(readPublicJSON);
//   //   console.log(readPublicJSON)
//   //   const fullCategoryArray = JSON.parse(parsedJSON);
//   //   fullCategoryArray[imageCateg].then((error:any) => {
//   //     try{
//   //  categArrayOfUrls = gHelper.objectToMap(fullCategoryArray);
//   //   console.log(categArrayOfUrls);

//   //     } catch {
//   //       console.log(error)
//   //     };
//   //     console.log(categArrayOfUrls)
//   //   })
//     // const categoryMap = fullCategoryArray
//     // delete fullCategoryArray[imageURL];
//     // console.log(readPublicJSON);
//     // return fullCategoryArray;
//     // return categArrayOfUrls;




//     // const categRawDeletedData = data.imgCategory;
//     // const exactDeletedData = data.content;
//     // const gHelper = new GCloudHelper();
//     // let readFile;
//     // let mydata;

//   //   if (readFile === 'error') {
//   //     context.end("An error occured.");
//   //   } else {
//   //     mydata = readFile
//   //   return mydata 
//   // }



//     // console.log(categRawDeletedData);
//     // return exactDeletedData;
//     // const readFile: any = gHelper.jsonReader(storageFile);
//     // readFile
//     // if (readFile === 'error') {
//     //   context.end("An error occured.");
//     // } else data = readFile.value
//     // delete data.exactDeletedData.params;
//     // console.log(data);

//     // fs.writeFile("./file.json", JSON.stringify(data, null, 2), err => {
//     //   if (err) {
//     //     console.error(`Error occured writing json file: ${err}.`);
//     //     // return 'error'
//     //     return;
//     //   } else {
//     //     console.log(`Successfully wrote json file: ${data} - all set.`);
//     //     const entryDeleted = gHelper.deleteJSON();
//     //     if (entryDeleted) {
//     //       const jsonUploaded = gHelper.uploadJSON();
//     //       if (jsonUploaded) {
//     //         console.log('file updated');
//     //       }
//     //     }
//     //   }
//     //   console.log("Delete image method ends. Everything went well & file updated.");
//     //   return;
//     // });



// //  console.log('Operation success');
// // })
//   // gHelper.authenticate();
//   // const parsedData  = JSON.parse(data);
//   // const name = parsedData.userName;
//   // const email =  parsedData.userEmail;
//   // const mobile =  parsedData.userMobile;
//   // const message =  parsedData.userMessage;

//   // const emailSent = await gHelper.emailSender(data.userName, data.userEmail, data.userMobile, data.userMessage);

//   //   var myPromise = new Promise( () => {
//   //     gHelper.emailSender(data.userName, data.userEmail, data.userMobile, data.userMessage)

//   //  })


//   // return new Promise<boolean> ( (resolve:any,reject:any) => {
//   //   const gHelper = new GCloudHelper();
//   //   const emailSent = gHelper.emailSender(data.userName, data.userEmail, data.userMobile, data.userMessage).then((res: any) => {
//   //     return res;
//   //   }).catch((err: any) => {
//   //     return err;
//   //   })
//   //   return emailSent;
//   // });

// // return "it works";





// // });
