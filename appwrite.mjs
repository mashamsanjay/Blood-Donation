import { Account, Client, Databases, ID, Query } from 'appwrite';

const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    projectId: "666c4d33003c6fad3629",
    databaseId: "666c4d99003de799d1e5",
    donorCollectionId: "667c413a000fa4a0c879",
}

const client = new Client();
client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId)
;

const databases = new Databases(client);
const account = new Account(client);


const getDocs = async () => {
    try {
        const result = await databases.listDocuments(config.databaseId, config.donorCollectionId, []);
        console.log(result);
        return result.documents;
    } catch (error) {
        console.log("getDocs " + error);
    }
}

const setDoc = async (data) => {
    try {
        const result = await databases.createDocument(config.databaseId, config.donorCollectionId, ID.unique(), data);
        console.log(result);
    } catch (error) {
        console.log("setDoc" + error);
    }
}

export {setDoc, getDocs}