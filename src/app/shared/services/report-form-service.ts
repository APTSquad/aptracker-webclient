import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from "@angular/forms";

@Injectable()
export class ReportFormService {
    data: any[];
    private reportForm: BehaviorSubject<FormGroup/* | undefined*/>;
    reportForm$: Observable<FormGroup>

    constructor(private fb: FormBuilder) {
        this.loadData()
        this.reportForm = new BehaviorSubject(
            this.fb.group({
                clients: this.fb.array(this.getClients())
            })
        )
        this.reportForm$ = this.reportForm.asObservable();
        console.log(this.reportForm)
    }

    timeValidator(control: FormControl): {[s:string]:boolean}{
         
        if(control.value==="нет"){
            return {"time": true};
        }
        return {"time": false};
    }

    ngOnInit() {
        
        
    }

    addClient() {
        const currentReport = this.reportForm.getValue()
        const currentClients = currentReport.get('clients') as FormArray
    
        let temp = {
            name: "Клиент 1",
            projects: [{
                name: "Проект 1",
                expenses: [{
                    name: "Затрата 1",
                    id: 123,
                    time: 0
                    }]
                }]
            }

        currentClients.push(
          this.fb.group({
              name: temp.name,
              projects: this.fb.array(this.getProjects(temp.projects))
          })
        )
    
        this.reportForm.next(currentReport)
      }

    getClients() {
        return this.data.map(client => this.fb.group({
            name: client.name,
            projects: this.fb.array(this.getProjects(client.projects))
        }));
    }

    getProjects(projects: any[]) {
        return projects.map(project => this.fb.group({
            name: project.name,
            expenses: this.fb.array(this.getExpenses(project.expenses))
        }));
    }

    getExpenses(expenses: any[]) {
        return expenses.map(expense => this.fb.group({
            name: expense.name,
            id: expense.id,
            time: ['', [Validators.required, Validators.minLength(3)]]
        }))
    }

    loadData() {
        this.data = [{
            name: "Клиент 1",
            projects: [{
                name: "Проект 1",
                expenses: [{
                    name: "Затрата 1",
                    id: 123,
                    time: 0
                }]
            },
            {
                name: "Проект 2",
                expenses: [{
                    name: "Затрата 1",
                    id: 124,
                    time: 0
                }]
            }
            ]
        },
        {
            name: "Клиент 2",
            projects: [],
        }
        ]
    }

    debug() {
    }
}




const Data = ([
    //Client
    {
        name: "Клиент 1",
        projects: [
            //Project
            {
                name: "Проект 1",
                expenses: [
                    //Expense
                    {
                        name: "Затрата 1",
                        id: 123
                    }
                ]
            }
        ]
    },
    {
        name: "Клиент 2",
        projects: [],
    }
])