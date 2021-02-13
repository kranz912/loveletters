import {AngularFireStorage} from '@angular/fire/storage'
import { Observable } from 'rxjs';
import {finalize} from 'rxjs/operators'
export class UploadAdapter {
    constructor(private loader:any,private Storage:AngularFireStorage){
        this.loader = loader;
    }
    uploadPercent: Observable<number>;
    downloadURL: Observable<string>
    upload(){
        return this.loader.file.then(file=>
            new Promise((resolve,reject)=>{
                const randomId = Math.random().toString(36).substring(2);
                const filePath = 'Images/'+randomId
                const fileRef= this.Storage.ref(filePath);
                let uploadTask = this.Storage.upload(filePath, file);
                this.uploadPercent = uploadTask.percentageChanges();
                uploadTask.snapshotChanges().toPromise().then(
                        ()=>{ 
                            fileRef.getDownloadURL().toPromise().then(downloadUrl=>{
                                console.log(downloadUrl);
                                resolve({default: downloadUrl})
                            });                           
                           
                    }
                )
            })
        );
    }
}