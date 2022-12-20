import {Component, Input, NgModule, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ImagesCollection, ImagesCollectionImportMethod} from '../images-collection';
import {AppConfigService} from '../../app-config.service';

declare var google: any;

@Component({
  selector: 'app-images-collection-new',
  templateUrl: './images-collection-new.component.html',
  styleUrls: ['./images-collection-new.component.css']
})
export class ImagesCollectionNewComponent implements OnInit {

  @Input() modalReference: any;
  imagesCollection: ImagesCollection = new ImagesCollection();
  imagesCollectionSource = ImagesCollectionImportMethod;
  usePattern = false;
  // constructor(private activeModal: NgbActiveModal) { }
  ImagesCollectionImportMethod = ImagesCollectionImportMethod;
  displayLocalImportOption = false;
  displayCloudImportOption = false;

  constructor(private activeModal: NgbActiveModal, private appConfigService: AppConfigService) {
    if (this.appConfigService.getConfig().displayLocalImportOption) {
      this.displayLocalImportOption = true;
    }

    if (this.appConfigService.getConfig().displayLocalImportOption) {
      this.displayCloudImportOption = true;
    }
  }

  ngOnInit() {
    this.imagesCollection.importMethod = ImagesCollectionImportMethod.UPLOADED;
  }
  cancel() {
    this.modalReference.dismiss();
  }
  save() {
    this.modalReference.close(this.imagesCollection);
  }

  gGriveAuth() {
    var client = google.accounts.oauth2.initCodeClient({
      client_id: this.appConfigService.getConfig().googleWIPPCredentialClientId,
      scope: 'https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/drive.metadata.readonly',
      ux_mode: 'popup',
      response_type: 'code',
      redirect_uri: this.appConfigService.getConfig().googleWIPPCredentialClientRedirectUri,
      callback: (response) => {
        console.log(response);
        var code = response.code;
        this.imagesCollection.gdriveCode = code;
        console.log(code);
      }
    });

    client.requestCode();
  }
}
