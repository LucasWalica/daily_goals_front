import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AchievmentsService {

  constructor(private auth:AuthService) { }

  private baseUrl = "https://dailygoals-production.up.railway.app/api/achievments/";


  async getUserAchievments(){
    const url = `${this.baseUrl}achievments/`;
    try {
      const token = this.auth.getToken();
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      throw error;
    }
  }


  async getAchievment(id:number){
    const url = `${this.baseUrl}achievment/${id}/`;
    try {
      const token = this.auth.getToken();
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      throw error;
    }
  }


}
