import { Component ,Input , OnChanges } from '@angular/core';
import { FormArray,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { states,Address,Hero } from  './data-model'

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent {
  @Input() hero: Hero;


  heroForm : FormGroup;
  states = states;
  constructor(private fb : FormBuilder){
    this.createForm();
  }
  createForm(){
    this.heroForm = this.fb.group({
      name:['',Validators.required],
      secretLairs: this.fb.array([]),
      power: '',
      sidekick: ''
    });


  }


  ngOnChanges() {
    this.heroForm.reset({
      name: this.hero.name,
      address: this.hero.addresses[0] || new Address()
    });
  }
  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.heroForm.setControl('secretLairs', addressFormArray);
  }
  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  };
  addLair() {
    this.secretLairs.push(this.fb.group(new Address()));
  }

}
