import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {QuoteService} from '../../services/quote.service';
import { Quote } from '../../domain/quote.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    quote: Quote = {
        cn: '被击垮通常只是暂时的，但如果你放弃的话，就会使它成为永恒。（Marilyn vos Savant',
        en: 'Being defeated is often a temporary condition. Giving up is what makes it permanent.',
        pic: 'assets/img/quote_fallback.jpg'
    };
    constructor(private fb: FormBuilder, private quoteService$: QuoteService) {
    }

    ngOnInit() {
        // this.form = new FormGroup({
        //     email: new FormControl('a@123.com', Validators.compose([Validators.required, Validators.email])),
        //     password: new FormControl('', Validators.required),
        // });
        this.form = this.fb.group({
            email: ['wang@143.com', Validators.compose([Validators.required, Validators.email, this.validate])],
            password: ['', Validators.required],
        });
        this.quoteService$.getQuote()
            .subscribe((data: Quote) => {
                this.quote = { ...data };
            });
    }
    onSubmit({value, valid}, ev: Event) {
        ev.preventDefault();
        console.log(JSON.stringify(value));
        console.log(JSON.stringify(valid));
    }

    validate(c: FormControl): {[key: string]: any} {
        if (!c.value) {
            return null;
        }
        const pattern = /^wang +/;
        if (pattern.test(c.value)) {
            return null;
        }
        return {
            emailNotValid: 'The email must start with wang',
        };
    }
}
