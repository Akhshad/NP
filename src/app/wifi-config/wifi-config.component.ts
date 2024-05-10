import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-wifi-config',
  templateUrl: './wifi-config.component.html',
  styleUrls: ['./wifi-config.component.css']
})
export class WifiConfigComponent {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  label: 'before' | 'after' = 'after';
  

  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato']
}
