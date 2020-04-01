import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = new Array();

  constructor() {
    this.users.push({
      name: {
        firstName: 'Cesar Gilberto',
        lastName: 'Flores Carrillo',
        fullName: 'Cesar Gilberto Flores Carrillo'
      },
      email: 'cesar@hotmail.es',
      photo: '../assets/img/user.png',
      password: '123456789',
      birthday: new Date('1998-06-29'),
      gender: 'Hombre',
      rfc: 'FOCC123456SSS',
      interests: [
        {interest: 'Hacer ejercicio'},
        {interest: 'Jugar videojuegos'},
        {interest: 'Ver películas'},
        {interest: 'Jugar futbol'}
      ],
      gallery: [{
        photo: 'assets/img/user.png',
        description: 'CESAR'
      }],
      active: true
    });

    this.users.push({
      name: {
        firstName: 'Cristiano Ronaldo',
        lastName: 'Dos Santos Aveiro',
        fullName: 'Cristiano Ronaldo Dos Santos Aveiro'
      },
      email: 'elbichosiucr7@hotmail.com',
      photo: 'assets/img/cr7.jpeg',
      password: '987654321',
      birthday: new Date('1985-02-05'),
      gender: 'Hombre',
      rfc: 'CRSI654321RRR',
      interests: [
        {interest: 'Jugar futbol'},
        {interest: 'Pasear en mis yates'},
        {interest: 'Hacer ejercicio'},
        {interest: 'Nadar en mi alberquita'}
      ],
      gallery: [
        {
          photo: 'assets/img/cr7.jpeg',
          description: 'EL BICHO'
        },
        {
          photo: 'assets/img/cr77.jpeg',
          description: 'EL MEJOR'
        }
      ],
      active: true
    });
   }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
