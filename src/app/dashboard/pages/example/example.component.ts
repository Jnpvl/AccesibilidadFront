import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { AsegudarorasService } from '../../../services/aseguradoras.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-example',
  imports: [TitleComponent, CommonModule, FormsModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {

  data: any[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  totalItems: number = 0;
  pageSize: number = 0;
  searchText: string = '';
  private searchTimeout: any;

  constructor(
    private aseguradorasService: AsegudarorasService
  ) {
    this.initializeData();
  }

  private async initializeData() {
    const response = await this.aseguradorasService.getAseguradoras(
      this.currentPage, this.pageSize, this.searchText
    );
    this.currentPage = response.pagination.page;
    this.pageSize = response.pagination.pageSize;
    this.data = response.data;
    this.totalItems = response.pagination.totalRecords;
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
  }

  onSearchInputChange(): void {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.currentPage = 1;
      this.initializeData();
    }, 500); 
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadPage();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadPage();
    }
  }

  private async loadPage(): Promise<void> {
    await this.initializeData();
  }

  async download() {
    await this.aseguradorasService.downloadReport();
}

}