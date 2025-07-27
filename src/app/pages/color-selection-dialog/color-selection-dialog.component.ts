import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorModel } from '../../interfaces/color.interface';
import { catchError } from 'rxjs';


@Component({
  selector: 'app-color-selection-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-selection-dialog.component.html',
  styleUrls: ['./color-selection-dialog.component.scss']
})
export class ColorSelectionDialogComponent implements OnChanges, OnDestroy {
  @Input() isOpen: boolean = false;
  @Input() colors: ColorModel[] = [];
  @Output() closeDialog = new EventEmitter<void>();
  @Output() colorSelected = new EventEmitter<ColorModel>();


  categoryList: string[] = [];
  selectedCategory: string = "";

  colorList: ColorModel[] = [];
  selectedColor: ColorModel | null = null;


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen']) {
      if (this.isOpen) {
        this.disableBodyScroll();
        this.categoryList = this.getListCategories();
        if(!this.selectedCategory) { 
          this.onCategoryChange(this.categoryList[0] || "RED");
        }
      } else {
        this.enableBodyScroll();
      }
    }
  }

  getListCategories() {
    const normalized = (this.colors || [])
      .map(c => c.category.trim().toUpperCase());
    const unique = Array.from(new Set(normalized));
    return unique.sort();
  }

  onCategoryChange(category: string) { 
    this.selectedCategory = category;
    this.colorList = this.colors.filter(f => f.category === this.selectedCategory);
  }


  private disableBodyScroll(): void {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = this.getScrollbarWidth() + 'px';
  }

  private enableBodyScroll(): void {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }

  private getScrollbarWidth(): number {
    return window.innerWidth - document.documentElement.clientWidth;
  }

  ngOnDestroy(): void {
    this.enableBodyScroll();
  }

  onClose(): void {
    this.closeDialog.emit();
  }

  onColorSelect(color: ColorModel): void {
    this.selectedColor = color;
    this.colorSelected.emit(color);
    this.onClose();
  }

  onBackdropClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
}
