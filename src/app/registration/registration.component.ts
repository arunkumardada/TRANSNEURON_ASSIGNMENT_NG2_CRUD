import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
class Registration {
  constructor(
    public id: string = '',
    public name: string = '',
   
    public author: string = '',
    
  ) {}
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  //  list of Registrations
  registrations: Registration[] = [];
  // registration Model
  regModel: Registration;
  // registration form display status.  default will be false.
  showNew: Boolean = false;
  //  either 'Save' or 'Update' based on operation.
  submitType: string = 'Save';
  // It maintains table row index based on selection.
  selectedRow: number;
  
  constructor() {
    // Add default books data as mentioned in json.
    this.registrations.push(new Registration('1', 'Pro AngularJS', 'Freeman'));
    this.registrations.push(new Registration('2', 'AngularJS: Up and Running: Enhanced Productivity with Structured Web Apps','Brad Green'));
    this.registrations.push(new Registration('3', 'Angular 2 Cookbook','Matt Frisbie'));
  }

  ngOnInit() {}

  //  New Button.
  onNew() {
    // Initiate new registration.
    this.regModel = new Registration();
    // Change submitType to 'Save'.
    this.submitType = 'Save';
    // display registration entry section with this flag
    this.showNew = true;
  }

  // This method associate to Save Button.
  onSave() {
    if (this.submitType === 'Save') {
      // Push registration model object into registration list.
      this.registrations.push(this.regModel);
    } else {
      // Update the existing properties values based on model.
      this.registrations[this.selectedRow].id = this.regModel.id;
      this.registrations[this.selectedRow].name = this.regModel.name;
      this.registrations[this.selectedRow].author = this.regModel.author;
    }
    // Hide registration section.
    this.showNew = false;
  }


  onEdit(index: number) {
    // Assign selected table row index.
    this.selectedRow = index;
    // Initiate new registration.
    this.regModel = new Registration();
    // Retrieve selected registration from list and assign to model.
    this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
    // Change submitType to Update.
    this.submitType = 'Update';
    // Display registration entry section.
    this.showNew = true;
  }


  onDelete(index: number) {
   //deleting the list with using of index.
    this.registrations.splice(index, 1);
  }

  // This method associate toCancel Button.
  onCancel() {
    // Hide registration entry section.
    this.showNew = false;
  }


}
