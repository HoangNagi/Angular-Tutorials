import {
  FilterButton,
  Filter
} from './../../models/filtering.model';
import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  of ,
  observable,
  Observable,
  Subject
} from 'rxjs';
import {
  TodoService
} from 'src/app/services/todo.service';
import {
  takeUntil,
  map
} from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  filterButtons: FilterButton[] = [{
      type: Filter.All,
      label: 'All',
      isActive: true
    },
    {
      type: Filter.Active,
      label: 'Active',
      isActive: false
    },
    {
      type: Filter.Completed,
      label: 'Completed',
      isActive: false
    },
  ];

  length = 0;
  hasComplete$: Observable < boolean > ;
  destroy$: Subject < null > = new Subject < null > ();

  constructor(private todoService: TodoService) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.hasComplete$ = this.todoService.todos$.pipe(
      map(todos => todos.some(t => t.isCompleted)),
      takeUntil(this.destroy$)
    );

    this.todoService.length$.pipe(takeUntil(this.destroy$))
      .subscribe(length => {
        this.length = length
      });
  }

  clearCompleted(){
    this.todoService.clearCompleted();
  }

  filter(type: Filter) {
    this.setActiveFilterBtn(type);
    this.todoService.filterTodos(type);
  }

  setActiveFilterBtn(type: Filter) {
    this.filterButtons.forEach(btn => {
      btn.isActive = btn.type === type;
    })
  }
}
