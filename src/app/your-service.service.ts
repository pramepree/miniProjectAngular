import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YourService {
  private apiUrl = 'http://localhost:3000'; // URL ของเซิร์ฟเวอร์ Node.js

  constructor(private http: HttpClient) { }

  // Get all data
  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/`);
  }

  // Get a single item by id
  getDataById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/articles/${id}`);
  }

  // Create new data
  createData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/articles`, data);
  }

  // Update existing data by id
  updateData(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/articles/${id}`, data);
  }

  // Delete data by id
  deleteData(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/articles/${id}`);
  }

  submitFormData(formData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/submit`, formData);
  }

  uploadImage(imageFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', imageFile);

    // Assuming the server expects a POST request to /upload endpoint
    return this.http.post<any>(`${this.apiUrl}/upload`, formData);
  }
}
